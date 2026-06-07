# huahkwang-history-site

## 專案名稱
華光寺｜歷史沿革

## 網站用途
本專案是華光寺網站系統中的「歷史沿革」小型多頁靜態網站，用於介紹華光寺的歷史背景、創寺法師與籌建過程。

## 主要檔案結構

```text
huahkwang-history-site/
├─ index.html
├─ history-background.html
├─ founding-monk.html
├─ construction-process.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/script.js
│  ├─ icons/
│  └─ images/
├─ docs/
└─ content_manifest.md
```

## 本地預覽方式
可直接在瀏覽器開啟 `index.html`，或在本專案目錄執行：

```bash
python3 -m http.server
```

再到瀏覽器開啟 `http://localhost:8000/`。

## Playwright 網頁檢查

本專案使用 Playwright 進行基本視覺與功能檢查。測試會啟動本機 server，不直接使用 `file://`。

第一次使用請先安裝依賴與瀏覽器：

```bash
npm install
npx playwright install chromium
```

執行基本檢查：

```bash
npm run test:visual
```

開啟瀏覽器視窗執行，方便觀察互動流程：

```bash
npm run test:visual:headed
```

查看 HTML 測試報告：

```bash
npm run show-report
```

測試內容包含：
- 首頁可正常載入
- desktop viewport：1440x900
- mobile viewport：390x844
- 沒有水平 overflow
- 主要導覽連結可點
- 重要圖片有正常載入
- console 沒有 error
- 產生 desktop 與 mobile screenshot，供人工比對

## 維護注意事項
- `docs/` 內的 `final_copy_*.md` 是目前網站文案來源候選，刪除前請先確認。
- 圖片檔名已整理為英文安全檔名；若未來要調整路徑，需同步更新 HTML 與 `image_mapping.md`。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
