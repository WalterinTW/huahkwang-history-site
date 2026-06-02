# image_mapping.md

## 用途說明
本檔案用來提供 `huahkwang-history-site` 的圖片對照規格，供 Codex 與後續維護使用。  
內容包含：

- 圖片檔名
- caption（圖片說明）
- 建議使用頁面
- 建議使用區塊
- 圖片角色（主圖 / 輔助圖 / Hero 候選）
- 備註

---

## A. 首頁 `index.html`

### Hero 區建議
- `1-1_舍衛城祇樹給孤獨園聖地照.jpg`
  - caption：舍衛城祇樹給孤獨園聖地一景
  - page：`index.html`
  - section：Hero
  - role：hero_candidate
  - note：最適合用作首頁 Hero，能直接帶出佛陀聖地與歷史背景。

### 歷史背景摘要區建議
- `1-1_華光寺寺名.jpg`
  - caption：華光寺寺名
  - page：`index.html`
  - section：歷史背景摘要區
  - role：supporting_image
  - note：適合作為摘要區的小圖或細節圖。

### 創寺法師摘要區建議
- `1-2_仁證法師法照.jpg`
  - caption：仁證法師法相
  - page：`index.html`
  - section：創寺法師摘要區
  - role：section_main_image
  - note：首頁此區最適合用這張，人物辨識清楚。

### 籌建過程摘要區建議
- `1-3_華光寺大殿內碑記.jpg`
  - caption：華光寺大殿內建寺碑記
  - page：`index.html`
  - section：籌建過程摘要區
  - role：section_main_image
  - note：可直接帶出建寺與重建的歷史感。

### 首頁可選輔助圖
- `1-1_華光寺早期大殿.jpg`
  - caption：華光寺早期大殿舊照
  - page：`index.html`
  - section：歷史背景摘要區（可選）
  - role：optional_supporting_image
  - note：若首頁需要補一張歷史感照片，可使用。

- `1-3_華光寺佛塔舊照.jpg`
  - caption：華光寺佛塔舊照
  - page：`index.html`
  - section：籌建過程摘要區（可選）
  - role：optional_supporting_image
  - note：可與碑記圖擇一搭配使用。

---

## B. 詳細頁 `history-background.html`

### 主圖
- `1-1_舍衛城祇樹給孤獨園聖地照.jpg`
  - caption：舍衛城祇樹給孤獨園聖地一景
  - page：`history-background.html`
  - section：頁首主圖 / 首圖
  - role：main_image
  - note：本頁最主要的代表圖。

### 輔助圖
- `1-1_華光寺寺名.jpg`
  - caption：華光寺寺名
  - page：`history-background.html`
  - section：正文中段或圖片區
  - role：supporting_image
  - note：適合搭配文字說明寺名與象徵意義。

- `1-1_華光寺早期大殿.jpg`
  - caption：華光寺早期大殿舊照
  - page：`history-background.html`
  - section：正文下半部或圖片區
  - role：supporting_image
  - note：可用來補充歷史氛圍與早期樣貌。

---

## C. 詳細頁 `founding-monk.html`

### 主圖
- `1-2_仁證法師法照.jpg`
  - caption：仁證法師法相
  - page：`founding-monk.html`
  - section：頁首主圖 / 首圖
  - role：main_image
  - note：本頁最主要的代表圖。

### 輔助圖
- `1-2_仁證法師與舍衛國祇樹給孤獨園華光寺文稿.jpg`
  - caption：仁證法師與舍衛城華光寺相關史料
  - page：`founding-monk.html`
  - section：正文中後段或圖片區
  - role：supporting_image
  - note：適合用作法師生平與史料輔助圖。

---

## D. 詳細頁 `construction-process.html`

### 主圖
- `1-3_華光寺大殿內碑記.jpg`
  - caption：華光寺大殿內建寺碑記
  - page：`construction-process.html`
  - section：頁首主圖 / 首圖
  - role：main_image
  - note：本頁最主要的代表圖，最能呼應籌建過程。

### 輔助圖
- `1-3_華光寺佛塔舊照.jpg`
  - caption：華光寺佛塔舊照
  - page：`construction-process.html`
  - section：正文前半段或圖片區
  - role：supporting_image
  - note：可用於補充寺院早期風貌。

- `1-3_建寺碑文正文.jpg`
  - caption：華光寺建寺碑文正文
  - page：`construction-process.html`
  - section：正文中段或圖片區
  - role：supporting_image
  - note：適合搭配文字提到碑文、建寺記錄時使用。

- `1-3_建寺捐款芳名錄-compressed.jpg`
  - caption：建寺捐款芳名錄碑
  - page：`construction-process.html`
  - section：正文中後段或圖片區
  - role：supporting_image
  - note：適合用來呼應十方護持與募化歷程；正式頁使用壓縮版，原始高解析圖保留於 `assets/images/1-3_建寺捐款芳名錄.jpg`。

- `1-3_華光寺舍利塔.jpg`
  - caption：華光寺舍利塔
  - page：`construction-process.html`
  - section：正文後半段或圖片區
  - role：supporting_image
  - note：可作為寺院建築補充圖。

- `1-3_護持者紀念浮雕.jpg`
  - caption：仁證法師、李俊承居士與陳江輝煌居士浮雕紀念像
  - page：`construction-process.html`
  - section：正文後段或圖片區
  - role：supporting_image
  - note：適合搭配護持者、重建支持力量的段落使用。

---

## E. 首頁與詳細頁的整體選圖原則

### 1. 首頁
首頁重點是：
- 快速導覽
- 三段摘要
- 延伸閱讀入口

因此首頁圖片不宜過多，建議：
- Hero：1 張
- 三個摘要區：各 1 張
- 總數建議：4 張左右即可

### 2. 詳細頁
詳細頁可比首頁放更多圖，但仍要控制節奏，避免變成相簿頁。  
建議：
- 每頁 1 張主圖
- 1～3 張輔助圖
- 若某圖與文字對應不明確，寧可不用

### 3. 圖片角色優先順序
若 Codex 需要取捨，優先使用：
1. `1-1_舍衛城祇樹給孤獨園聖地照.jpg`
2. `1-2_仁證法師法照.jpg`
3. `1-3_華光寺大殿內碑記.jpg`

---

## F. GitHub Pages 與實作提醒
- 所有圖片路徑請使用：`assets/images/檔名.jpg`
- 不要使用絕對路徑 `/assets/images/...`
- 若圖片不適合作為 Hero，請改用支援圖，不要強行放大
- 若需要 alt text，可先直接沿用 caption 內容

---

## G. 給 Codex 的簡短提醒
- 首頁用圖要節制，不要塞太多
- 首頁 Hero 以 `1-1_舍衛城祇樹給孤獨園聖地照.jpg` 優先
- 詳細頁首圖依各頁對應主題使用
- 若需要補充圖，依本檔案的 page 與 section 建議使用