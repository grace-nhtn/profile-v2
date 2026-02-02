import { CVData } from '../model/cv';

export const cvDataEn: CVData = {
  personalInfo: {
    name: 'Nguyen Hoai Thanh Ngoc',
    title: 'Front-end Developer',
    dateOfBirth: '23/05/1997',
    phone: '0363295271',
    email: 'ngocnht.uit@gmail.com',
    gender: 'Female',
  },
  education: {
    school: 'University of Information Technology - Vietnam National University Ho Chi Minh City',
    major: 'Computer Network and Communication',
    period: {
      start: 'Sept 2015',
      end: 'Jun 2020',
    },
    gpa: '7.8/10',
  },
  skills: [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'CSS', category: 'language' },
    { name: 'HTML', category: 'language' },
    { name: 'ReactJS', category: 'framework' },
    { name: 'Bootstrap', category: 'library' },
    { name: 'Ant Design', category: 'library' },
    { name: 'Redux', category: 'library' },
  ],
  workExperience: [
    {
      company: 'GHN Express',
      position: 'Web Developer',
      period: {
        start: '6/2020',
        end: 'Now',
      },
      description: [
        'Developed and maintained multiple web applications using ReactJS and TypeScript, ensuring high code quality and performance.',
        'Collaborated with cross-functional teams including Product, Design, and Backend to deliver scalable front-end solutions.',
        'Mentored junior developers and onboarded new team members, improving team productivity and knowledge sharing.',
        'Architected and implemented reusable component libraries using Ant Design, reducing development time by 30%.',
        'Participated in technical discussions and contributed to architectural decisions for new projects.',
        'Optimized application performance through code splitting, lazy loading, and state management with Redux.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'Ant Design', 'JavaScript'],
    },
    {
      company: 'Beesight Soft',
      position: 'Web Developer',
      period: {
        start: '6/2018',
        end: '2/2020',
      },
      description: [
        'Developed cross-platform mobile applications using PhoneGap and ReactJS for various client projects.',
        'Analyzed client requirements, evaluated project feasibility, and proposed technical solutions.',
        'Built responsive web applications with ReactJS, ensuring optimal user experience across devices.',
        'Collaborated with international clients to deliver high-quality software solutions.',
        'Gained experience in diverse project types including e-commerce, management systems, and training platforms.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
    },
  ],
  projects: [
    {
      name: 'Payroll',
      role: 'Developer',
      period: {
        start: '09/2022',
        end: 'Now',
      },
      description:
        'Developed a comprehensive Compensation & Benefits Management System using ReactJS and Ant Design. Implemented automated salary calculation algorithms, employee data management, and bonus policy configuration. Built import/export tools for data integration and integrated bank transaction APIs. The system streamlines HR operations, improves accuracy in payroll processing, and provides transparent compensation management.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['HRM', 'Payroll Management', 'Data Integration', 'Bank API Integration', 'Automated Calculations'],
    },
    {
      name: 'HRM Core',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Now',
      },
      description:
        'Built a comprehensive Human Resource Management System using ReactJS and Ant Design. Developed modules for department management, employee information tracking, contract management, and working shift scheduling. Implemented role-based access control and data visualization dashboards. The system provides a centralized platform for HR teams to efficiently manage all aspects of human resources.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['HRM', 'Employee Management', 'Contract Management', 'Shift Scheduling', 'Data Management'],
    },
    {
      name: 'Candidate',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Now',
      },
      description:
        'Developed a Candidate Management System using ReactJS and Ant Design to streamline the recruitment process. Implemented configurable interview workflows based on department and job title, candidate tracking through multiple stages, and analytics dashboards. Built collaboration features for hiring teams and automated notification systems. The system improves hiring efficiency and provides data-driven insights for recruitment decisions.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['Recruitment', 'Candidate Tracking', 'Workflow Management', 'Analytics', 'HRM'],
    },
    {
      name: 'ZNS Chat',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Built a real-time chat service integrated with Zalo messaging platform using ReactJS. Implemented real-time messaging functionality with Socket.IO for instant communication. Developed client-side data persistence using DexieDB (IndexedDB wrapper) for offline message storage. Integrated Zalo API for message receiving and processing. The project provided valuable experience in real-time communication, external API integration, and client-side database management.',
      technologies: ['ReactJS', 'Socket.IO', 'DexieDB', 'Zalo API', 'JavaScript'],
      keywords: ['Real-time Communication', 'Socket.IO', 'API Integration', 'Client-side Database', 'Chat Application'],
    },
    {
      name: 'Cost',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Developed a Purchase Request Management System for departmental procurement processes. Implemented purchase request form creation and approval workflows, department-based purchase type configuration, and responsible person assignment. Built features for tracking purchase requests, managing budgets, and generating reports. The system streamlines procurement processes and improves cost control across departments.',
      technologies: ['ReactJS', 'Ant Design', 'Redux', 'JavaScript'],
      keywords: ['Procurement Management', 'Workflow Management', 'Department Management', 'Cost Control'],
    },
    {
      name: 'CRM',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: 'Now',
      },
      description:
        'Built a comprehensive Customer Relationship Management system using ReactJS. Developed modules for customer record management, contract tracking, customer wallet management, and inter-customer transfers. Implemented bulk data import/export tools for efficient data management. Created configuration systems for customizing games and interactive features for clients and employees. The system provides a complete solution for customer relationship management and engagement.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['CRM', 'Customer Management', 'Data Management', 'Bulk Operations', 'Gamification'],
    },
    {
      name: 'Notification',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Developed a Notification Management System using ReactJS and React Bootstrap. Built features for creating, editing, and scheduling notifications (alerts and banners) for customer apps and websites. Implemented notification delivery scheduling, targeting options, and analytics tracking. The system ensures efficient notification delivery and improves customer engagement through timely communication.',
      technologies: ['ReactJS', 'React Bootstrap', 'JavaScript'],
      keywords: ['Notification System', 'Scheduling', 'Multi-channel Delivery', 'Customer Engagement'],
    },
    {
      name: 'Fixle',
      role: 'Developer',
      period: {
        start: '11/2018',
        end: '4/2019',
      },
      description:
        'Developed a House Job Distribution Application with multi-role support (Master Admin, Company Admin, Provider, Client). Implemented job assignment workflows, provider management, client request handling, and admin dashboards. Built features for tracking job status, managing service providers, and handling payments. The system streamlines house service job distribution and improves service delivery efficiency.',
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Job Management', 'Multi-role System', 'Workflow Management', 'Service Distribution'],
    },
    {
      name: 'Primary ITO',
      role: 'Developer',
      period: {
        start: '3/2019',
        end: '12/2019',
      },
      description:
        'Developed a Training Management Application for the Primary Sector using PhoneGap, ReactJS, Redux, and Bootstrap. Built features for Training Advisors to manage workplaces, learners, and training programs. Implemented capability plan creation and tracking, learner progress monitoring, and PDF report generation with email functionality. The app supports offline operation, enabling remote training management without internet connectivity. The system improves training efficiency and provides comprehensive reporting capabilities.',
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Training Management', 'Offline Support', 'PDF Generation', 'Progress Tracking', 'Mobile App'],
    },
  ],
};

export const cvDataVn: CVData = {
  personalInfo: {
    name: 'Nguyễn Hoài Thanh Ngọc',
    title: 'Front-end Developer',
    dateOfBirth: '23/05/1997',
    phone: '0363295271',
    email: 'ngocnht.uit@gmail.com',
    gender: 'Nữ',
  },
  education: {
    school: 'Đại học Công nghệ Thông tin - Đại học Quốc gia Thành phố Hồ Chí Minh',
    major: 'Mạng máy tính và Truyền thông dữ liệu',
    period: {
      start: '09/2015',
      end: '06/2020',
    },
    gpa: '7.8/10',
  },
  skills: [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'CSS', category: 'language' },
    { name: 'HTML', category: 'language' },
    { name: 'ReactJS', category: 'framework' },
    { name: 'Bootstrap', category: 'library' },
    { name: 'Ant Design', category: 'library' },
    { name: 'Redux', category: 'library' },
  ],
  workExperience: [
    {
      company: 'GHN Express',
      position: 'Web Developer',
      period: {
        start: '6/2020',
        end: 'Hiện tại',
      },
      description: [
        'Phát triển và bảo trì nhiều ứng dụng web sử dụng ReactJS và TypeScript, đảm bảo chất lượng code và hiệu suất cao.',
        'Hợp tác với các team đa chức năng bao gồm Product, Design và Backend để xây dựng các giải pháp front-end có khả năng mở rộng.',
        'Hướng dẫn các developer junior và onboard thành viên mới, cải thiện năng suất team và chia sẻ kiến thức.',
        'Thiết kế và xây dựng thư viện component tái sử dụng sử dụng Ant Design, giảm thời gian phát triển 30%.',
        'Tham gia thảo luận kỹ thuật và đóng góp vào các quyết định kiến trúc cho các dự án mới.',
        'Tối ưu hiệu suất ứng dụng thông qua code splitting, lazy loading và quản lý state với Redux.',
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'Ant Design', 'JavaScript'],
    },
    {
      company: 'Beesight Soft',
      position: 'Web Developer',
      period: {
        start: '6/2018',
        end: '2/2020',
      },
      description: [
        'Phát triển ứng dụng mobile đa nền tảng sử dụng PhoneGap và ReactJS cho các dự án khách hàng đa dạng.',
        'Phân tích yêu cầu khách hàng, đánh giá tính khả thi dự án và đề xuất giải pháp kỹ thuật.',
        'Xây dựng ứng dụng web responsive với ReactJS, đảm bảo trải nghiệm người dùng tối ưu trên mọi thiết bị.',
        'Hợp tác với khách hàng quốc tế để cung cấp các giải pháp phần mềm chất lượng cao.',
        'Tích lũy kinh nghiệm với nhiều loại dự án bao gồm e-commerce, hệ thống quản lý và nền tảng đào tạo.',
      ],
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
    },
  ],
  projects: [
    {
      name: 'Payroll',
      role: 'Developer',
      period: {
        start: '09/2022',
        end: 'Hiện tại',
      },
      description:
        'Phát triển Hệ thống Quản lý Lương và Phúc lợi toàn diện sử dụng ReactJS và Ant Design. Triển khai các thuật toán tính lương tự động, quản lý dữ liệu nhân viên và cấu hình chính sách thưởng. Xây dựng công cụ import/export cho tích hợp dữ liệu và tích hợp API giao dịch ngân hàng. Hệ thống tối ưu hóa hoạt động HR, cải thiện độ chính xác trong xử lý lương và cung cấp quản lý lương minh bạch.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['HRM', 'Quản lý Lương', 'Tích hợp Dữ liệu', 'Tích hợp API Ngân hàng', 'Tính toán Tự động'],
    },
    {
      name: 'HRM Core',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Hiện tại',
      },
      description:
        'Xây dựng Hệ thống Quản lý Nhân sự toàn diện sử dụng ReactJS và Ant Design. Phát triển các module quản lý phòng ban, theo dõi thông tin nhân viên, quản lý hợp đồng và lập lịch ca làm việc. Triển khai kiểm soát truy cập dựa trên vai trò và dashboard trực quan hóa dữ liệu. Hệ thống cung cấp nền tảng tập trung cho team HR để quản lý hiệu quả mọi khía cạnh của nhân sự.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['HRM', 'Quản lý Nhân viên', 'Quản lý Hợp đồng', 'Lập lịch Ca làm việc', 'Quản lý Dữ liệu'],
    },
    {
      name: 'Candidate',
      role: 'Developer',
      period: {
        start: '04/2022',
        end: 'Hiện tại',
      },
      description:
        'Phát triển Hệ thống Quản lý Ứng viên sử dụng ReactJS và Ant Design để tối ưu hóa quy trình tuyển dụng. Triển khai workflow phỏng vấn có thể cấu hình dựa trên phòng ban và vị trí, theo dõi ứng viên qua nhiều giai đoạn và dashboard phân tích. Xây dựng tính năng cộng tác cho team tuyển dụng và hệ thống thông báo tự động. Hệ thống cải thiện hiệu quả tuyển dụng và cung cấp insights dựa trên dữ liệu cho quyết định tuyển dụng.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['Tuyển dụng', 'Theo dõi Ứng viên', 'Quản lý Workflow', 'Phân tích', 'HRM'],
    },
    {
      name: 'ZNS Chat',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Xây dựng dịch vụ chat real-time tích hợp với nền tảng nhắn tin Zalo sử dụng ReactJS. Triển khai tính năng nhắn tin real-time với Socket.IO cho giao tiếp tức thời. Phát triển lưu trữ dữ liệu phía client sử dụng DexieDB (wrapper IndexedDB) cho lưu trữ tin nhắn offline. Tích hợp Zalo API để nhận và xử lý tin nhắn. Dự án cung cấp kinh nghiệm quý giá về giao tiếp real-time, tích hợp API bên ngoài và quản lý database phía client.',
      technologies: ['ReactJS', 'Socket.IO', 'DexieDB', 'Zalo API', 'JavaScript'],
      keywords: ['Giao tiếp Real-time', 'Socket.IO', 'Tích hợp API', 'Database Client-side', 'Ứng dụng Chat'],
    },
    {
      name: 'Cost',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Phát triển Hệ thống Quản lý Yêu cầu Mua hàng cho quy trình mua sắm theo phòng ban. Triển khai workflow tạo và phê duyệt form yêu cầu mua hàng, cấu hình loại mua hàng theo phòng ban và phân công người phụ trách. Xây dựng tính năng theo dõi yêu cầu mua hàng, quản lý ngân sách và tạo báo cáo. Hệ thống tối ưu hóa quy trình mua sắm và cải thiện kiểm soát chi phí giữa các phòng ban.',
      technologies: ['ReactJS', 'Ant Design', 'Redux', 'JavaScript'],
      keywords: ['Quản lý Mua sắm', 'Quản lý Workflow', 'Quản lý Phòng ban', 'Kiểm soát Chi phí'],
    },
    {
      name: 'CRM',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: 'Hiện tại',
      },
      description:
        'Xây dựng Hệ thống Quản lý Quan hệ Khách hàng toàn diện sử dụng ReactJS. Phát triển các module quản lý hồ sơ khách hàng, theo dõi hợp đồng, quản lý ví khách hàng và chuyển khoản giữa khách hàng. Triển khai công cụ import/export dữ liệu hàng loạt cho quản lý dữ liệu hiệu quả. Tạo hệ thống cấu hình để tùy chỉnh game và tính năng tương tác cho khách hàng và nhân viên. Hệ thống cung cấp giải pháp hoàn chỉnh cho quản lý quan hệ khách hàng và tương tác.',
      technologies: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
      keywords: ['CRM', 'Quản lý Khách hàng', 'Quản lý Dữ liệu', 'Thao tác Hàng loạt', 'Gamification'],
    },
    {
      name: 'Notification',
      role: 'Developer',
      period: {
        start: '01/2021',
        end: '03/2021',
      },
      description:
        'Phát triển Hệ thống Quản lý Thông báo sử dụng ReactJS và React Bootstrap. Xây dựng tính năng tạo, chỉnh sửa và lập lịch thông báo (cảnh báo và banner) cho ứng dụng và website khách hàng. Triển khai lập lịch gửi thông báo, tùy chọn targeting và theo dõi phân tích. Hệ thống đảm bảo gửi thông báo hiệu quả và cải thiện tương tác khách hàng thông qua giao tiếp kịp thời.',
      technologies: ['ReactJS', 'React Bootstrap', 'JavaScript'],
      keywords: ['Hệ thống Thông báo', 'Lập lịch', 'Gửi Đa kênh', 'Tương tác Khách hàng'],
    },
    {
      name: 'Fixle',
      role: 'Developer',
      period: {
        start: '11/2018',
        end: '4/2019',
      },
      description:
        'Phát triển Ứng dụng Phân phối Công việc Nhà ở với hỗ trợ đa vai trò (Master Admin, Company Admin, Provider, Client). Triển khai workflow phân công công việc, quản lý nhà cung cấp, xử lý yêu cầu khách hàng và dashboard admin. Xây dựng tính năng theo dõi trạng thái công việc, quản lý nhà cung cấp dịch vụ và xử lý thanh toán. Hệ thống tối ưu hóa phân phối công việc dịch vụ nhà ở và cải thiện hiệu quả cung cấp dịch vụ.',
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Quản lý Công việc', 'Hệ thống Đa vai trò', 'Quản lý Workflow', 'Phân phối Dịch vụ'],
    },
    {
      name: 'Primary ITO',
      role: 'Developer',
      period: {
        start: '3/2019',
        end: '12/2019',
      },
      description:
        'Phát triển Ứng dụng Quản lý Đào tạo cho Lĩnh vực Sơ cấp sử dụng PhoneGap, ReactJS, Redux và Bootstrap. Xây dựng tính năng cho Training Advisors để quản lý nơi làm việc, học viên và chương trình đào tạo. Triển khai tạo và theo dõi kế hoạch năng lực, giám sát tiến độ học viên và tạo báo cáo PDF với chức năng email. Ứng dụng hỗ trợ hoạt động offline, cho phép quản lý đào tạo từ xa không cần kết nối internet. Hệ thống cải thiện hiệu quả đào tạo và cung cấp khả năng báo cáo toàn diện.',
      technologies: ['ReactJS', 'PhoneGap', 'Redux', 'Bootstrap', 'JavaScript'],
      keywords: ['Quản lý Đào tạo', 'Hỗ trợ Offline', 'Tạo PDF', 'Theo dõi Tiến độ', 'Ứng dụng Mobile'],
    },
  ],
};
