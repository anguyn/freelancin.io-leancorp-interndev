import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navigation: {
            services: 'Services',
            it: 'IT',
            design: 'Digital Design',
            security: 'Security',
            integrations: 'Integrations',
            automations: 'Automations',
            explore: 'Explore',
            about: 'About us',
            blog: 'Blog',
            contact: 'Contact us',
          },
          header: {
            title1: 'Find & Hire Expert Freelancers',
            title2: 'Or... ',
            title3: 'Become A Freelance Partner',
            title4: 'Join FreeLancin.io Now!',
            title5: 'Join FreeLancin.io Now!',
            desc13: 'Work with the best freelance talent from around the',
            desc23: 'world on our secure flexible and cost-effective',
            desc33: 'platform.',
            contact: 'Contact us',
            learn: 'Learn more',
            feature1: 'Grow your audience',
            desc1: 'Find new customers and build your email list with lead generation ..',
            feature2: 'Boost online sales',
            desc2: 'Market your ecommerce business and deliver experiences ..',
            feature3: 'Sell your knowledge',
            desc3: 'Build a following, engage them with your content ..',
            hire: 'is hired!',
          },
          journey: {
            title: 'Journey of our Success',
            name1: 'manage <br /> communication more efficiently',
            name2: 'improve communication with customers and clients',
            name3: 'average improvement in team efficiency',
          },
          features: {
            title: 'Our Features',
            header:
              'Unleash your creativety with a visual collaboration plattorm that enables effective ideation',
            feature1: 'Choosing a Service',
            desc1: 'Choosing an accountant that matches your needs',
            feature2: 'Our Clients Say',
            desc2: 'Read the reviews from some of our satisfied clients',
            feature3: 'Initial Consultation',
            desc3: 'Understanding your accountancy requirements',
            feature4: 'Request a Callback',
            desc4: 'Lets talk at a more convenient time for you',
          },
          services: {
            title: 'Services',
            header:
              'Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.',
            service1: 'BRANDING IDENDITY',
            desc: 'Our support team will get assistance from AI-powered.',
            service2: 'BRANDING CONSULT',
            service3: 'WEB DEVELOPMENT',
            service4: 'MARKET ANLYSIS',
          },
          projects: {
            title: 'Our Projects',
            header: 'We have been providing great flooring solutions service.',
            tab1: 'All',
            tab2: 'Websites',
            tab3: 'Social Media',
            tab4: 'UI/UX',
            tab5: 'Market',
          },
          testimonial: {
            title: 'What our Customers say',
            header:
              'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.',
            customer1: 'Stephan Louis',
            job1: 'Developer',
            feedback1:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
            customer2: 'Jeff Smith',
            job2: 'Digital Designer',
            feedback2:
              'Lorem ipsum dolor sit am, consectetur adipis occ tempor inv sapient et non pro id el component lobortis et inter lobortis et inter lob Architect et inter lobortis',
            customer3: 'Adam Pritchard',
            job3: 'Journalist',
            feedback3:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am',
            customer4: 'Christopher Green',
            job4: 'Interpreter',
            feedback4:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
            customer5: 'Kate Denson',
            job5: 'Developer',
            feedback5:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
          },
          agents: {
            title: 'Our Featured Agents',
            header: 'Meet our amazing team members',
          },
          footer: {
            title: 'People who are <br /> ready took these courses!',
            button: 'Schedule Appointment',
            address: 'Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved',
            links: 'Links',
            overons: 'Overons',
            social: 'Social Media',
            counters: 'Counters',
            contact: 'Contact',
            company: 'Company',
            terms: 'Terms & Conditions',
            privacy: 'Privacy Policy',
            touch: 'Get in touch',
            copyright: '© 2021 ar-shakir. All rights reserved',
          },
        },
      },
      vi: {
        translation: {
          navigation: {
            services: 'Dịch vụ',
            it: 'IT',
            design: 'Thiết kế số',
            security: 'Bảo mật',
            integrations: 'Tích hợp',
            automations: 'Tự động hóa',
            explore: 'Khám phá',
            about: 'Về chúng tôi',
            blog: 'Blog',
            contact: 'Liên hệ',
          },
          header: {
            title1: 'Tìm & Thuê Freelancer Chuyên nghiệp',
            title2: 'Hoặc...',
            title3: 'Trở Thành Đối Tác Freelancer',
            title4: 'Tham Gia FreeLancin.io Ngay!',
            desc13: 'Làm việc với những tài năng freelance tốt nhất từ khắp nơi trên',
            desc23: 'thế giới trên nền tảng linh hoạt, an toàn và hiệu quả về chi phí ',
            desc33: 'của chúng tôi.',
            contact: 'Liên hệ',
            learn: 'Tìm hiểu thêm',
            feature1: 'Mở rộng khán giả của bạn',
            desc1:
              'Tìm khách hàng mới và xây dựng danh sách email của bạn với việc tạo ra cơ hội chủ động..',
            feature2: 'Tăng doanh số bán hàng trực tuyến',
            desc2: 'Tiếp thị cho doanh nghiệp thương mại điện tử của bạn và mang đến trải nghiệm..',
            feature3: 'Bán kiến thức của bạn',
            desc3: 'Xây dựng một đám đông theo dõi, tương tác với họ qua nội dung của bạn..',
            hire: 'đã được thuê!',
          },
          journey: {
            title: 'Hành trình thành công của chúng tôi',
            name1: 'Quản lý <br /> giao tiếp hiệu quả hơn',
            name2: 'cải thiện giao tiếp với khách hàng và đối tác',
            name3: 'tăng cường hiệu suất của đội ngũ',
          },
          features: {
            title: 'Các Tính năng của Chúng tôi',
            header:
              'Phát huy sự sáng tạo của bạn với một nền tảng hợp tác trực quan cho phép ý tưởng hiệu quả',
            feature1: 'Chọn dịch vụ',
            desc1: 'Chọn một nhân viên kế toán phù hợp với nhu cầu của bạn',
            feature2: 'Ý kiến của khách hàng',
            desc2: 'Đọc những đánh giá từ một số khách hàng hài lòng của chúng tôi',
            feature3: 'Tư vấn ban đầu',
            desc3: 'Hiểu rõ yêu cầu về kế toán của bạn',
            feature4: 'Yêu cầu gọi lại',
            desc4: 'Hãy nói chuyện vào thời gian thuận tiện hơn cho bạn',
          },
          services: {
            title: 'Dịch vụ',
            header:
              'Đội ngũ hỗ trợ của chúng tôi sẽ nhận được sự hỗ trợ từ các gợi ý được cung cấp bởi trí tuệ nhân tạo, giúp xử lý yêu cầu hỗ trợ nhanh chóng hơn bao giờ hết.',
            service1: 'NHẬN DIỆN THƯƠNG HIỆU',
            desc: 'Đội ngũ hỗ trợ của chúng tôi sẽ nhận được sự hỗ trợ từ trí tuệ nhân tạo.',
            service2: 'TƯ VẤN NHẬN DIỆN THƯƠNG HIỆU',
            service3: 'PHÁT TRIỂN WEB',
            service4: 'PHÂN TÍCH THỊ TRƯỜNG',
          },
          projects: {
            title: 'Các Dự án của chúng tôi',
            header: 'Chúng tôi đã cung cấp giải pháp sàn giao dịch sàn chất lượng tốt.',
            tab1: 'Tất cả',
            tab2: 'Trang web',
            tab3: 'Mạng xã hội',
            tab4: 'Giao diện người dùng',
            tab5: 'Thị trường',
          },
          testimonial: {
            title: 'Lời nhận xét của khách hàng',
            header:
              'Tất cả các trình tạo ra trên Internet có xu hướng lặp lại các đoạn đã được xác định trước.',
            customer1: 'Stephan Louis',
            job1: 'Nhà phát triển',
            feedback1:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
            customer2: 'Jeff Smith',
            job2: 'Thiết kế số',
            feedback2:
              'Lorem ipsum dolor sit am, consectetur adipis occ tempor inv sapient et non pro id el component lobortis et inter lobortis et inter lob Architect et inter lobortis',
            customer3: 'Adam Pritchard',
            job3: 'Nhà báo',
            feedback3:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am',
            customer4: 'Christopher Green',
            job4: 'Phiên dịch viên',
            feedback4:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
            customer5: 'Kate Denson',
            job5: 'Nhà phát triển',
            feedback5:
              'Lorem ipsum dolor sit amet, consectet adip incididunt ut labore et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem ipsum dolor sit am et dolor. Lorem dolor sit am ',
          },
          agents: {
            title: 'Các thành viên nổi bật của chúng tôi',
            header: 'Gặp gỡ các thành viên tuyệt vời trong đội ngũ của chúng tôi',
          },
          footer: {
            title: 'Những người đã <br /> tham gia các khóa học này!',
            button: 'Lịch hẹn',
            address: 'Crechterwoord K12 182 DK Alknjkcb, Bản quyền thuộc về All Rights Reserved',
            links: 'Liên kết',
            overons: 'Về chúng tôi',
            social: 'Mạng xã hội',
            counters: 'Số liệu thống kê',
            contact: 'Liên hệ',
            company: 'Công ty',
            terms: 'Điều khoản & Điều kiện',
            privacy: 'Chính sách bảo mật',
            touch: 'Liên lạc',
            copyright: '© 2021 ar-shakir. Bản quyền thuộc về FreeLancin.io',
          },
        },
      },
    },
  });

export default i18n;
