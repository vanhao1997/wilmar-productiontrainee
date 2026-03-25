/**
 * i18n Module — Vietnamese/English switching
 */

const translations = {
    vi: {
        // Nav
        'nav.intro': 'Giới thiệu',
        'nav.criteria': 'Tiêu chí',
        'nav.career': 'Lĩnh vực',
        'nav.journey': 'Quy trình',
        'nav.testimonials': 'Chia sẻ',
        'nav.apply': 'ỨNG TUYỂN NGAY',

        // Hero
        'hero.badge': '🏆 CHƯƠNG TRÌNH ĐÀO TẠO QUẢN LÝ TƯƠNG LAI',
        'hero.cta': 'NỘP ĐƠN ỨNG TUYỂN',
        'hero.location': 'TP.HCM & Hà Nội',
        'hero.explore': 'Khám phá',

        // Stats
        'stats.factories': 'Nhà máy toàn cầu',
        'stats.countries': 'Quốc gia hoạt động',
        'stats.companies': 'Công ty tại Việt Nam',
        'stats.months': 'Tháng đào tạo',

        // Intro
        'intro.label': 'VỀ CHÚNG TÔI',
        'intro.title': 'Giới Thiệu <em>Chương Trình</em>',
        'intro.tab.wilmar': 'Tập đoàn Wilmar CLV',
        'intro.tab.program': 'Backoffice Trainee 2026',
        'intro.brands.title': '8 Công ty thành viên',
        'intro.brand.calofic': 'Dầu ăn Neptune, Simply, Meizan',
        'intro.brand.meizan': 'Mì trứng, Nui, Bột chiên giòn',
        'intro.brand.namduong': 'Nước tương, tương ớt, hạt nêm',
        'intro.brand.vfm': 'Bột mì Chìa Khóa',
        'intro.brand.agro': 'Cám gạo, Wilstar',
        'intro.brand.val': 'Sản phẩm đậu nành',
        'intro.brand.vinhphat': 'Gạo Neptune, Thiên Kim',
        'intro.brand.marketing': 'Phân phối tập đoàn',
        'intro.desc.1': '<strong>Wilmar International</strong> – một trong những tập đoàn kinh doanh nông sản hàng đầu Châu Á, với hơn <strong>300 nhà máy</strong> sản xuất và mạng lưới phân phối tại hơn <strong>50 quốc gia</strong>.',
        'intro.desc.2': 'Trụ sở chính tại Singapore, Wilmar có chi nhánh tại hơn 20 quốc gia, trong đó có <strong>Wilmar CLV</strong> (Campuchia – Lào – Việt Nam).',
        'intro.program.badge': '24 THÁNG ĐÀO TẠO',
        'intro.program.desc': 'Chương trình <strong>Backoffice Trainee 2026</strong> là chương trình đào tạo và phát triển toàn diện, nhằm khám phá và phát triển những tài năng trẻ để trở thành những <strong>nhà quản lý tương lai</strong> của khối Backoffice tại tập đoàn Wilmar CLV.',
        'intro.field.finance': 'Kế toán, Tài chính, Kiểm toán, BPM',
        'intro.field.scm': 'Kế hoạch, Logistics',
        'intro.locations.label': 'Khu vực mở tuyển:',

        // Criteria
        'criteria.label': 'CHÚNG TÔI TÌM KIẾM',
        'criteria.title': 'Tiêu Chí <em>Tuyển Chọn</em>',
        'criteria.1.title': 'Học vấn',
        'criteria.1.desc': 'Tốt nghiệp các ngành Tài chính, Kế toán, Kiểm toán, Quản trị Kinh doanh, hoặc Quản lý Chuỗi cung ứng.',
        'criteria.2.title': 'Tư duy',
        'criteria.2.desc': 'Tư duy phân tích, logic mạnh, khả năng giải quyết vấn đề xuất sắc.',
        'criteria.3.title': 'Kinh nghiệm',
        'criteria.3.desc': 'Từ 0 – 3 năm kinh nghiệm, ưu tiên FMCG. <strong>Độ tuổi 23 – 30.</strong>',
        'criteria.4.title': 'Kỹ năng',
        'criteria.4.desc': 'Tiếng Anh bắt buộc (Tiếng Trung là lợi thế). Thành thạo tin học văn phòng & teamwork.',
        'criteria.5.title': 'Thái độ',
        'criteria.5.desc': 'Chủ động, sẵn sàng đương đầu thử thách, thích nghi nhanh với môi trường năng động.',

        // Career
        'career.label': 'KHÁM PHÁ CƠ HỘI',
        'career.title': 'Lĩnh Vực <em>Tuyển Dụng</em>',
        'career.positions.1': '1 vị trí',
        'career.positions.2': '2 vị trí',
        'career.finance.badge': 'VỊ TRÍ TUYỂN DỤNG',
        'career.jd.title': 'Mô tả công việc',
        'career.req.title': 'Yêu cầu',
        'career.finance.jd.1': 'Luân chuyển qua các bộ phận: Kế toán (Accounting), Tài chính (Finance), Kiểm toán nội bộ (Internal Audit), và Quản lý quy trình kinh doanh (BPM).',
        'career.finance.jd.2': 'Tham gia lập báo cáo tài chính, phân tích ngân sách, quản lý dòng tiền và hỗ trợ ra quyết định đầu tư chiến lược.',
        'career.finance.jd.3': 'Thực hiện kiểm toán nội bộ, đánh giá rủi ro, đảm bảo quy trình hoạt động tuân thủ chính sách tập đoàn.',
        'career.finance.jd.4': 'Tối ưu hóa quy trình kinh doanh, triển khai giải pháp cải tiến và theo dõi hiệu suất hoạt động (KPI).',
        'career.finance.jd.5': 'Tham gia các dự án chiến lược cấp công ty dưới sự hướng dẫn của Ban lãnh đạo.',
        'career.finance.req.1': 'Tốt nghiệp Đại học chuyên ngành Tài chính, Kế toán, Kiểm toán hoặc Quản trị Kinh doanh.',
        'career.finance.req.2': '0 – 3 năm kinh nghiệm, ưu tiên có kinh nghiệm trong FMCG.',
        'career.finance.req.3': 'Tiếng Anh tốt (IELTS 6.0+ hoặc tương đương). Tiếng Trung là lợi thế.',
        'career.finance.req.4': 'Tư duy phân tích tốt, thành thạo Excel, SAP hoặc các phần mềm tài chính.',
        'career.finance.req.5': 'Nhiệt huyết, chủ động, sẵn sàng thử thách và phát triển bản thân.',
        'career.scm.badge.1': 'VỊ TRÍ 1',
        'career.scm.badge.2': 'VỊ TRÍ 2',
        'career.planning.jd.1': 'Lập kế hoạch sản xuất, dự báo nhu cầu thị trường dựa trên dữ liệu bán hàng và xu hướng tiêu dùng.',
        'career.planning.jd.2': 'Quản lý tồn kho nguyên vật liệu và thành phẩm, tối ưu hóa mức tồn kho an toàn (Safety Stock).',
        'career.planning.jd.3': 'Phối hợp với các bộ phận Sản xuất, Kinh doanh, Thu mua để đảm bảo chuỗi cung ứng vận hành trơn tru.',
        'career.planning.jd.4': 'Phân tích và cải tiến quy trình MRP (Material Requirements Planning).',
        'career.planning.req.1': 'Tốt nghiệp ngành Quản lý Chuỗi cung ứng, Logistics, Quản trị Kinh doanh hoặc tương đương.',
        'career.planning.req.2': 'Kỹ năng phân tích dữ liệu tốt, thành thạo Excel nâng cao (Pivot, VLOOKUP, Macro).',
        'career.planning.req.3': 'Tiếng Anh giao tiếp tốt. Ưu tiên có kinh nghiệm sử dụng SAP.',
        'career.planning.req.4': 'Tư duy logic, khả năng giải quyết vấn đề và làm việc dưới áp lực cao.',
        'career.logistics.jd.1': 'Quản lý hoạt động kho bãi: nhập – xuất hàng, kiểm kê, sắp xếp kho theo tiêu chuẩn FIFO/FEFO.',
        'career.logistics.jd.2': 'Điều phối vận chuyển nội địa và quốc tế, đảm bảo giao hàng đúng tiến độ với chi phí tối ưu.',
        'career.logistics.jd.3': 'Phối hợp với đội ngũ phân phối để tối ưu hóa lộ trình vận chuyển và mạng lưới phân phối.',
        'career.logistics.jd.4': 'Theo dõi KPI vận hành logistics: tỷ lệ giao hàng đúng hạn (OTIF), chi phí vận chuyển/đơn hàng.',
        'career.logistics.req.1': 'Tốt nghiệp ngành Logistics, Quản lý Chuỗi cung ứng, hoặc các ngành liên quan.',
        'career.logistics.req.2': 'Kinh nghiệm 0 – 3 năm, ưu tiên FMCG hoặc ngành sản xuất.',
        'career.logistics.req.3': 'Am hiểu quy trình xuất nhập khẩu, vận tải và quản lý kho.',
        'career.logistics.req.4': 'Tiếng Anh tốt, khả năng làm việc nhóm và chịu áp lực tốt.',

        // Journey
        'journey.label': 'HÀNH TRÌNH CỦA BẠN',
        'journey.title': 'Quy Trình <em>Tuyển Dụng</em>',
        'journey.round.1': 'VÒNG 1', 'journey.round.2': 'VÒNG 2', 'journey.round.3': 'VÒNG 3', 'journey.round.4': 'VÒNG 4',
        'journey.step.1.title': 'Nộp đơn ứng tuyển Online',
        'journey.step.1.desc': 'Điền form ứng tuyển và nộp CV tại website chương trình.',
        'journey.step.2.title': 'Assessment & Phỏng vấn sơ bộ',
        'journey.step.2.desc': 'Bài kiểm tra năng lực và phỏng vấn sơ bộ với HR.',
        'journey.step.3.title': 'Final Assessment & Business Case',
        'journey.step.3.desc': 'Giải case study thực tế và đánh giá chuyên sâu.',
        'journey.step.4.title': 'Phỏng vấn Ban Giám đốc & Gia nhập',
        'journey.step.4.desc': 'Phỏng vấn cùng lãnh đạo cấp cao và nhận quyết định tuyển dụng.',

        // Roadmap
        'roadmap.label': 'SAU KHI GIA NHẬP',
        'roadmap.title': 'Lộ Trình <em>Phát Triển</em>',
        'roadmap.subtitle': 'Top 5 ứng viên tài năng nhất sẽ gia nhập vào tháng 7/2026 cùng lộ trình đào tạo <strong>24 tháng tại Wilmar CLV</strong>',
        'roadmap.phase.1.title': 'Trải Nghiệm', 'roadmap.phase.1.desc': 'Luân chuyển qua các bộ phận: Reports, Operations, Control, Analysis. Xây dựng nền tảng vững chắc.', 'roadmap.phase.1.duration': 'Tháng 1 – 8',
        'roadmap.phase.2.title': 'Đương Đầu', 'roadmap.phase.2.desc': 'Dẫn dắt dự án thực tế, tạo giá trị kinh doanh, nâng cao kỹ năng quản lý.', 'roadmap.phase.2.duration': 'Tháng 9 – 18',
        'roadmap.phase.3.title': 'Về Đích', 'roadmap.phase.3.desc': 'Ban lãnh đạo đánh giá và đưa ra quyết định nhận vào vị trí chính thức.', 'roadmap.phase.3.duration': 'Tháng 19 – 24',

        // Testimonials
        'testimonials.label': 'CHIA SẺ TRẢI NGHIỆM',
        'testimonials.title': 'Họ Nói Gì <em>Về Chương Trình</em>',
        'testimonials.1.text': 'Chương trình W-Future Leader đã giúp tôi phát triển toàn diện cả về kỹ năng chuyên môn tài chính lẫn kỹ năng mềm. Môi trường làm việc chuyên nghiệp nhưng cũng rất gần gũi.',
        'testimonials.2.text': 'Gia nhập Wilmar CLV ở vị trí Trainee, mình được trải nghiệm và học hỏi trong một môi trường vừa kỷ luật, trách nhiệm nhưng cũng rất lành mạnh. Mỗi ngày làm việc tại Wilmar, mình nhận được rất nhiều cơ hội học hỏi từ những anh chị có kinh nghiệm lâu năm.',
        'testimonials.3.text': 'Khi tham gia Wilmar CLV, mình đã có cơ hội phát triển toàn diện cả kỹ năng cứng và mềm. Được làm việc bên cạnh những anh chị xuất sắc, luôn chỉ dạy và hỗ trợ.',
        'testimonials.4.text': 'Được luân chuyển qua nhiều phòng ban giúp mình có góc nhìn toàn diện về hoạt động của tập đoàn. Các anh chị mentor rất tận tâm, giúp mình phát triển kỹ năng chuyên môn vững chắc, giúp mình tự tin và tiến bước.',
        'testimonials.5.text': 'Việc tham gia trực tiếp vào các dự án quan trọng của tập đoàn giúp mình được cọ xát và phát triển. Mình hi vọng chương trình sẽ luôn tiếp diễn để mở ra cánh cửa mới cho những "young talent" có cơ hội tỏa sáng.',

        // Form
        'apply.label': 'SẴN SÀNG BỨT PHÁ?',
        'apply.title': 'Đăng Ký <em>Ứng Tuyển</em>',
        'apply.subtitle': 'Đừng bỏ lỡ cơ hội trở thành thế hệ lãnh đạo tiếp theo của Wilmar CLV!',
        'form.name': 'Họ và tên', 'form.name.ph': 'Nguyễn Văn A',
        'form.phone': 'Số điện thoại', 'form.dob': 'Ngày sinh',
        'form.gender': 'Giới tính',
        'form.gender.male': 'Nam', 'form.gender.female': 'Nữ', 'form.gender.other': 'Khác',
        'form.experience': 'Số năm kinh nghiệm',
        'form.select': 'Chọn...',
        'form.exp.0': 'Chưa có kinh nghiệm', 'form.exp.1': 'Dưới 1 năm', 'form.exp.2': '1 – 2 năm', 'form.exp.3': '2 – 3 năm',
        'form.field': 'Lĩnh vực ứng tuyển', 'form.field.ph': 'Chọn lĩnh vực...',
        'form.location': 'Khu vực làm việc mong muốn',
        'form.location.hcm': 'Hồ Chí Minh (KCN Hiệp Phước, Nhà Bè)',
        'form.location.qn': 'Quảng Ninh (KCN Cái Lân, Hạ Long)',
        'form.salary': 'Mức thu nhập mong muốn (Gross VNĐ)',
        'form.salary.ph': 'Ví dụ: 10.000.000',
        'form.cv.placeholder': 'Kéo thả hoặc <strong>click để chọn file</strong>',
        'form.cv.hint': 'PDF, DOC, DOCX – Tối đa 5MB',
        'form.consent': 'Tôi đồng ý với <a href="https://productiontrainee.starawards.vn/wp-content/uploads/2023/12/1.-CLF_External-Privacy-Policy-VN.pdf" target="_blank" rel="noopener">chính sách bảo mật thông tin cá nhân</a> của Wilmar CLV.',
        'form.submit': 'GỬI ĐƠN ỨNG TUYỂN',
        'form.success.title': 'Đăng ký thành công! 🎉',
        'form.success.desc': 'Cảm ơn bạn đã quan tâm đến chương trình W-Future Leader 2026. Chúng tôi sẽ liên hệ bạn qua email trong thời gian sớm nhất.',

        // Footer
        'footer.brand': 'Tập đoàn Wilmar CLV<br/>Campuchia – Lào – Việt Nam',
        'footer.contact': 'Liên hệ', 'footer.hanoi': 'Hà Nội', 'footer.privacy': 'Chính sách bảo mật',
    },

    en: {
        'nav.intro': 'About',
        'nav.criteria': 'Criteria',
        'nav.career': 'Positions',
        'nav.journey': 'Process',
        'nav.testimonials': 'Stories',
        'nav.apply': 'APPLY NOW',

        'hero.badge': '🏆 FUTURE LEADERS TRAINING PROGRAM',
        'hero.cta': 'SUBMIT APPLICATION',
        'hero.location': 'HCMC & Hanoi',
        'hero.explore': 'Explore',

        'stats.factories': 'Global factories',
        'stats.countries': 'Countries',
        'stats.companies': 'Companies in Vietnam',
        'stats.months': 'Months of training',

        'intro.label': 'ABOUT US',
        'intro.title': 'Program <em>Introduction</em>',
        'intro.tab.wilmar': 'Wilmar CLV Group',
        'intro.tab.program': 'Backoffice Trainee 2026',
        'intro.brands.title': '8 Member Companies',
        'intro.brand.calofic': 'Neptune, Simply, Meizan cooking oils',
        'intro.brand.meizan': 'Egg noodles, pasta, frying powder',
        'intro.brand.namduong': 'Soy sauce, chili sauce, seasonings',
        'intro.brand.vfm': 'Chìa Khóa flour',
        'intro.brand.agro': 'Rice bran, Wilstar',
        'intro.brand.val': 'Soybean products',
        'intro.brand.vinhphat': 'Neptune, Thiên Kim rice',
        'intro.brand.marketing': 'Group distribution',
        'intro.desc.1': '<strong>Wilmar International</strong> – one of Asia\'s leading agribusiness groups, with over <strong>300 manufacturing plants</strong> and distribution networks in more than <strong>50 countries</strong>.',
        'intro.desc.2': 'Headquartered in Singapore, Wilmar operates in over 20 countries, including <strong>Wilmar CLV</strong> (Cambodia – Laos – Vietnam).',
        'intro.program.badge': '24 MONTHS OF TRAINING',
        'intro.program.desc': 'The <strong>Backoffice Trainee 2026</strong> program is a comprehensive training and development program, aimed at discovering and nurturing young talents to become <strong>future leaders</strong> of Backoffice functions at Wilmar CLV.',
        'intro.field.finance': 'Accounting, Finance, Audit, BPM',
        'intro.field.scm': 'Planning, Logistics',
        'intro.locations.label': 'Recruitment areas:',

        'criteria.label': 'WE ARE LOOKING FOR',
        'criteria.title': 'Selection <em>Criteria</em>',
        'criteria.1.title': 'Education',
        'criteria.1.desc': 'Graduated in Finance, Accounting, Audit, Business Administration, or Supply Chain Management.',
        'criteria.2.title': 'Mindset',
        'criteria.2.desc': 'Strong analytical and logical thinking, excellent problem-solving ability.',
        'criteria.3.title': 'Experience',
        'criteria.3.desc': '0 – 3 years of experience, FMCG preferred. <strong>Age 23 – 30.</strong>',
        'criteria.4.title': 'Skills',
        'criteria.4.desc': 'English required (Chinese is a plus). Proficient in Microsoft Office & teamwork.',
        'criteria.5.title': 'Attitude',
        'criteria.5.desc': 'Proactive, ready to face challenges, quick to adapt in a dynamic environment.',

        'career.label': 'EXPLORE OPPORTUNITIES',
        'career.title': 'Recruitment <em>Positions</em>',
        'career.positions.1': '1 position',
        'career.positions.2': '2 positions',
        'career.finance.badge': 'OPEN POSITION',
        'career.jd.title': 'Job Description',
        'career.req.title': 'Requirements',
        'career.finance.jd.1': 'Rotate across departments: Accounting, Finance, Internal Audit, and Business Process Management (BPM).',
        'career.finance.jd.2': 'Participate in financial reporting, budget analysis, cash flow management, and support strategic investment decisions.',
        'career.finance.jd.3': 'Conduct internal audits, risk assessments, and ensure operational compliance with corporate policies.',
        'career.finance.jd.4': 'Optimize business processes, implement improvement solutions, and monitor operational KPIs.',
        'career.finance.jd.5': 'Participate in company-level strategic projects under the guidance of senior management.',
        'career.finance.req.1': 'Bachelor\'s degree in Finance, Accounting, Audit, or Business Administration.',
        'career.finance.req.2': '0 – 3 years of experience, FMCG experience preferred.',
        'career.finance.req.3': 'Good English (IELTS 6.0+ or equivalent). Chinese is a plus.',
        'career.finance.req.4': 'Strong analytical skills, proficient in Excel, SAP or financial software.',
        'career.finance.req.5': 'Passionate, proactive, ready for challenges and self-development.',
        'career.scm.badge.1': 'POSITION 1',
        'career.scm.badge.2': 'POSITION 2',
        'career.planning.jd.1': 'Develop production plans, forecast market demand based on sales data and consumer trends.',
        'career.planning.jd.2': 'Manage raw material and finished goods inventory, optimize safety stock levels.',
        'career.planning.jd.3': 'Coordinate with Production, Sales, and Procurement departments to ensure smooth supply chain operations.',
        'career.planning.jd.4': 'Analyze and improve MRP (Material Requirements Planning) processes.',
        'career.planning.req.1': 'Graduated in Supply Chain Management, Logistics, Business Administration, or equivalent.',
        'career.planning.req.2': 'Strong data analysis skills, proficient in advanced Excel (Pivot, VLOOKUP, Macro).',
        'career.planning.req.3': 'Good English communication. SAP experience preferred.',
        'career.planning.req.4': 'Logical thinking, problem-solving ability, and ability to work under high pressure.',
        'career.logistics.jd.1': 'Manage warehouse operations: goods receipt/dispatch, stocktaking, warehouse arrangement per FIFO/FEFO standards.',
        'career.logistics.jd.2': 'Coordinate domestic and international shipping to ensure on-time delivery at optimal cost.',
        'career.logistics.jd.3': 'Collaborate with distribution teams to optimize transportation routes and distribution networks.',
        'career.logistics.jd.4': 'Monitor logistics KPIs: on-time in-full delivery (OTIF), shipping cost per order.',
        'career.logistics.req.1': 'Graduated in Logistics, Supply Chain Management, or related fields.',
        'career.logistics.req.2': '0 – 3 years of experience, FMCG or manufacturing preferred.',
        'career.logistics.req.3': 'Understanding of import/export processes, transportation, and warehouse management.',
        'career.logistics.req.4': 'Good English, teamwork ability, and ability to work under pressure.',

        'journey.label': 'YOUR JOURNEY',
        'journey.title': 'Recruitment <em>Process</em>',
        'journey.round.1': 'ROUND 1', 'journey.round.2': 'ROUND 2', 'journey.round.3': 'ROUND 3', 'journey.round.4': 'ROUND 4',
        'journey.step.1.title': 'Online Application',
        'journey.step.1.desc': 'Fill in the application form and submit your CV on the program website.',
        'journey.step.2.title': 'Assessment & Preliminary Interview',
        'journey.step.2.desc': 'Aptitude test and initial interview with HR.',
        'journey.step.3.title': 'Final Assessment & Business Case',
        'journey.step.3.desc': 'Solve a real business case study and undergo in-depth evaluation.',
        'journey.step.4.title': 'BOD Interview & Onboarding',
        'journey.step.4.desc': 'Interview with senior executives and receive the hiring decision.',

        'roadmap.label': 'AFTER JOINING',
        'roadmap.title': 'Development <em>Roadmap</em>',
        'roadmap.subtitle': 'Top 5 most talented candidates will join in July 2026 with a <strong>24-month training roadmap at Wilmar CLV</strong>',
        'roadmap.phase.1.title': 'Explore', 'roadmap.phase.1.desc': 'Rotate through departments: Reports, Operations, Control, Analysis. Build a solid foundation.', 'roadmap.phase.1.duration': 'Month 1 – 8',
        'roadmap.phase.2.title': 'Challenge', 'roadmap.phase.2.desc': 'Lead real projects, create business impact, enhance management skills.', 'roadmap.phase.2.duration': 'Month 9 – 18',
        'roadmap.phase.3.title': 'Achieve', 'roadmap.phase.3.desc': 'Senior management evaluation and official position placement decision.', 'roadmap.phase.3.duration': 'Month 19 – 24',

        'testimonials.label': 'EXPERIENCE SHARING',
        'testimonials.title': 'What They Say <em>About The Program</em>',
        'testimonials.1.text': 'The W-Future Leader program helped me develop comprehensively in both financial expertise and soft skills. The working environment is professional yet approachable.',
        'testimonials.2.text': 'Joining Wilmar CLV as a Trainee, I got to learn in an environment that is disciplined and responsible yet also healthy. Every day at Wilmar, I received many opportunities to learn from experienced seniors.',
        'testimonials.3.text': 'At Wilmar CLV, I had the opportunity to develop both hard and soft skills. Working alongside excellent seniors who always guided and supported me.',
        'testimonials.4.text': 'Rotating through multiple departments gave me a comprehensive view of the group\'s operations. The mentors were truly dedicated, helping me develop solid expertise and confidence to move forward.',
        'testimonials.5.text': 'Directly participating in the group\'s important projects helped me gain real-world experience and grow. I hope the program continues to open new doors for "young talent" to shine.',

        'apply.label': 'READY TO BREAK THROUGH?',
        'apply.title': 'Apply <em>Now</em>',
        'apply.subtitle': 'Don\'t miss the chance to become the next generation of Wilmar CLV leaders!',
        'form.name': 'Full name', 'form.name.ph': 'John Doe',
        'form.phone': 'Phone number', 'form.dob': 'Date of birth',
        'form.gender': 'Gender',
        'form.gender.male': 'Male', 'form.gender.female': 'Female', 'form.gender.other': 'Other',
        'form.experience': 'Years of experience',
        'form.select': 'Select...',
        'form.exp.0': 'No experience', 'form.exp.1': 'Less than 1 year', 'form.exp.2': '1 – 2 years', 'form.exp.3': '2 – 3 years',
        'form.field': 'Position applied for', 'form.field.ph': 'Select position...',
        'form.location': 'Preferred work location',
        'form.location.hcm': 'Ho Chi Minh (Hiep Phuoc IZ, Nha Be)',
        'form.location.qn': 'Quang Ninh (Cai Lan IZ, Ha Long)',
        'form.salary': 'Expected salary (Gross VND)',
        'form.salary.ph': 'E.g.: 10,000,000',
        'form.cv.placeholder': 'Drag & drop or <strong>click to select file</strong>',
        'form.cv.hint': 'PDF, DOC, DOCX – Max 5MB',
        'form.consent': 'I agree to the <a href="https://productiontrainee.starawards.vn/wp-content/uploads/2023/12/1.-CLF_External-Privacy-Policy-VN.pdf" target="_blank" rel="noopener">privacy policy</a> of Wilmar CLV.',
        'form.submit': 'SUBMIT APPLICATION',
        'form.success.title': 'Application submitted! 🎉',
        'form.success.desc': 'Thank you for your interest in W-Future Leader 2026. We will contact you via email shortly.',

        'footer.brand': 'Wilmar CLV Group<br/>Cambodia – Laos – Vietnam',
        'footer.contact': 'Contact', 'footer.hanoi': 'Hanoi', 'footer.privacy': 'Privacy Policy',
    }
};

let currentLang = 'vi';

export function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // HTML content (with <strong>, <em>, <a> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
    document.getElementById('langLabel').textContent = lang === 'vi' ? 'EN' : 'VI';
}

export function toggleLanguage() {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    setLanguage(currentLang);
    localStorage.setItem('wfl-lang', currentLang);
}

export function getCurrentLang() {
    return currentLang;
}

// Init
const saved = localStorage.getItem('wfl-lang');
if (saved) {
    currentLang = saved;
    setLanguage(currentLang);
}
