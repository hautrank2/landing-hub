import { Cloud, DatabaseBackup, Network, Server, ShieldCheck, Snowflake, Zap } from "lucide-react";
import type { VuhaiFaqModel, VuhaiFeatureModel, VuhaiStatModel } from "~/types";

// Figures are the design targets of the Vũ Hải reference architecture; the final
// specification of any site is confirmed by sales per request.
export const dcHeroStatData: VuhaiStatModel[] = [
  { label: "Mật độ tủ rack", value: "Tới 120 kW/rack" },
  { label: "PUE thiết kế", value: "< 1,15" },
  { label: "Cấp điện dự phòng", value: "2N" },
  { label: "Giám sát vận hành", value: "24/7/365" },
];

export const dcServiceData: VuhaiFeatureModel[] = [
  {
    title: "Colocation – thuê tủ rack",
    description: "Đặt máy chủ của doanh nghiệp tại phòng máy chuyên dụng, dùng chung điện, làm mát và đường truyền.",
    icon: Server,
    points: ["Thuê theo U, nửa tủ hoặc cả tủ", "Cấp điện và mạng dự phòng", "Ra vào có kiểm soát"],
  },
  {
    title: "Private cloud",
    description: "Hạ tầng ảo hoá riêng trên phần cứng chuyên dụng, tách biệt tài nguyên với khách hàng khác.",
    icon: Cloud,
    points: ["Máy ảo và lưu trữ theo nhu cầu", "Cô lập mạng, phân quyền truy cập", "Mở rộng theo từng giai đoạn"],
  },
  {
    title: "Sao lưu & phục hồi thảm hoạ",
    description: "Sao lưu dữ liệu định kỳ và phương án khôi phục khi sự cố, kiểm thử theo kịch bản thoả thuận.",
    icon: DatabaseBackup,
    points: ["Sao lưu theo chính sách RPO/RTO", "Nhân bản dữ liệu sang địa điểm khác", "Diễn tập phục hồi định kỳ"],
  },
  {
    title: "Kết nối mạng",
    description: "Đường truyền Internet và kết nối riêng cho hệ thống, băng thông mở rộng theo tải thực tế.",
    icon: Network,
    points: ["Internet đa đường truyền", "Kết nối riêng giữa các điểm", "Giám sát băng thông và cảnh báo"],
  },
];

export const dcFacilityData: VuhaiFeatureModel[] = [
  {
    title: "Làm mát chất lỏng",
    description: "Direct-to-Chip liquid cooling cho tải GPU mật độ cao, PUE thiết kế dưới 1,15.",
    icon: Snowflake,
  },
  {
    title: "Điện dự phòng 2N",
    description: "Hai đường cấp điện độc lập, UPS và máy phát giúp tải quan trọng không gián đoạn.",
    icon: Zap,
  },
  {
    title: "An ninh nhiều lớp",
    description: "Kiểm soát ra vào, camera giám sát và phân khu truy cập theo từng khách hàng.",
    icon: ShieldCheck,
  },
  {
    title: "Mạng non-blocking",
    description: "Kiến trúc mạng băng thông cao, độ trễ thấp giữa các node và ra Internet.",
    icon: Network,
  },
];

export const dcSpecData = [
  { label: "Mật độ tủ rack", value: "Tới 120 kW/rack cho tải GPU" },
  { label: "Làm mát", value: "Direct-to-Chip liquid cooling kết hợp làm mát không khí" },
  { label: "Hiệu quả năng lượng", value: "PUE thiết kế < 1,15" },
  { label: "Cấp điện", value: "Dự phòng 2N, UPS và máy phát" },
  { label: "Mạng", value: "InfiniBand 400/800G cho cụm GPU; Ethernet cho dịch vụ thông thường" },
  { label: "Giám sát", value: "NOC/SOC 24/7/365, cảnh báo chủ động" },
  { label: "An ninh vật lý", value: "Kiểm soát ra vào, camera, phân khu theo khách hàng" },
];

export const dcSectorData = [
  "Tài chính – Ngân hàng",
  "Cơ quan nhà nước",
  "Y tế",
  "Sản xuất & Logistics",
  "Viễn thông",
  "Doanh nghiệp xuất nhập khẩu",
];

export const dcProcessData = [
  { step: "01", title: "Khảo sát nhu cầu", body: "Trao đổi số lượng thiết bị, công suất điện, băng thông và mức sẵn sàng mong muốn." },
  { step: "02", title: "Thiết kế phương án", body: "Đề xuất vị trí tủ, cấp điện, làm mát và đấu nối mạng phù hợp." },
  { step: "03", title: "Lắp đặt & đấu nối", body: "Đưa thiết bị vào phòng máy, cấu hình mạng, kiểm tra điện và nhiệt độ." },
  { step: "04", title: "Nghiệm thu", body: "Kiểm tra theo checklist với doanh nghiệp trước khi đưa vào vận hành." },
  { step: "05", title: "Vận hành & hỗ trợ", body: "Giám sát 24/7, hỗ trợ kỹ thuật và điều chỉnh tài nguyên khi nhu cầu thay đổi." },
];

export const dcFaqData: VuhaiFaqModel[] = [
  {
    question: "Data center của Vũ Hải phù hợp với những dịch vụ nào?",
    answer:
      "Thuê tủ rack (colocation), private cloud, sao lưu và phục hồi thảm hoạ, kết nối mạng, cũng như đặt hạ tầng GPU cho dịch vụ AI.",
  },
  {
    question: "Có thể đặt máy chủ riêng của doanh nghiệp tại đây không?",
    answer: "Có. Doanh nghiệp có thể thuê theo U, nửa tủ hoặc cả tủ; Vũ Hải hỗ trợ lắp đặt, đấu nối và giám sát.",
  },
  {
    question: "Điện và làm mát có dự phòng không?",
    answer: "Hạ tầng được thiết kế dự phòng điện 2N và làm mát chất lỏng cho tải mật độ cao. Cấu hình cụ thể được xác nhận khi khảo sát.",
  },
  {
    question: "Chi phí thuê được tính thế nào?",
    answer: "Tuỳ số lượng thiết bị, công suất điện, băng thông và thời hạn. Vui lòng để lại thông tin để nhận báo giá theo nhu cầu.",
  },
];
