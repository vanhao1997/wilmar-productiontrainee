/**
 * Main JS - Premium with Theme Toggle + i18n
 */
import { toggleLanguage, getCurrentLang } from './i18n.js';

// --- Force light mode ---
document.documentElement.setAttribute('data-theme', 'light');


// --- Language toggle ---
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => { toggleLanguage(); });

// --- Header scroll effect ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
}, { passive: true });

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 72;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// --- Intro tabs ---
document.querySelectorAll('.intro__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.intro__tab').forEach(t => t.classList.remove('intro__tab--active'));
        document.querySelectorAll('.intro__panel').forEach(p => p.classList.remove('intro__panel--active'));
        tab.classList.add('intro__tab--active');
        document.getElementById(`tab-${tab.dataset.tab}`).classList.add('intro__panel--active');
    });
});

// --- Brand card interaction ---
const brandDescriptions = {
    vi: {
        calofic: '<strong>CALOFIC</strong> – Công ty liên doanh giữa Wilmar và VOCARIMEX, là nhà sản xuất dầu ăn hàng đầu Việt Nam với các thương hiệu <strong>Neptune, Simply, Meizan</strong>. Nhà máy đặt tại TPHCM với công suất hàng trăm nghìn tấn/năm.',
        meizan: '<strong>Meizan CLV</strong> – Chuyên sản xuất mì trứng, nui, bột chiên giòn dưới thương hiệu <strong>Meizan</strong>. Ứng dụng công nghệ sản xuất hiện đại đạt tiêu chuẩn chất lượng quốc tế.',
        namduong: '<strong>Nam Dương</strong> – Thương hiệu truyền thống hơn 60 năm, chuyên sản xuất nước tương, tương ớt, hạt nêm. Là một trong những thương hiệu gia vị được tin dùng nhất tại Việt Nam.',
        vfm: '<strong>VFM Wilmar</strong> – Công ty VFM sản xuất bột mì <strong>Chìa Khóa</strong>, cung cấp cho các nhà sản xuất thực phẩm và hệ thống F&B trên toàn quốc.',
        agro: '<strong>Wilmar Agro</strong> – Hoạt động trong lĩnh vực chế biến phụ phẩm nông nghiệp, sản xuất cám gạo và thương hiệu <strong>Wilstar</strong> phục vụ thức ăn chăn nuôi.',
        val: '<strong>VAL</strong> – Chuyên chế biến các sản phẩm từ đậu nành, cung cấp nguyên liệu cho ngành thực phẩm và xuất khẩu.',
        vinhphat: '<strong>Gạo Vinh Phát</strong> – Thương hiệu gạo cao cấp <strong>Neptune, Thiên Kim</strong>, cung cấp gạo chất lượng cho thị trường nội địa và xuất khẩu.',
        marketing: '<strong>Wilmar Marketing</strong> – Đơn vị phân phối chính thức của tập đoàn, quản lý hệ thống phân phối trên toàn quốc với hàng nghìn điểm bán.'
    },
    en: {
        calofic: '<strong>CALOFIC</strong> – A joint venture between Wilmar and VOCARIMEX, leading cooking oil manufacturer in Vietnam with brands <strong>Neptune, Simply, Meizan</strong>. Factory located in HCMC with capacity of hundreds of thousands of tons/year.',
        meizan: '<strong>Meizan CLV</strong> – Specializes in producing egg noodles, pasta, and frying powder under the <strong>Meizan</strong> brand. Applies modern manufacturing technology meeting international quality standards.',
        namduong: '<strong>Nam Dương</strong> – A traditional brand of over 60 years, specializing in soy sauce, chili sauce, and seasonings. One of the most trusted condiment brands in Vietnam.',
        vfm: '<strong>VFM Wilmar</strong> – VFM produces <strong>Chìa Khóa</strong> flour, supplying food manufacturers and F&B systems nationwide.',
        agro: '<strong>Wilmar Agro</strong> – Operates in agricultural by-product processing, producing rice bran and the <strong>Wilstar</strong> brand for animal feed.',
        val: '<strong>VAL</strong> – Specializes in soybean product processing, supplying raw materials to the food industry and exports.',
        vinhphat: '<strong>Gạo Vinh Phát</strong> – Premium rice brands <strong>Neptune, Thiên Kim</strong>, supplying quality rice for domestic and export markets.',
        marketing: '<strong>Wilmar Marketing</strong> – The group\'s official distribution unit, managing nationwide distribution with thousands of retail points.'
    }
};

const brandDescDefault = {
    vi: document.getElementById('brandDesc')?.innerHTML || '',
    en: ''
};


document.querySelectorAll('.intro__brand-card[data-brand]').forEach(card => {
    card.addEventListener('click', () => {
        const brand = card.dataset.brand;
        const lang = getCurrentLang();
        const descEl = document.getElementById('brandDesc');
        if (!descEl) return;

        // Toggle active state
        const wasActive = card.classList.contains('intro__brand-card--active');
        document.querySelectorAll('.intro__brand-card').forEach(c => c.classList.remove('intro__brand-card--active'));

        if (wasActive) {
            // Restore default
            descEl.innerHTML = brandDescDefault.vi;
        } else {
            card.classList.add('intro__brand-card--active');
            const desc = brandDescriptions[lang]?.[brand] || brandDescriptions.vi[brand];
            descEl.innerHTML = `<p style="animation: fadeInUp 0.3s ease">${desc}</p>`;
        }
    });
});

// --- Career tabs ---
document.querySelectorAll('.career__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.career__tab').forEach(t => t.classList.remove('career__tab--active'));
        document.querySelectorAll('.career__panel').forEach(p => p.classList.remove('career__panel--active'));
        tab.classList.add('career__tab--active');
        document.getElementById(`career-${tab.dataset.career}`).classList.add('career__panel--active');
    });
});

// --- Scroll animation observer ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// --- Journey timeline animated progress line ---
(function initJourneyTimeline() {
    const timeline = document.querySelector('.journey__timeline');
    const journeyLine = document.querySelector('.journey__line');
    const steps = document.querySelectorAll('.journey__step');
    if (!timeline || !journeyLine || steps.length === 0) return;

    // Scroll-driven progress line
    function updateLineProgress() {
        const timelineRect = timeline.getBoundingClientRect();
        const timelineTop = timelineRect.top;
        const timelineHeight = timelineRect.height;
        const viewportCenter = window.innerHeight * 0.7;

        if (timelineTop > viewportCenter) {
            timeline.style.setProperty('--line-progress', '0%');
            return;
        }

        const scrolledIntoTimeline = viewportCenter - timelineTop;
        const progress = Math.min(Math.max(scrolledIntoTimeline / timelineHeight * 100, 0), 100);
        timeline.style.setProperty('--line-progress', progress + '%');
    }

    window.addEventListener('scroll', updateLineProgress, { passive: true });
    updateLineProgress();

    // Journey step reveal observer (separate for stagger control)
    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

    steps.forEach(step => journeyObserver.observe(step));
})();

// --- Particle system for hero ---
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 40;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(212, 168, 67, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 4}s;
    `;
        container.appendChild(particle);
    }
}
createParticles();

// --- Number counter animation ---
function animateCounters() {
    const counters = document.querySelectorAll('.stats__number[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const suffix = counter.textContent.includes('+') ? '+' : '';
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 40);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.section--stats');
if (statsSection) statsObserver.observe(statsSection);

// --- Application Form with Validation ---
const form = document.getElementById('applicationForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    let isValid = true;

    if (isRequired && !value) {
        isValid = false;
    } else if (field.type === 'email' && value) {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (field.type === 'tel' && value) {
        isValid = /^[0-9+\-\s()]{8,15}$/.test(value);
    } else if (field.tagName === 'SELECT' && isRequired) {
        isValid = value !== '';
    }

    field.classList.remove('valid', 'invalid');
    // Remove existing validation icon
    const existingIcon = field.parentElement.querySelector('.validation-icon');
    if (existingIcon) existingIcon.remove();

    if (value || (!isRequired && !value)) {
        field.classList.add(isValid ? 'valid' : 'invalid');
        if (value) {
            const icon = document.createElement('span');
            icon.className = 'validation-icon';
            icon.textContent = isValid ? '✓' : '✗';
            icon.style.color = isValid ? '#4CAF50' : '#E85D3A';
            field.parentElement.appendChild(icon);
        }
    }

    return isValid;
}

if (form) {
    // Realtime validation
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('invalid') || field.classList.contains('valid')) {
                validateField(field);
            }
        });
    });

    const fileInput = document.getElementById('cv');
    const fileArea = document.getElementById('fileUploadArea');

    if (fileInput && fileArea) {
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (file) {
                const placeholder = fileArea.querySelector('.apply__file-placeholder');
                placeholder.innerHTML = `
          <img src="/assets/icons/shield-check.svg" alt="" class="icon icon--lg" style="filter: brightness(0) saturate(100%) invert(55%) sepia(50%) saturate(500%) hue-rotate(90deg);" />
          <span style="color: #4CAF50; font-weight: 600;">${file.name}</span>
          <small>${(file.size / 1024 / 1024).toFixed(2)} MB</small>
        `;
                fileArea.style.borderColor = '#4CAF50';
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let allValid = true;
        form.querySelectorAll('input[required], select[required], textarea').forEach(field => {
            if (!validateField(field)) allValid = false;
        });

        if (!allValid) {
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        submitBtn.textContent = 'Đang gửi...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Redirect to thank-you page for tracking
        setTimeout(() => {
            console.log('📋 Application data:', data);
            window.location.href = '/thanks.html';
        }, 1000);
    });
}

// --- Active nav link highlight ---
const sections = document.querySelectorAll('.section[id], .section--stats[id]');
const navLinks = document.querySelectorAll('.header__nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.fontWeight = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.fontWeight = '800';
        }
    });
}, { passive: true });

// --- Testimonials Slideshow with Progress Bar ---
(function initSlider() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const progressBar = document.getElementById('testimonialProgressBar');
    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll('.testimonials__slide');
    const dots = dotsContainer.querySelectorAll('.testimonials__dot');
    let currentSlide = 0;
    const total = slides.length;
    const AUTOPLAY_INTERVAL = 5000;
    let progressStart = null;
    let animFrameId = null;

    function goToSlide(index) {
        currentSlide = ((index % total) + total) % total;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('testimonials__dot--active', i === currentSlide));
        resetProgress();
    }

    function updateProgress(timestamp) {
        if (!progressStart) progressStart = timestamp;
        const elapsed = timestamp - progressStart;
        const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
        if (progressBar) progressBar.style.width = pct + '%';
        if (elapsed < AUTOPLAY_INTERVAL) {
            animFrameId = requestAnimationFrame(updateProgress);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    function resetProgress() {
        progressStart = null;
        if (progressBar) progressBar.style.width = '0%';
        cancelAnimationFrame(animFrameId);
        animFrameId = requestAnimationFrame(updateProgress);
    }

    function stopProgress() {
        cancelAnimationFrame(animFrameId);
        if (progressBar) progressBar.style.width = '0%';
    }

    function startProgress() {
        resetProgress();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    dots.forEach(dot => dot.addEventListener('click', () => goToSlide(+dot.dataset.slide)));

    const slider = document.getElementById('testimonialSlider');
    slider.addEventListener('mouseenter', stopProgress);
    slider.addEventListener('mouseleave', startProgress);

    // Start
    resetProgress();
})();



