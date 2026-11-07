import {
  BrainCircuit,
  Cloud,
  Eye,
  Lock,
  MessagesSquare,
  Server,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";
import type { VuhaiFaqModel, VuhaiFeatureModel, VuhaiStatModel } from "~/types";

// Spec figures come from the reference architecture on the VU HAI data-center page;
// availability and final configuration are confirmed by sales per request.
export const aiHeroStatData: VuhaiStatModel[] = [
  { label: "Liên kết GPU", value: "NVLink 900 GB/s" },
  { label: "Băng thông HBM3e", value: "3,35 TB/s" },
  { label: "Mạng cụm", value: "InfiniBand 400/800G" },
  { label: "Hỗ trợ vận hành", value: "24/7/365" },
];

export const aiWhyData: VuhaiFeatureModel[] = [
  {
    title: "Không cần đầu tư vốn lớn",
    description: "Thuê GPU server thay vì mua: chuyển chi phí đầu tư thành chi phí vận hành theo nhu cầu thực tế.",
    icon: Zap,
  },
  {
    title: "Sẵn sàng chạy ngay",
    description: "Máy chủ được cài sẵn driver, CUDA, container và môi trường, đội ngũ Vũ Hải bàn giao theo checklist.",
    icon: Server,
  },
  {
    title: "Dữ liệu thuộc về doanh nghiệp",
    description: "Tuỳ chọn máy chủ riêng, cô lập mạng; phương án Private AI không đưa dữ liệu ra ngoài.",
    icon: Lock,
  },
  {
    title: "Triển khai cùng chuyên gia",
    description: "Không chỉ thuê phần cứng: hỗ trợ dựng chatbot, RAG, suy luận (inference) và tích hợp vào hệ thống hiện có.",
    icon: Sparkles,
  },
];

export const aiRentalData = [
  {
    name: "GPU Server riêng",
    tag: "Phổ biến nhất",
    icon: Server,
    description: "Máy chủ GPU độc lập (bare-metal), toàn quyền cấu hình, phù hợp chạy dịch vụ AI ổn định lâu dài.",
    points: ["Thuê theo tháng / quý / năm", "Cô lập tài nguyên, hiệu năng ổn định", "Toàn quyền root và tuỳ biến phần mềm"],
  },
  {
    name: "GPU theo giờ",
    tag: "Linh hoạt",
    icon: Cloud,
    description: "Cấp phát nhanh để thử nghiệm, huấn luyện ngắn hạn hoặc xử lý đột biến tải.",
    points: ["Tính phí theo thời gian sử dụng", "Mở rộng và thu hồi nhanh", "Phù hợp POC và fine-tuning ngắn"],
  },
  {
    name: "Cụm GPU (Cluster)",
    tag: "Quy mô lớn",
    icon: BrainCircuit,
    description: "Nhiều node liên kết InfiniBand non-blocking cho huấn luyện mô hình lớn và HPC.",
    points: ["8 GPU/node, miền NVLink", "Lưu trữ song song thông lượng cao", "Thiết kế theo yêu cầu dự án"],
  },
  {
    name: "Private AI on-premise",
    tag: "Bảo mật cao",
    icon: Lock,
    description: "Hạ tầng AI tách biệt (air-gapped) cho tổ chức yêu cầu dữ liệu không rời khỏi hệ thống.",
    points: ["Không phơi nhiễm telemetry ra ngoài", "Phù hợp tài chính, y tế, khối nhà nước", "Khảo sát và thiết kế riêng"],
  },
];

export const aiSpecData = [
  { label: "GPU", value: "NVIDIA HGX (8 GPU/node), GB200 NVL72 cho cụm lớn" },
  { label: "Liên kết GPU", value: "NVLink 900 GB/s" },
  { label: "Bộ nhớ GPU", value: "HBM3e, băng thông 3,35 TB/s" },
  { label: "Mạng cụm", value: "InfiniBand Quantum-2, fat-tree non-blocking, 400/800 Gbps" },
  { label: "Độ trễ giữa node", value: "< 1,2 µs" },
  { label: "Lưu trữ", value: "Lưu trữ song song (Weka / Lustre), > 2,4 TB/s" },
  { label: "Làm mát", value: "Direct-to-Chip liquid cooling, mật độ tới 120 kW/rack" },
  { label: "Hệ điều hành & phần mềm", value: "Ubuntu, CUDA, Docker, Kubernetes theo yêu cầu" },
];

export const aiUseCaseData: VuhaiFeatureModel[] = [
  {
    title: "Chatbot & Trợ lý nội bộ",
    description: "Dựng LLM riêng và RAG trên tài liệu doanh nghiệp: hỏi đáp quy trình, hợp đồng, nghiệp vụ.",
    icon: MessagesSquare,
    points: ["LLM mã nguồn mở hoặc mô hình riêng", "Kết nối kho tài liệu, ERP, CRM"],
  },
  {
    title: "Thị giác máy tính",
    description: "Nhận dạng, kiểm tra chất lượng, OCR chứng từ với độ trễ thấp.",
    icon: Eye,
    points: ["OCR hồ sơ, hoá đơn, C/O", "Phát hiện lỗi sản phẩm theo thời gian thực"],
  },
  {
    title: "Huấn luyện & Fine-tuning",
    description: "Tinh chỉnh mô hình trên dữ liệu của doanh nghiệp, thuê GPU theo giờ hoặc cụm riêng.",
    icon: SlidersHorizontal,
    points: ["Fine-tune LLM, mô hình nhận dạng", "Checkpoint trên lưu trữ thông lượng cao"],
  },
  {
    title: "AI Inference API",
    description: "Chạy mô hình dưới dạng API ổn định cho ứng dụng và khách hàng của bạn.",
    icon: Cloud,
    points: ["Autoscale theo tải", "Giám sát, log và phân quyền truy cập"],
  },
];

export const aiInfraData = [
  { title: "Làm mát chất lỏng", body: "Direct-to-Chip, PUE thiết kế < 1,15." },
  { title: "Cấp điện dự phòng 2N", body: "Hạ tầng điện dự phòng cho tải quan trọng." },
  { title: "Mạng non-blocking", body: "InfiniBand 400/800G, định tuyến thích ứng." },
  { title: "Vận hành 24/7/365", body: "Giám sát NOC/SOC và cảnh báo chủ động." },
];

export const aiProcessData = [
  { step: "01", title: "Tiếp nhận nhu cầu", body: "Trao đổi mục tiêu AI, dữ liệu, quy mô người dùng và yêu cầu bảo mật." },
  { step: "02", title: "Chọn cấu hình", body: "Đề xuất loại GPU, số node, lưu trữ và thời hạn thuê phù hợp." },
  { step: "03", title: "Cấp phát & cài đặt", body: "Dựng môi trường CUDA, container, Kubernetes; kiểm tra hiệu năng trước bàn giao." },
  { step: "04", title: "Triển khai dịch vụ AI", body: "Đưa mô hình, RAG hoặc API vào chạy; tích hợp với hệ thống hiện có." },
  { step: "05", title: "Vận hành & tối ưu", body: "Giám sát 24/7, hỗ trợ kỹ thuật, điều chỉnh tài nguyên khi nhu cầu thay đổi." },
];

export const aiSectorData = ["Tài chính – Ngân hàng", "Cơ quan nhà nước", "Y tế & Khoa học sự sống", "Sản xuất & Robotics", "Viễn thông", "Năng lượng"];

export const aiFaqData: VuhaiFaqModel[] = [
  {
    question: "Thuê AI Server khác gì thuê cloud thông thường?",
    answer:
      "Bạn nhận máy chủ GPU chuyên dụng với cấu hình rõ ràng, tài nguyên không chia sẻ và có đội ngũ hỗ trợ triển khai dịch vụ AI, thay vì chỉ cấp phát máy ảo.",
  },
  {
    question: "Dữ liệu của doanh nghiệp có được bảo mật không?",
    answer:
      "Máy chủ riêng được cô lập; với yêu cầu cao hơn, phương án Private AI (air-gapped) giữ dữ liệu trong hệ thống của doanh nghiệp. Chi tiết được thống nhất khi khảo sát.",
  },
  {
    question: "Thời gian thuê tối thiểu và chi phí là bao nhiêu?",
    answer:
      "Tuỳ mô hình (theo giờ, tháng hoặc cụm riêng) và loại GPU. Vũ Hải báo giá theo cấu hình và thời hạn thực tế — vui lòng để lại thông tin để được tư vấn.",
  },
  {
    question: "Vũ Hải có hỗ trợ triển khai mô hình AI không?",
    answer: "Có. Đội ngũ hỗ trợ cài đặt môi trường, dựng chatbot/RAG, API suy luận và tích hợp với hệ thống như VAN-Logistic hoặc ERP.",
  },
];
