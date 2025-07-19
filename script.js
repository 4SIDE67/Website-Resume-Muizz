// Animasi masuk section bila scroll
function revealSections() {
    // Animasi fade-in dan fade-out untuk semua section dalam main
    const sections = document.querySelectorAll('main section');
    const trigger = window.innerHeight * 0.92;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger && rect.bottom > 80) {
            section.classList.add('fade-in');
            section.classList.remove('fade-out');
        } else {
            if (section.classList.contains('fade-in')) {
                section.classList.remove('fade-in');
                section.classList.add('fade-out');
            }
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle.onclick = () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        darkToggle.innerText = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.innerText = '🌙';
        localStorage.setItem('theme', 'light');
    }
};
// Set theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    darkToggle.innerText = '☀️';
}

// Bahasa toggle (BM/EN)
const bmBtn = document.getElementById('bm-btn');
const enBtn = document.getElementById('en-btn');
const langContent = {
    BM: {
        title: "Resume Ahmad Mu'izz",
        job: "Pendawaian Elektrik",
        introTitle: "Pengenalan Diri",
        pengenalan: "Saya Ahmad Mu'izz, seorang pelajar Kolej Vokasional Taiping yang kini sedang menjalani latihan industri dalam bidang elektrik. Saya seorang yang berdedikasi, teliti, dan sentiasa bersemangat untuk mempelajari teknologi serta kemahiran baharu dalam dunia pendawaian elektrik. Matlamat saya adalah untuk menjadi tenaga kerja mahir yang mampu menyumbang kepada industri elektrik negara dengan kepakaran dan etika kerja yang tinggi.",
        statusTitle: "Status Kerjaya",
        status: "Sedang menjalankan latihan industri (Intern) dalam bidang elektrik.",
        certTitle: "Sijil & Pencapaian",
        sijil: [
            {title: "Sijil Kemahiran Malaysia (SKM) Tahap 3", org: "Kolej Vokasional Taiping"},
            {title: "Sijil Vokasional Malaysia (SVM)", org: "Kolej Vokasional Taiping"},
            {title: "Diploma Teknologi Elektrik", org: "Kolej Vokasional Taiping"}
        ],
        achieve: [
            {title: "Sijil Pencapaian 1", desc: "Pencapaian dalam bidang kokurikulum."},
            {title: "Sijil Pencapaian 2", desc: "Penyertaan dalam program/pertandingan luar."}
        ],
        timelineTitle: "Timeline Kerjaya & Pendidikan",
        timeline: "2021 - 2024 — Pelajar Kolej Vokasional Taiping",
        skillsTitle: "Kemahiran",
        kemahiran: ["Wireman 1 Fasa", "Wireman 3 Fasa", "Basic Chargeman"],
        portfolioMainTitle: "Portfolio Projek",
        portfolioTitle: "SISTEM KAWALAN KECEMASAN ASRAMA",
        portfolioDesc: "Projek Tahun Akhir (PTA) ini membangunkan Sistem Kawalan Kecemasan Asrama menggunakan Arduino. Sistem ini membolehkan pengurusan kecemasan (seperti kebakaran atau kecederaan) di asrama dikawal secara automatik dan pantas, termasuk pengaktifan siren, lampu amaran, dan notifikasi kepada warden. Arduino digunakan sebagai pengawal utama untuk mengintegrasikan sensor dan aktuator dalam sistem ini.",
        contactTitle: "Hubungi",
        hubungi: "Email: ahmadmuizz2447@gmail.com",
        whatsapp: "WhatsApp: 0164167760",
        sendBtn: "Hantar Mesej",
        resumeBtn: "Muat Turun Resume",
        portfolioBtn: "Muat Turun Portfolio",
        coverBtn: "Muat Turun Cover Letter",
        openSourceTitle: "Open Source",
        openSource: "Projek GitHub Ahmad Mu'izz",
        tempah: "Tempah Sesi Temuduga/Meeting",
        namaPlaceholder: "Nama anda",
        emailPlaceholder: "Email anda",
        mesejPlaceholder: "Mesej anda"
    },
    EN: {
        title: "Ahmad Mu'izz Resume",
        job: "Electrical Wiring",
        introTitle: "Introduction",
        pengenalan: "I am Ahmad Mu'izz, a student at Kolej Vokasional Taiping currently undergoing industrial training in the electrical field. I am dedicated, meticulous, and always eager to learn new technologies and skills in electrical wiring. My goal is to become a skilled workforce who can contribute to the national electrical industry with expertise and high work ethics.",
        statusTitle: "Career Status",
        status: "Currently undergoing industrial training (Intern) in the electrical field.",
        certTitle: "Certificates & Achievements",
        sijil: [
            {title: "Malaysian Skills Certificate (SKM) Level 3", org: "Kolej Vokasional Taiping"},
            {title: "Malaysian Vocational Certificate (SVM)", org: "Kolej Vokasional Taiping"},
            {title: "Diploma in Electrical Technology", org: "Kolej Vokasional Taiping"}
        ],
        achieve: [
            {title: "Achievement Certificate 1", desc: "Achievement in co-curricular field."},
            {title: "Achievement Certificate 2", desc: "Participation in external program/competition."}
        ],
        timelineTitle: "Career & Education Timeline",
        timeline: "2021 - 2024 — Student at Kolej Vokasional Taiping",
        skillsTitle: "Skills",
        kemahiran: ["Wireman Single Phase", "Wireman Three Phase", "Basic Chargeman"],
        portfolioMainTitle: "Project Portfolio",
        portfolioTitle: "DORMITORY EMERGENCY CONTROL SYSTEM",
        portfolioDesc: "This Final Year Project (FYP) develops a Dormitory Emergency Control System using Arduino. The system enables fast and automated management of emergencies (such as fire or injury) in the dormitory, including activation of sirens, warning lights, and notifications to wardens. Arduino is used as the main controller to integrate sensors and actuators in this system.",
        contactTitle: "Contact",
        hubungi: "Email: ahmadmuizz2447@gmail.com",
        whatsapp: "WhatsApp: 0164167760",
        sendBtn: "Send Message",
        resumeBtn: "Download Resume",
        portfolioBtn: "Download Portfolio",
        coverBtn: "Download Cover Letter",
        openSourceTitle: "Open Source",
        openSource: "Ahmad Mu'izz's GitHub Projects",
        tempah: "Book Interview/Meeting Session",
        namaPlaceholder: "Your name",
        emailPlaceholder: "Your email",
        mesejPlaceholder: "Your message"
    }
};
function setLang(lang) {
    bmBtn.classList.toggle('active', lang === 'BM');
    enBtn.classList.toggle('active', lang === 'EN');
    document.title = langContent[lang].title;
    document.querySelector('h2').innerText = langContent[lang].job;
    document.getElementById('intro-title').innerText = langContent[lang].introTitle;
    document.querySelector('#pengenalan p').innerText = langContent[lang].pengenalan;
    document.getElementById('status-title').innerText = langContent[lang].statusTitle;
    document.getElementById('open-to-work-main').innerText = '✅ ' + langContent[lang].status;
    document.querySelector('#open-to-work-status .open-to-work-status').innerText = langContent[lang].status;
    document.getElementById('cert-title').innerText = langContent[lang].certTitle;
    // Sijil
    const sijilItems = document.querySelectorAll('#sijil .sijil-item');
    langContent[lang].sijil.forEach((s, i) => {
        if (sijilItems[i]) {
            sijilItems[i].querySelector('b').innerText = s.title;
            sijilItems[i].querySelector('br').nextSibling.textContent = s.org;
        }
    });
    // Sijil Pencapaian
    if (document.getElementById('achieve1-title') && langContent[lang].achieve) {
        document.getElementById('achieve1-title').innerText = langContent[lang].achieve[0].title;
        document.getElementById('achieve1-desc').innerText = langContent[lang].achieve[0].desc;
    }
    if (document.getElementById('achieve2-title') && langContent[lang].achieve) {
        document.getElementById('achieve2-title').innerText = langContent[lang].achieve[1].title;
        document.getElementById('achieve2-desc').innerText = langContent[lang].achieve[1].desc;
    }
    document.getElementById('timeline-title').innerText = langContent[lang].timelineTitle;
    document.querySelector('#timeline .timeline-content').innerText = langContent[lang].timeline;
    document.getElementById('skills-title').innerText = langContent[lang].skillsTitle;
    // Kemahiran
    const kemahiranSpans = document.querySelectorAll('#kemahiran .skill-item span');
    langContent[lang].kemahiran.forEach((k, i) => {
        if (kemahiranSpans[i]) kemahiranSpans[i].innerText = k;
    });
    document.getElementById('portfolio-main-title').innerText = langContent[lang].portfolioMainTitle;
    document.querySelector('#portfolio .portfolio-item h4').innerText = langContent[lang].portfolioTitle;
    document.querySelector('#portfolio .portfolio-item p').innerText = langContent[lang].portfolioDesc;
    document.getElementById('contact-title').innerText = langContent[lang].contactTitle;
    document.querySelector('#hubungi p').innerText = langContent[lang].hubungi;
    document.querySelector('#hubungi .contact-btn').innerText = langContent[lang].whatsapp;
    document.getElementById('send-btn').innerText = langContent[lang].sendBtn;
    document.getElementById('resume-btn').innerText = langContent[lang].resumeBtn;
    document.getElementById('portfolio-btn').innerText = langContent[lang].portfolioBtn;
    document.getElementById('cover-btn').innerText = langContent[lang].coverBtn;
    document.getElementById('opensource-title').innerText = langContent[lang].openSourceTitle;
    document.querySelector('#opensource .opensource-item a').innerHTML = '<i class="fa-brands fa-github"></i> ' + langContent[lang].openSource;
    document.querySelector('#kalender h3').innerText = langContent[lang].tempah;
    // Placeholder form
    document.getElementById('nama').placeholder = langContent[lang].namaPlaceholder;
    document.getElementById('email').placeholder = langContent[lang].emailPlaceholder;
    document.getElementById('mesej').placeholder = langContent[lang].mesejPlaceholder;
}
bmBtn.onclick = () => setLang('BM');
enBtn.onclick = () => setLang('EN');
window.addEventListener('DOMContentLoaded', () => setLang('BM'));

// Animasi progress bar kemahiran
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = width; }, 400);
    });
});

// Animasi Latar: Partikel Bulat Lembut
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 0;
    document.getElementById('bg-animation').appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let w, h;
    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }
    resize();
    window.addEventListener('resize', resize);
    // Partikel
    const colors = ['#6e7ff3', '#19c6cf', '#f3e8ff', '#c3dafe'];
    const particles = Array.from({length: 18}, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 30 + Math.random() * 40,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.18 + Math.random() * 0.12
    }));
    function draw() {
        ctx.clearRect(0, 0, w, h);
        for (const p of particles) {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < -p.r) p.x = w + p.r;
            if (p.x > w + p.r) p.x = -p.r;
            if (p.y < -p.r) p.y = h + p.r;
            if (p.y > h + p.r) p.y = -p.r;
        }
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }
    draw();
});

// Contact form AJAX + toast notification
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nama = form.nama.value.trim();
            const email = form.email.value.trim();
            const mesej = form.mesej.value.trim();
            toast.className = '';
            toast.textContent = '';
            try {
                const res = await fetch('http://localhost:3001/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nama, email, mesej })
                });
                const data = await res.json();
                if (res.ok && data.success) {
                    showToast('Mesej berjaya dihantar!', 'success');
                    form.reset();
                } else {
                    showToast(data.error || 'Ralat, sila cuba lagi.', 'error');
                }
            } catch (err) {
                showToast('Ralat rangkaian, sila cuba lagi.', 'error');
            }
        });
    }
    function showToast(msg, type) {
        toast.textContent = msg;
        toast.className = 'show ' + (type || '');
        setTimeout(() => { toast.className = ''; }, 3500);
    }
});

console.log('Resume interaktif siap!');
