import { expect, type Page, test } from "@playwright/test";

const internalNavLinks = [
  { name: "歷史沿革", path: /\/index\.html$/ },
  { name: "歷史背景", path: /\/history-background\.html$/ },
  { name: "創寺法師", path: /\/founding-monk\.html$/ },
  { name: "籌建過程", path: /\/construction-process\.html$/ }
];

const consoleErrorsByPage = new WeakMap<Page, string[]>();

test.beforeEach(async ({ page }) => {
  const consoleErrors: string[] = [];
  consoleErrorsByPage.set(page, consoleErrors);

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "歷史沿革", level: 1 })).toBeVisible();
});

test.afterEach(async ({ page }) => {
  expect(consoleErrorsByPage.get(page) ?? []).toEqual([]);
});

test("homepage loads without horizontal overflow", async ({ page }, testInfo) => {
  await expect(page).toHaveTitle(/華光寺｜歷史沿革/);

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);

  await page.screenshot({
    fullPage: true,
    path: testInfo.outputPath(`homepage-${testInfo.project.name}.png`)
  });
});

test("main navigation links are clickable", async ({ page }) => {
  for (const link of internalNavLinks) {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "主要導覽" });
    const navLink = nav.getByRole("link", { name: link.name });

    if (!(await navLink.isVisible())) {
      await page.getByRole("button", { name: "開啟導覽" }).click();
    }

    await expect(navLink).toBeVisible();
    await navLink.click();
    await expect(page).toHaveURL(link.path);
  }
});

test("important images load correctly", async ({ page }) => {
  const importantImages = page.locator(
    ".site-logo, .hero-image, .topic-card img, .article-main-figure img, .inline-figure img"
  );
  const imageCount = await importantImages.count();

  expect(imageCount).toBeGreaterThan(0);

  for (let index = 0; index < imageCount; index += 1) {
    const image = importantImages.nth(index);

    await expect(image).toBeVisible();
    await expect(image).toHaveJSProperty("complete", true);

    const naturalWidth = await image.evaluate((element) => {
      return element instanceof HTMLImageElement ? element.naturalWidth : 0;
    });

    expect(naturalWidth).toBeGreaterThan(0);
  }
});
