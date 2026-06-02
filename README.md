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

## 維護注意事項
- `docs/` 內的 `final_copy_*.md` 是目前網站文案來源候選，刪除前請先確認。
- 圖片檔名含中文，若未來要調整路徑，需同步更新 HTML 與 `image_mapping.md`。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
