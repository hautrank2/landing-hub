import {
  Building2,
  Cpu,
  FileSignature,
  Handshake,
  Layers,
  ReceiptText,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import type {
  VuhaiCategoryModel,
  VuhaiFaqModel,
  VuhaiFeatureModel,
  VuhaiNavModel,
} from "~/types";

export const vuhaiBase = "/vuhai";
// AI Server is the lead page for now, so it lives at the Vũ Hải root; the former home is VAN-Logistic.
export const vuhaiAiServerHref = vuhaiBase;
export const vuhaiVanLogisticHref = `${vuhaiBase}/van-logistic`;
const legacy = "https://vuhai.co";

export const vuhaiContact = {
  company: "Công ty Cổ phần Ứng dụng Công nghệ Vũ Hải",
  hotline: "1900 232303",
  hotlineHref: "tel:1900232303",
  email: "support@vuhai.co",
  hours: "Thứ Hai – Thứ Sáu, 08:00–17:30",
};

// Order follows the brief: Trang chủ → solutions grid → guides (incl. downloads) → … → About / Agents last.
export const vuhaiNavData: VuhaiNavModel[] = [
  { label: "Trang chủ", href: vuhaiBase },
  {
    label: "Giải pháp",
    href: `${vuhaiVanLogisticHref}#danh-muc`,
    grid: [
      {
        label: "AI Server",
        subtitle: "Thuê GPU server, triển khai dịch vụ AI",
        href: vuhaiAiServerHref,
        icon: Cpu,
        badge: "Mới",
      },
      {
        label: "Giải pháp doanh nghiệp",
        subtitle: "ERP All-in-One cho quản trị toàn diện",
        href: `${legacy}/giai-phap-doanh-nghiep/`,
        external: true,
        icon: Building2,
      },
      {
        label: "Chữ ký số",
        subtitle: "Ký số từ xa hồ sơ và hợp đồng",
        href: `${legacy}/chu-ky-so/`,
        external: true,
        icon: FileSignature,
      },
      {
        label: "Hóa đơn điện tử",
        subtitle: "Phát hành, quản lý hóa đơn điện tử",
        href: `${legacy}/giai-phap-hoa-don-dien-tu/`,
        external: true,
        icon: ReceiptText,
      },
    ],
  },
  { label: "VAN-Logistic", href: vuhaiVanLogisticHref },
  {
    label: "Hướng dẫn",
    href: `${legacy}/video/`,
    external: true,
    children: [
      {
        label: "Hướng dẫn sử dụng (PDF)",
        href: "https://quanly.vuhai.co/Portals/0/Upload/Vanlogistic/HDSD-VAN-Logistic-2026.pdf",
        external: true,
      },
      { label: "Video hướng dẫn", href: `${legacy}/video/`, external: true },
      { label: "Hỗ trợ trực tuyến", href: `${vuhaiBase}#tu-van` },
      { label: "Tải về", href: `${legacy}/download/`, external: true },
    ],
  },
  {
    label: "Tin tức",
    href: `${legacy}/tin-tuc/`,
    external: true,
    children: [
      { label: "Dịch vụ VAN-Logistic", href: `${legacy}/tin-tuc/dich-vu-van-logistic/`, external: true },
      { label: "Văn bản pháp quy", href: `${legacy}/tin-tuc/van-ban-phap-quy/`, external: true },
      { label: "Xuất nhập khẩu", href: `${legacy}/tin-tuc/xuat-nhap-khau/`, external: true },
      { label: "Tuyển dụng", href: `${legacy}/tin-tuc/tuyen-dung/`, external: true },
    ],
  },
  { label: "Về chúng tôi", href: `${legacy}/ve-chung-toi/`, external: true },
  { label: "Đại lý", href: `${legacy}/dai-ly/`, external: true },
];

export const vuhaiFooterLinks = [
  { label: "Chính sách bảo mật thông tin", href: `${legacy}/chinh-sach-bao-mat/`, external: true },
  { label: "Điều khoản đăng ký", href: `${legacy}/dieu-khoan-dang-ky-san-pham/`, external: true },
  { label: "Hướng dẫn mua hàng", href: `${legacy}/huong-dan-mua-hang/`, external: true },
  { label: "Quy định thanh toán", href: `${legacy}/quy-dinh-thanh-toan/`, external: true },
  { label: "Chính sách bàn giao", href: `${legacy}/chinh-sach-ban-giao-san-pham/`, external: true },
  { label: "Chính sách hỗ trợ", href: `${legacy}/chinh-sach-ho-tro-san-pham/`, external: true },
];

// "Danh mục sản phẩm" — AI Server is the lead category.
export const vuhaiCategoryData: VuhaiCategoryModel[] = [
  {
    title: "AI Server",
    subtitle: "Thuê hạ tầng GPU cho dịch vụ AI",
    description:
      "Máy chủ GPU cấu hình cao cho doanh nghiệp thuê theo nhu cầu, kèm hỗ trợ triển khai mô hình AI, chatbot nội bộ và các dịch vụ thị giác máy tính.",
    href: vuhaiAiServerHref,
    icon: Cpu,
    badge: "Danh mục chính",
    highlights: [
      "GPU NVIDIA HGX / GB200, liên kết NVLink",
      "Thuê theo giờ, theo tháng hoặc cụm riêng",
      "Hỗ trợ triển khai và vận hành 24/7",
    ],
  },
  {
    title: "VAN-Logistic",
    subtitle: "Nghiệp vụ xuất nhập khẩu, C/O, Trừ lùi",
    description:
      "Nền tảng quản lý hồ sơ, chứng từ, nguyên phụ liệu và Trừ lùi theo từng bộ hồ sơ cho doanh nghiệp xuất nhập khẩu.",
    href: `${vuhaiVanLogisticHref}#gioi-thieu`,
    icon: Truck,
    highlights: ["Hồ sơ đề nghị cấp C/O", "Trừ lùi nguyên phụ liệu", "Trợ lý AI tích hợp"],
  },
  {
    title: "ERP All-in-One",
    subtitle: "Quản trị doanh nghiệp trên một hệ thống",
    description:
      "Kết nối khách hàng, hợp đồng, công việc và nghiệp vụ xuất nhập khẩu; triển khai theo từng phân hệ hoặc đồng bộ toàn bộ.",
    href: `${legacy}/giai-phap-doanh-nghiep/`,
    external: true,
    icon: Layers,
    highlights: ["CRM, hợp đồng, công việc", "Triển khai theo phân hệ", "Tích hợp Trợ lý AI"],
  },
  {
    title: "Chữ ký số",
    subtitle: "Ký số từ xa",
    description: "Ký số trực tiếp trên hồ sơ và hợp đồng, không cần thiết bị USB Token.",
    href: `${legacy}/chu-ky-so/`,
    external: true,
    icon: FileSignature,
    highlights: ["Ký từ xa, mọi thiết bị", "Tích hợp hồ sơ C/O", "Lưu vết đầy đủ"],
  },
  {
    title: "Hóa đơn điện tử",
    subtitle: "Phát hành và quản lý hóa đơn",
    description: "Phát hành, tra cứu và quản lý hóa đơn điện tử, kết nối với dịch vụ và thanh toán.",
    href: `${legacy}/giai-phap-hoa-don-dien-tu/`,
    external: true,
    icon: ReceiptText,
    highlights: ["Phát hành nhanh", "Quản lý tập trung", "Liên kết hợp đồng, dịch vụ"],
  },
];

export const vuhaiNewsData = [
  { title: "VAN-Logistic nâng cấp Tính năng Tra cứu xuất xứ", date: "05/11/2026", href: `${legacy}/tin-tuc/` },
  {
    title: "Doanh nghiệp xuất nhập khẩu cần lưu ý gì khi lựa chọn phần mềm quản lý?",
    date: "29/10/2026",
    href: `${legacy}/tin-tuc/`,
  },
  {
    title: "Nguyên liệu mua trong nước: Cần lưu ý gì khi chuẩn bị hồ sơ C/O?",
    date: "21/10/2026",
    href: `${legacy}/tin-tuc/`,
  },
  { title: "Quản lý nhiều hồ sơ xuất khẩu cùng VAN-Logistic 2026", date: "14/10/2026", href: `${legacy}/tin-tuc/` },
];

export const vuhaiCapabilityData: VuhaiFeatureModel[] = [
  {
    title: "Nguyên liệu & Trừ lùi",
    description: "Quản lý nguyên liệu, định mức/BOM và sản phẩm xuất.",
    icon: Layers,
    points: [
      "Tự động phân bổ, cảnh báo đủ/thiếu nguyên liệu",
      "Lập bảng kê tiêu chí xuất xứ và báo cáo tồn kho",
    ],
  },
  {
    title: "Tạo hồ sơ & Chứng từ",
    description: "Khởi tạo và quản lý tập trung từng bộ hồ sơ.",
    icon: Workflow,
    points: [
      "Liên kết chứng từ, nguyên liệu và dữ liệu hàng xuất",
      "Tìm kiếm, đối chiếu, phân quyền và lưu vết xử lý",
    ],
  },
  {
    title: "AI & Tiện ích mở rộng",
    description: "Trợ lý AI hướng dẫn, tra cứu và tổng hợp dữ liệu.",
    icon: Sparkles,
    points: ["Tra cứu, thống kê C/O và tiêu chí xuất xứ", "Hỗ trợ nâng cao, thư viện nghiệp vụ"],
  },
  {
    title: "Hỗ trợ hồ sơ C/O điện tử",
    description: "Lập và xử lý hồ sơ trên các hệ thống cấp C/O hiện hành.",
    icon: ScanSearch,
    points: ["Import dữ liệu, xử lý đồng thời nhiều bộ hồ sơ", "20+ tính năng nâng cao"],
  },
];

export const vuhaiEcosystemData: VuhaiFeatureModel[] = [
  {
    title: "Quản lý khách hàng",
    description: "Quản lý tập trung dữ liệu và quá trình chăm sóc khách hàng.",
    icon: Users,
    points: ["Dữ liệu khách hàng và đại lý", "Lịch sử chăm sóc, cơ hội, lịch hẹn"],
  },
  {
    title: "Hợp đồng & Dịch vụ",
    description: "Quản lý hợp đồng, dịch vụ và giao dịch khách hàng.",
    icon: FileSignature,
    points: ["Phụ lục và quy trình phê duyệt", "Ký số, gia hạn, thanh toán, hóa đơn"],
  },
  {
    title: "Công việc & Quy trình",
    description: "Phối hợp công việc, kiểm soát quy trình nội bộ.",
    icon: Workflow,
    points: ["Phòng ban, nhân sự, phân quyền", "Giao việc, theo dõi tiến độ"],
  },
  {
    title: "XNK – C/O – Kho",
    description: "Kết nối hồ sơ xuất nhập khẩu, C/O, kho và nguyên phụ liệu.",
    icon: Truck,
    points: ["Hồ sơ đề nghị cấp C/O", "Trừ lùi, truy xuất, thống kê"],
  },
  {
    title: "Trợ lý AI",
    description: "Hỗ trợ khai thác dữ liệu và xử lý nghiệp vụ trên từng phân hệ.",
    icon: Sparkles,
    points: ["Hướng dẫn quy trình", "Tra cứu, tổng hợp, cảnh báo"],
  },
];

export const vuhaiTrustData = {
  test: { label: "Trường hợp kiểm thử đạt yêu cầu", value: "66/66" },
  items: [
    {
      eyebrow: "Kiểm thử độc lập",
      title: "Trung tâm Công nghệ – Chính phủ số",
      body: "VAN-Logistic hoàn thành kiểm thử độc lập về chức năng và tính chính xác dữ liệu, đáp ứng yêu cầu vận hành nghiệp vụ.",
    },
    {
      eyebrow: "An toàn thông tin",
      title: "CMC Cyber Security",
      body: "Được đánh giá đáp ứng các yêu cầu về an toàn thông tin trong quản lý dữ liệu, vận hành hệ thống và kiểm soát rủi ro.",
    },
    {
      eyebrow: "Năng lực vận hành",
      title: "Cập nhật & cải tiến liên tục",
      body: "Chủ động theo thay đổi nghiệp vụ, biểu mẫu C/O và hệ thống tiếp nhận C/O để xử lý hồ sơ nhanh, thuận tiện hơn.",
    },
  ],
};

export const vuhaiPlansData = {
  standard: {
    name: "VAN-Logistic Thương mại",
    price: "6.500.000đ",
    unit: "/ 1 MST / 1 năm",
    features: [
      "Trừ lùi NPL tiêu chuẩn",
      "Dịch vụ Hỗ trợ hồ sơ C/O",
      "Tra cứu và thống kê C/O",
      "Chữ ký số từ xa",
    ],
    limits: [
      { label: "Trừ lùi NPL", value: "tối đa 500 bộ hồ sơ" },
      { label: "Thiết bị", value: "01 máy tính" },
      { label: "Tài khoản", value: "01 người dùng" },
    ],
  },
  addons: [
    {
      name: "CRM Lite",
      description: "Quản lý khách hàng, liên hệ và lịch sử chăm sóc. Tối đa 03 người dùng.",
      price: "+3.000.000đ",
    },
    {
      name: "HRM Lite",
      description: "Quản lý hồ sơ nhân sự, phòng ban, công việc cơ bản. Tối đa 03 người dùng.",
      price: "+3.000.000đ",
    },
    {
      name: "Trừ lùi nâng cấp",
      description: "Nâng hạn mức lên tối đa 1.000 bộ hồ sơ.",
      price: "+3.000.000đ",
    },
  ],
  customize: [
    "Nhiều người dùng, phân quyền và dữ liệu lớn",
    "Tùy chỉnh dữ liệu, quy trình và phân bổ nguyên liệu",
    "Báo cáo, Activity Log và AI chuyên sâu",
  ],
  erpScope: ["Quản trị & điều hành", "Kinh doanh", "Khách hàng & CRM", "Vận hành nội bộ", "Xuất nhập khẩu", "Trợ lý AI"],
};

export const vuhaiWhyData: VuhaiFeatureModel[] = [
  {
    title: "Am hiểu nghiệp vụ xuất nhập khẩu",
    description: "Giải pháp phát triển từ quy trình C/O, nguyên phụ liệu và hồ sơ xuất nhập khẩu thực tế.",
    icon: ShieldCheck,
  },
  {
    title: "Thiết kế theo quy trình doanh nghiệp",
    description: "Khảo sát quy trình, dữ liệu và yêu cầu quản trị trước khi thiết kế phương án.",
    icon: Workflow,
  },
  {
    title: "Hạ tầng AI sẵn sàng",
    description: "Ngoài phần mềm nghiệp vụ, Vũ Hải cung cấp AI Server để doanh nghiệp triển khai dịch vụ AI riêng.",
    icon: Cpu,
  },
  {
    title: "Đồng hành & mở rộng lâu dài",
    description: "Hỗ trợ từ triển khai đến vận hành, đào tạo và điều chỉnh theo nhu cầu thực tế.",
    icon: Handshake,
  },
];

export const vuhaiProjectData = [
  {
    name: "SmallPin Logistics",
    body: "Triển khai VAN-Logistic phiên bản SMP, thiết kế riêng để quản trị khách hàng, nguyên phụ liệu và Trừ lùi theo quy trình vận hành.",
    cta: "Xem dự án triển khai",
  },
  {
    name: "TCOM Global Logistics",
    body: "Lựa chọn Vũ Hải triển khai độc quyền giải pháp quản lý, Trừ lùi nguyên phụ liệu và hỗ trợ vận hành nghiệp vụ xuất nhập khẩu.",
    cta: "Xem dự án triển khai",
  },
  {
    name: "eComDX",
    body: "Hợp tác chiến lược cùng Trung tâm Phát triển Thương mại điện tử và Công nghệ số – Bộ Công Thương về dịch vụ hỗ trợ nâng cao và giải pháp ký số.",
    cta: "Xem thông tin hợp tác",
  },
];

export const vuhaiVideoData = [
  { title: "Tổng quan tính năng Trừ lùi nguyên phụ liệu", duration: "0:34" },
  { title: "Bài 1: Nguyên liệu nhập", duration: "7:59" },
  { title: "Bài 2: Định mức của nguyên liệu cho sản phẩm", duration: "5:30" },
  { title: "Bài 3: Sản phẩm xuất", duration: "7:53" },
  { title: "Bài 4: Tạo và quản lý danh sách hồ sơ nháp", duration: "8:20" },
  { title: "Bài 5: Danh sách hồ sơ nháp và Báo cáo nháp", duration: "4:01" },
];

export const vuhaiFaqData: VuhaiFaqModel[] = [
  {
    question: "VAN-Logistic phù hợp với những doanh nghiệp nào?",
    answer:
      "Doanh nghiệp sản xuất, xuất nhập khẩu, doanh nghiệp thường xuyên thực hiện C/O, quản lý nguyên phụ liệu và các đơn vị Forwarder/đại lý.",
  },
  {
    question: "Khi nào doanh nghiệp nên lựa chọn phiên bản Customize?",
    answer:
      "Khi có nhiều người dùng, dữ liệu lớn, quy trình nghiệp vụ riêng hoặc cần mở rộng khả năng quản lý, báo cáo và tự động hóa.",
  },
  {
    question: "Vũ Hải hỗ trợ doanh nghiệp như thế nào trong quá trình triển khai?",
    answer: "Đội ngũ Vũ Hải đồng hành từ khảo sát, triển khai, đào tạo đến vận hành và điều chỉnh theo nhu cầu thực tế.",
  },
  {
    question: "Doanh nghiệp có thể thuê AI Server để chạy dịch vụ AI riêng không?",
    answer:
      "Có. Vũ Hải cho thuê máy chủ GPU (theo giờ, theo tháng hoặc cụm riêng) và hỗ trợ cài đặt môi trường, triển khai mô hình, vận hành. Xem chi tiết tại trang AI Server.",
  },
  {
    question: "Làm thế nào để được tư vấn giải pháp phù hợp?",
    answer: "Để lại thông tin ở biểu mẫu bên dưới hoặc gọi hotline 1900 232303 trong giờ làm việc.",
  },
];
