# Lịch sử sửa vuhai.co — 10/11/2026

Mỗi dòng ghi giá trị **cũ → mới** để có thể khôi phục (revert).

- **Menu:** Giao diện → Menu → chọn menu → mở mục → dán lại link cũ → Lưu menu.
- **Bài viết / trang:** mở bài trong wp-admin → khung "Bản sửa đổi" (Revisions) → chọn bản trước 10/11/2026 → Khôi phục.
- **Trang Elementor:** mở bằng Elementor → biểu tượng Lịch sử (đồng hồ) góc dưới trái → tab "Bản sửa đổi" → chọn bản trước → Áp dụng → Cập nhật.
- **Bản nháp:** mở trang → Trạng thái → Đã xuất bản → Cập nhật.

## 1. Menu

### Menu-English (ID 130)
| Mục (ID) | Cũ | Mới |
|---|---|---|
| AI & Data center (26117) | `/en` | `#` |
| Software (26148) | `/en` | `#` |
| Manual (26165) | `/en` | `#` |
| News (26171) | `/en` | `#` |

### Menu chính 2 — tiếng Việt (ID 59)
| Mục (ID) | Cũ | Mới |
|---|---|---|
| Phần mềm (22309) | `https://vuhai.co/` | `#` |
| Liên hệ (23654) | `https://vuhai.co/#contact` | `/vi/#tu-van` |
| Giải pháp AI (26060) | `https://vuhai.co/ai-service/` | `/vi/ai-service/` |
| Giải pháp Data Center (26061) | `https://vuhai.co/data-center/` | `/vi/data-center/` |
| VAN-Logistic (26062) | `https://vuhai.co/trang-chu-2-1/` | `/vi/trang-chu-2-1/` |

### Footer Menu 1 — tiếng Việt (ID 5)
| Mục (ID) | Cũ | Mới |
|---|---|---|
| Tính năng nổi bật (268) | `/#tinh-nang` | `/vi/trang-chu-2-1/#tinh-nang` |
| Bảng giá (269) | `/#bang-gia` | `/vi/trang-chu-2-1/#bang-gia` |
| Đăng ký sử dụng (270) | `/#dang-ky` | `/vi/trang-chu-2-1/#dang-ky` |

### Menu chính (cũ, ID 2)
| Mục (ID) | Cũ | Mới |
|---|---|---|
| VAN-LOGISTIC (80) | `https://vuhai.co/van-logistic-phan-mem-ho-tro-ke-khai-c-o-dien-tu/#gioi-thieu` | `https://vuhai.co/vi/van-logistic-phan-mem-ho-tro-ke-khai-c-o-dien-tu/` |
| TÍNH NĂNG (81) | `/#tinh-nang` | `/vi/trang-chu-2-1/#tinh-nang` |
| BÁO GIÁ (82) | `/#bang-gia` | `/vi/trang-chu-2-1/#bang-gia` |

## 2. Trang Elementor (revert bằng Lịch sử → Bản sửa đổi trong Elementor)
| Trang (ID) | Phần tử | Cũ | Mới |
|---|---|---|---|
| Trang chủ EN `/` (26072) | HTML e33bef1, 19caba4 | `href="#vh26-lien-he"` | `href="#tu-van"` |
| Trang chủ VI `/vi/` (26021) | HTML 1ef87cc, bff2636 | `href="#vh26-lien-he"` | `href="#tu-van"` |
| `/vi/trang-chu/` (2) | Button 1f5796d "Xem tất cả" | `/tin-tuc-dich-vu` | `/vi/tin-tuc/` |
| `/digital-signature/` (26156) | Icon list 8dfc759, mục b2e7e75 | link `Thay đổi phương thức ký điện tử linh hoạt` | (bỏ link, giữ chữ) |
| `/vi/chu-ky-so/` (18363) | Icon list, mục b2e7e75 | link `Thay đổi phương thức ký điện tử linh hoạt` | (bỏ link, giữ chữ) |
| `/vi/van-logistic-phan-mem-ho-tro-ke-khai-c-o-dien-tu/` (20096) | HTML bc03573 | `https://vuhai.co/#dang-ky` | `https://vuhai.co/vi/trang-chu-2-1/#dang-ky` |
| `/vi/trang-chu-2-1/` (23297) | HTML 7d75537 "Dùng thử miễn phí" | `href="/#dang-ky"` | `href="#dang-ky"` |
| `/van-logistics/` (26150) | HTML 7d75537 "Dùng thử miễn phí" | `href="/#dang-ky"` | `href="#dang-ky"` |
| Template "Post Archive Page - Sidebar" (22948) — dùng ở các trang tin tức | Button 82bd2c4 "Dùng thử miễn phí" | `/#dang-ky` | `/vi/trang-chu-2-1/#dang-ky` |

## 3. Bài viết (revert bằng Bản sửa đổi của bài)
| Bài (ID) | Cũ | Mới |
|---|---|---|
| 21584, 21222, 21964, 22016, 21834 (5 bài C/O) | `https://vuhai.co/van-logistic-dich-vu-ho-tro-ke-khai-c-o-dien-tu/` | `https://vuhai.co/vi/tin-tuc/dich-vu-van-logistic/` |
| 21834 | `…/van-logistic-phan-mem-ho-tro-ke-khai-c-o-dien-tu/#gioi-thieu` | `…/van-logistic-phan-mem-ho-tro-ke-khai-c-o-dien-tu/` |
| 22220 (bản 2.5.2.0), 24216 (bản 2.6.0.0) | `https://vuhai.co/#dang-ky` | `https://vuhai.co/vi/trang-chu-2-1/#dang-ky` |
| 19066 (bản 2.0.2.0), 20075 (bản 2.3.3.0), 21566 (thuế GTGT) | `https://vuhai.co/#bang-gia` (và `#bang-gia/`) | `https://vuhai.co/vi/trang-chu-2-1/#bang-gia` |

## 4. Chuyển về Bản nháp (trước đó: Đã xuất bản)
| Trang (ID) | Link cũ |
|---|---|
| Bài "HDCD Test" (16711) | `/vi/hdcd-test/` |
| Trang "HDSD VAN‑Logistic 2026" (25960) | `/vi/hdsd-van-logistic-2026/` |
| Trang "Nháp" (16564) | `/vi/nhap/` |

## 5. Chưa sửa được
| Trang (ID) | Lý do |
|---|---|
| "Trang chủ_old" `/vi/trang-chu-2-0/` (22301) | Elementor báo lỗi máy chủ 500 khi lưu (thử 2 lần). Chưa có gì thay đổi. 2 nút vẫn trỏ `https://vuhai.co/#dang-ky`. |
| "Chữ ký số test" `/vi/chu-ky-so-2/` (18490) | Nút `#form-cks` nằm trong template 18450 dùng chung với `/vi/chu-ky-so/` và `/digital-signature/` (ở 2 trang đó link đang đúng). Sửa template sẽ làm hỏng 2 trang kia. Đề xuất: chuyển trang test này về Bản nháp — chờ bạn đồng ý. |

Sau khi sửa: đã xoá LiteSpeed Cache (Purge All).

## 6. Dịch các trang tiếng Anh (VI → EN)
Bảng đối chiếu từng câu: `export/wordpress/ban-dich-trang-en.md`.
Revert: mở trang bằng Elementor → Lịch sử (đồng hồ) → Bản sửa đổi → chọn bản trước khi dịch → Áp dụng → Cập nhật.

| Trang (ID) | Số chỗ đã thay |
|---|---|
| `/downloads/` (26169) | 17 |
| `/videos/` (26180) | 12 |
| `/e-invoice-solution/` (26161) | 37 + 4 thông báo form (gửi thành công / lỗi) |
| `/digital-signature/` (26156) | 55 |
| `/enterprise-solutions/` (26153) | 166 |
| `/van-logistics/` (26150) | 523 |

Không đổi: tiêu đề email thông báo form (chỉ admin thấy), tên công ty trong email.
Còn tiếng Việt: bảng giá Chữ ký số trên `/digital-signature/` (nằm trong template 18450 dùng chung với `/vi/chu-ky-so/`), 5 tiêu đề tin tức trên `/van-logistics/` (lấy tự động từ bài viết tiếng Việt).

## 7. Bảng giá Chữ ký số bản EN
- Tạo template mới **"Bảng giá Chữ ký số (EN)" (ID 26321)**, sao chép từ template 18450, rồi dịch sang tiếng Anh (giá: `đ` → `VND`).
- Trang `/digital-signature/` (26156), widget Template db2fc59: `template_id` **18450 → 26321**.
- Template 18450 không đổi → `/vi/chu-ky-so/` vẫn tiếng Việt.
- Revert: mở trang 26156 bằng Elementor → chọn widget Template → chọn lại template 18450 → Cập nhật.
- Lưu ý: sau này đổi giá phải sửa ở **cả 2 template** (18450 cho VI, 26321 cho EN).

## 8. Ảnh About us bản EN
Trang `/about-us/` (26176), chỉ trang EN — `/vi/ve-chung-toi/` giữ ảnh cũ.
| Widget | Cũ | Mới |
|---|---|---|
| Image 9a32791 | `2025/09/5-1.png` (ID 23701) | `2026/11/about-history-en.png` (ID 26328) |
| Image 99baee8 | `2025/09/6-1.png` (ID 23702) | `2026/11/about-vision-en.png` (ID 26329) |
Chờ upload: `about-principles-en.png` (thay `7.png`), `about-partners-en.png` (thay `8.png`).
| Image fbeaf05 | `2025/09/7.png` | `2026/11/about-principles-en.png` (ID 26334) |
Ảnh `8.png` (đối tác & khách hàng) giữ nguyên theo yêu cầu.
