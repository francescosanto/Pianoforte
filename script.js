/* ========================================
   Francesco Santo - Portfolio
   JavaScript
======================================== */

/* ========================================
   Traduzioni (ES = default, EN, IT)
======================================== */

const TRANSLATIONS = {
    es: {
        nav_chi_sono: 'Quién soy',
        nav_repertoire: 'Repertorio',
        nav_services: 'Servicios',
        nav_projects: 'Proyectos',
        nav_gallery: 'Galería',
        nav_contact: 'Contacto',
        hero_audio_hint: 'Haz clic para activar el audio',
        hero_subtitle: 'Tu evento. Mi piano. El ambiente perfecto.',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'Quién soy',
        section_repertoire: 'Repertorio',
        section_services: 'Servicios',
        section_skills: 'Competencias',
        section_projects: 'Proyectos',
        section_gallery: 'Galería',
        section_contact: 'Contacto',
        chi_sono_read: 'Lee mi historia',
        chi_sono_p1: 'Mi nombre es Francesco Santo y soy artista, productor e ingeniero de sonido con una gran pasión por la música, que siempre ha sido una parte fundamental de mi vida. Empecé a acercarme a este mundo con solo 4 años, gracias a mi abuela. Luego, a los 12 años, empecé a tocar el piano y a los 16 me enamoré de la producción. Estudié piano, guitarra y bajo en Varese antes de mudarme a Bolonia.',
        chi_sono_p2: 'En 2022 tuve la oportunidad de participar en XFactor Italia, una experiencia que me dio una valoración positiva de 4/4. Al año siguiente, en 2023, publiqué mi primer álbum, «Santodice», que compuse y produje íntegramente yo mismo, un proyecto nacido tras ganar el concurso IMAIE.',
        chi_sono_p3: 'Actualmente trabajo como pianista en Sevilla, en Andalucía. Aquí he tenido la oportunidad de estudiar jazz y actuar en pequeños locales como la sala Griot, la Signora Pop y el Mutante. El arte callejero es una gran pasión mía, donde puedo encontrar un verdadero contacto con la gente y expresarme con total libertad.',
        chi_sono_p4: 'Además de la música, tengo una sólida formación: me gradué en Física en la Universidad de Bolonia en 2023, con una nota de 98 y un certificado de competencia en Ingeniería de Audio, Producción y Composición, válido en toda Europa, que me permitió unir mi pasión por la música al conocimiento técnico. Mis competencias abarcan desde la grabación en estudio hasta la producción, pasando por el manejo de mezcladores analógicos y digitales, hasta la composición y el arreglo.',
        chi_sono_p5: 'Cada día toco, compongo, mezclo y produzco para varios grupos musicales, y no veo la hora de colaborar también contigo.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'Pop Internacional',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Clásica Moderna',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Actuación elegante para cenas refinadas, cócteles y momentos íntimos',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Dúo, trío o cuarteto con saxofonista, cantante, contrabajo',
        service_band: 'Custom Band',
        service_band_desc: 'Formación a medida para eventos corporativos y bodas exclusivas',
        service_audio: 'Técnico de audio',
        service_audio_desc: 'Puedo actuar como técnico de audio en eventos: mezcla en directo, gestión del sonido y equipos',
        services_note: 'Cada actuación es personalizada. Repertorio, duración y formación se definen junto al cliente para crear el ambiente perfecto.',
        skill_sound_eng: 'Sound Engineering',
        skill_sound_eng_desc: 'Técnico de sonido profesional',
        skill_mixing: 'Mixing & Mastering',
        skill_mixing_desc: 'Mezcladores analógicos y digitales',
        skill_production: 'Music Production',
        skill_production_desc: 'Producción y arreglos',
        skill_design: 'Sound Design',
        skill_design_desc: 'Diseño sonoro avanzado',
        skill_theory: 'Music Theory',
        skill_theory_desc: 'Armonía y teoría musical',
        skill_teaching: 'Teaching',
        skill_teaching_desc: 'Profesor de piano',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Haz clic para escuchar el audio',
        contact_intro: 'Para reservas, información o solicitudes personalizadas',
        contact_email: 'Email',
        contact_phone: 'Teléfono',
        contact_cta: 'Solicitar presupuesto',
        footer_copy: '© 2026 Todos los derechos reservados',
        aria_menu: 'Menú',
        carousel_prev: 'Foto anterior',
        carousel_next: 'Foto siguiente',
        carousel_go_slide: 'Ir a la foto',
        lang_switcher_aria: 'Selección de idioma',
        doc_title: 'Francesco Santo | Pianista para restaurantes, hoteles y eventos',
        meta_description: 'Francesco Santo - Pianista profesional para restaurantes de lujo, hoteles, eventos privados y corporativos. Piano solo, grupos, improvisación.'
    },
    en: {
        nav_chi_sono: 'About me',
        nav_repertoire: 'Repertoire',
        nav_services: 'Services',
        nav_projects: 'Projects',
        nav_gallery: 'Gallery',
        nav_contact: 'Contact',
        hero_audio_hint: 'Click to enable audio',
        hero_subtitle: 'Your event. My piano. The perfect atmosphere.',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'About me',
        section_repertoire: 'Repertoire',
        section_services: 'Services',
        section_skills: 'Skills',
        section_projects: 'Projects',
        section_gallery: 'Gallery',
        section_contact: 'Contact',
        chi_sono_read: 'Read my story',
        chi_sono_p1: 'My name is Francesco Santo and I am an artist, producer and sound engineer with a great passion for music, which has always been a fundamental part of my life. I first approached this world at just 4 years old, thanks to my grandmother. Then, at 12, I started playing the piano and at 16 I fell in love with production. I studied piano, guitar and bass in Varese before moving to Bologna.',
        chi_sono_p2: 'In 2022 I had the opportunity to take part in XFactor Italia, an experience that earned me a positive rating of 4/4. The following year, in 2023, I released my first album, «Santodice», which I composed and produced entirely myself, a project born after winning the IMAIE competition.',
        chi_sono_p3: 'I am currently working as a pianist in Seville, Andalusia. Here I have had the opportunity to study jazz and perform in small venues such as the Griot room, Signora Pop and Mutante. Street art is a great passion of mine, where I can find real contact with people and express myself with complete freedom.',
        chi_sono_p4: 'Besides music, I have a solid education, having graduated in Physics from the University of Bologna in 2023, with a grade of 98 and a certificate of competence in Audio Engineering, Production and Composition, valid throughout Europe, which allowed me to combine my passion for music with technical knowledge. My skills range from studio recording to production, from managing analogue and digital mixers to composition and arrangement.',
        chi_sono_p5: 'Every day I play, compose, mix and produce for various music groups, and I look forward to collaborating with you too.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'International Pop',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Modern Classical',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Elegant performance for refined dinners, cocktails and intimate moments',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Duo, trio or quartet with saxophonist, singer, double bass',
        service_band: 'Custom Band',
        service_band_desc: 'Tailored line-up for corporate events and exclusive weddings',
        service_audio: 'Audio technician',
        service_audio_desc: 'I can act as audio technician at events: live mixing, sound and equipment management',
        services_note: 'Every performance is personalised. Repertoire, duration and line-up are defined together with the client to create the perfect atmosphere.',
        skill_sound_eng: 'Sound Engineering',
        skill_sound_eng_desc: 'Professional sound technician',
        skill_mixing: 'Mixing & Mastering',
        skill_mixing_desc: 'Analogue and digital mixers',
        skill_production: 'Music Production',
        skill_production_desc: 'Production and arrangement',
        skill_design: 'Sound Design',
        skill_design_desc: 'Advanced sound design',
        skill_theory: 'Music Theory',
        skill_theory_desc: 'Harmony and music theory',
        skill_teaching: 'Teaching',
        skill_teaching_desc: 'Piano teacher',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Click to listen to audio',
        contact_intro: 'For bookings, information or custom requests',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_cta: 'Request a quote',
        footer_copy: '© 2026 All rights reserved',
        aria_menu: 'Menu',
        carousel_prev: 'Previous photo',
        carousel_next: 'Next photo',
        carousel_go_slide: 'Go to slide',
        lang_switcher_aria: 'Language selection',
        doc_title: 'Francesco Santo | Pianist for Restaurants, Hotels & Events',
        meta_description: 'Francesco Santo - Professional pianist for luxury restaurants, hotels, private and corporate events. Solo piano, groups, improvisation.'
    },
    it: {
        nav_chi_sono: 'Chi sono',
        nav_repertoire: 'Repertorio',
        nav_services: 'Servizi',
        nav_projects: 'Progetti',
        nav_gallery: 'Galleria',
        nav_contact: 'Contatti',
        hero_audio_hint: 'Clicca per attivare l\'audio',
        hero_subtitle: 'Il tuo evento. Il mio piano. L\'atmosfera perfetta.',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'Chi sono',
        section_repertoire: 'Repertorio',
        section_services: 'Servizi',
        section_skills: 'Competenze',
        section_projects: 'Progetti',
        section_gallery: 'Galleria',
        section_contact: 'Contatti',
        chi_sono_read: 'Leggi la mia storia',
        chi_sono_p1: 'Il mio nome è Francesco Santo e sono un artista, produttore e ingegnere del suono con una grande passione per la musica, che è sempre stata una parte fondamentale della mia vita. Ho iniziato ad avvicinarmi a questo mondo a soli 4 anni, grazie a mia nonna. Poi, a 12 anni, ho iniziato a suonare il pianoforte e a 16 mi sono innamorato della produzione. Ho studiato pianoforte, chitarra e basso a Varese prima di trasferirmi a Bologna.',
        chi_sono_p2: 'Nel 2022 ho avuto l\'opportunità di partecipare a XFactor Italia, un\'esperienza che mi ha dato una valutazione positiva di 4/4. L\'anno successivo, nel 2023, ho pubblicato il mio primo album, «Santodice», che ho interamente composto e prodotto io stesso, un progetto nato dopo la vittoria del concorso IMAIE.',
        chi_sono_p3: 'Attualmente sto lavorando come pianista a Sevilla, in Andalusia. Qui ho avuto l\'opportunità di studiare Jazz ed esibirmi in piccoli locali come la sala Griot, la Signora Pop e il Mutante. L\'arte di strada è una mia grande passione, dove posso trovare un vero contatto con le persone ed esprimermi con piena libertà.',
        chi_sono_p4: 'Oltre alla musica, ho una solida formazione avendo conseguito una laurea in Fisica all\'Università di Bologna nel 2023, con un voto di 98 e un certificato di competenza in Ingegneria Audio, Produzione e Composizione, valido in tutta Europa, che mi ha permesso di unire la mia passione per la musica alla conoscenza tecnica. Le mie competenze spaziano dalla registrazione in studio alla produzione, passando per la gestione di mixer analogici e digitali, fino alla composizione e all\'arrangiamento.',
        chi_sono_p5: 'Ogni giorno suono, compongo, mixo e produco per svariati gruppi musicali, e non vedo l\'ora di collaborare anche con te.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'Pop Internazionale',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Classica Moderna',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Performance elegante per cene raffinate, cocktail e momenti intimi',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Duo, trio o quartetto con sassofonista, cantante, contrabbasso',
        service_band: 'Custom Band',
        service_band_desc: 'Formazione su misura per eventi corporate e matrimoni esclusivi',
        service_audio: 'Tecnico audio',
        service_audio_desc: 'Posso fare da tecnico audio agli eventi: mixaggio live, gestione del suono e attrezzature',
        services_note: 'Ogni performance è personalizzata. Repertorio, durata e formazione vengono definiti insieme al cliente per creare l\'atmosfera perfetta.',
        skill_sound_eng: 'Sound Engineering',
        skill_sound_eng_desc: 'Tecnico del suono professionale',
        skill_mixing: 'Mixing & Mastering',
        skill_mixing_desc: 'Mixer analogici e digitali',
        skill_production: 'Music Production',
        skill_production_desc: 'Produzione e arrangiamento',
        skill_design: 'Sound Design',
        skill_design_desc: 'Design sonoro avanzato',
        skill_theory: 'Music Theory',
        skill_theory_desc: 'Armonia e teoria musicale',
        skill_teaching: 'Teaching',
        skill_teaching_desc: 'Insegnante di pianoforte',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Clicca per ascoltare l\'audio',
        contact_intro: 'Per prenotazioni, informazioni o richieste personalizzate',
        contact_email: 'Email',
        contact_phone: 'Telefono',
        contact_cta: 'Richiedi un preventivo',
        footer_copy: '© 2026 Tutti i diritti riservati',
        aria_menu: 'Menu',
        carousel_prev: 'Foto precedente',
        carousel_next: 'Foto successiva',
        carousel_go_slide: 'Vai alla slide',
        lang_switcher_aria: 'Selezione lingua',
        doc_title: 'Francesco Santo | Pianista per ristoranti, hotel ed eventi',
        meta_description: 'Francesco Santo - Pianista professionista per ristoranti di lusso, hotel, eventi privati e corporate. Piano solo, gruppi, improvvisazione.'
    }
};

const DEFAULT_LANG = 'es';
const STORAGE_KEY = 'pianoforte_lang';

function getStoredLang() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && TRANSLATIONS[stored]) return stored;
    } catch (e) {}
    return DEFAULT_LANG;
}

function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key] != null) el.setAttribute('aria-label', t[key]);
    });

    const htmlEl = document.getElementById('htmlLang');
    if (htmlEl) htmlEl.setAttribute('lang', lang === 'es' ? 'es' : lang === 'en' ? 'en' : 'it');
    const titleEl = document.getElementById('docTitle');
    if (titleEl && t.doc_title) titleEl.textContent = t.doc_title;
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc && t.meta_description) metaDesc.setAttribute('content', t.meta_description);

    const navToggle = document.getElementById('navToggleBtn');
    if (navToggle && t.aria_menu) navToggle.setAttribute('aria-label', t.aria_menu);

    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        if (t.carousel_go_slide) dot.setAttribute('aria-label', t.carousel_go_slide + ' ' + (i + 1));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function initLanguage() {
    const lang = getStoredLang();
    applyLanguage(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initHeroVideo();
    initVideoControls();
    initAudioPlayer();
    initProjectLiveVideo();
    initCarousel();
    initRepertoireAccordion();
    initChiSono();
    initScrollAnimations();
});

/* ========================================
   Navigation
======================================== */

function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ========================================
   Hero Video (sfondo home con audio)
======================================== */

function initHeroVideo() {
    const heroVideo = document.getElementById('heroVideo');
    const audioHint = document.getElementById('heroAudioHint');
    if (!heroVideo) return;

    function startVideo() {
        heroVideo.muted = true;
        heroVideo.volume = 1;
        heroVideo.play().catch(function() {});
    }
    startVideo();
    heroVideo.addEventListener('loadeddata', startVideo, { once: true });
    heroVideo.addEventListener('canplay', startVideo, { once: true });

    function enableAudioWithFadeIn() {
        heroVideo.muted = false;
        heroVideo.volume = 0;
        heroVideo.play().catch(function() {});

        var duration = 1.2;
        var start = performance.now();
        function fadeIn() {
            var elapsed = (performance.now() - start) / 1000;
            var v = Math.min(1, elapsed / duration);
            heroVideo.volume = v;
            if (v < 1) requestAnimationFrame(fadeIn);
        }
        requestAnimationFrame(fadeIn);

        if (audioHint) audioHint.classList.add('hidden');
    }

    if (audioHint) {
        audioHint.addEventListener('click', function(e) {
            e.preventDefault();
            enableAudioWithFadeIn();
        });
    }
}

/* ========================================
   Video Controls
======================================== */

function initVideoControls() {
    const video = document.querySelector('.main-video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    
    if (!video || !playPauseBtn || !muteBtn) return;
    
    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.classList.add('playing');
        } else {
            video.pause();
            playPauseBtn.classList.remove('playing');
        }
    });
    
    // Mute/Unmute
    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteBtn.classList.toggle('unmuted', !video.muted);
    });
    
    // Update button state on video events
    video.addEventListener('play', () => playPauseBtn.classList.add('playing'));
    video.addEventListener('pause', () => playPauseBtn.classList.remove('playing'));
}

/* ========================================
   Audio Player
======================================== */

function initAudioPlayer() {
    const tracks = document.querySelectorAll('.audio-track');
    const playBtn = document.getElementById('audioPlayBtn');
    const prevBtn = document.getElementById('prevTrack');
    const nextBtn = document.getElementById('nextTrack');
    const progressBar = document.querySelector('.audio-progress-bar');
    const progressContainer = document.querySelector('.audio-progress');
    const currentTimeEl = document.querySelector('.audio-time.current');
    const durationEl = document.querySelector('.audio-time.duration');
    const nowPlayingTitle = document.querySelector('.now-playing-title');
    
    if (!tracks.length || !playBtn) return;
    
    let audio = new Audio();
    let currentTrackIndex = 0;
    
    // Load track
    function loadTrack(index) {
        const track = tracks[index];
        const src = track.dataset.src;
        const title = track.querySelector('.track-title').textContent;
        const duration = track.querySelector('.track-duration').textContent;
        
        // Update active state
        tracks.forEach(t => t.classList.remove('active'));
        track.classList.add('active');
        
        // Update player
        nowPlayingTitle.textContent = title;
        durationEl.textContent = duration;
        currentTimeEl.textContent = '0:00';
        progressBar.style.width = '0%';
        
        // Load audio
        audio.src = src;
        currentTrackIndex = index;
    }
    
    // Play/Pause
    function togglePlay() {
        if (audio.paused) {
            audio.play().catch(() => {
                // Handle autoplay restrictions
                console.log('Audio playback requires user interaction');
            });
        } else {
            audio.pause();
        }
    }
    
    // Format time
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Update progress
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });
    
    // Audio events
    audio.addEventListener('play', () => playBtn.classList.add('playing'));
    audio.addEventListener('pause', () => playBtn.classList.remove('playing'));
    audio.addEventListener('ended', () => {
        if (currentTrackIndex < tracks.length - 1) {
            loadTrack(currentTrackIndex + 1);
            audio.play();
        } else {
            playBtn.classList.remove('playing');
        }
    });
    
    // Click handlers
    playBtn.addEventListener('click', togglePlay);
    
    prevBtn.addEventListener('click', () => {
        const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : tracks.length - 1;
        loadTrack(newIndex);
        if (!audio.paused) audio.play();
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0;
        loadTrack(newIndex);
        if (!audio.paused) audio.play();
    });
    
    // Track selection
    tracks.forEach((track, index) => {
        track.addEventListener('click', () => {
            loadTrack(index);
            audio.play();
        });
    });
    
    // Progress bar click
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Initialize first track
    loadTrack(0);
}

/* ========================================
   Project Live Video (audio swap con hero)
======================================== */

function initProjectLiveVideo() {
    const heroVideo = document.getElementById('heroVideo');
    const liveVideo = document.getElementById('projectLiveVideo');
    const liveHint = document.getElementById('projectLiveAudioHint');
    if (!heroVideo || !liveVideo) return;

    // Avvio automatico del video live (muted, loop)
    liveVideo.muted = true;
    liveVideo.loop = true;
    liveVideo.play().catch(function() {});

    let heroWasUnmuted = false;

    function muteHero() {
        heroWasUnmuted = !heroVideo.muted;
        heroVideo.muted = true;
    }

    function resumeHeroAudio() {
        if (heroWasUnmuted) {
            heroVideo.muted = false;
        }
        heroWasUnmuted = false;
    }

    function enableLiveAudio() {
        muteHero();
        liveVideo.muted = false;
        liveVideo.loop = false;
        liveVideo.play().catch(function() {});
        if (liveHint) liveHint.classList.add('hidden');
    }

    function disableLiveAudio() {
        liveVideo.muted = true;
        liveVideo.loop = true;
        liveVideo.play().catch(function() {});
        resumeHeroAudio();
        if (liveHint) liveHint.classList.remove('hidden');
    }

    // Click sul video o sul bottone: prima volta attiva audio live, seconda volta disattiva
    function onLiveClick(e) {
        e.preventDefault();
        if (!liveVideo.muted) {
            disableLiveAudio();
        } else {
            enableLiveAudio();
        }
    }

    if (liveHint) {
        liveHint.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            enableLiveAudio();
        });
    }

    liveVideo.addEventListener('click', onLiveClick);

    liveVideo.addEventListener('ended', function() {
        // Loop senza audio e ripristina audio hero
        liveVideo.muted = true;
        liveVideo.loop = true;
        liveVideo.play().catch(function() {});
        resumeHeroAudio();
        if (liveHint) liveHint.classList.remove('hidden');
    });
}

/* ========================================
   Carousel Gallery
======================================== */

function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const total = slides.length;
    if (total === 0) return;

    let current = 0;

    function updateCarousel() {
        var offset = current * (100 / total);
        track.style.transform = 'translateX(-' + offset + '%)';
        if (dotsContainer) {
            dotsContainer.querySelectorAll('.carousel-dot').forEach(function(dot, i) {
                dot.classList.toggle('active', i === current);
            });
        }
    }

    function goTo(i) {
        current = (i + total) % total;
        if (current < 0) current += total;
        updateCarousel();
    }

    prevBtn.addEventListener('click', function() { goTo(current - 1); });
    nextBtn.addEventListener('click', function() { goTo(current + 1); });

    if (dotsContainer) {
        var lang = getStoredLang();
        var slideLabel = (TRANSLATIONS[lang] && TRANSLATIONS[lang].carousel_go_slide) ? TRANSLATIONS[lang].carousel_go_slide : 'Slide';
        for (var i = 0; i < total; i++) {
            var dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', slideLabel + ' ' + (i + 1));
            dot.addEventListener('click', (function(idx) { return function() { goTo(idx); }; })(i));
            dotsContainer.appendChild(dot);
        }
    }

    updateCarousel();
}

/* ========================================
   Chi sono (espandibile)
======================================== */

function initChiSono() {
    var wrap = document.querySelector('[data-chi-sono]');
    var btn = document.querySelector('.chi-sono-toggle');
    if (!wrap || !btn) return;
    btn.addEventListener('click', function() {
        wrap.classList.toggle('open');
        var expanded = wrap.classList.contains('open');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
}

/* ========================================
   Repertoire accordion
======================================== */

function initRepertoireAccordion() {
    var items = document.querySelectorAll('[data-repertoire-item]');
    items.forEach(function(item) {
        var btn = item.querySelector('.repertoire-toggle');
        if (!btn) return;
        btn.addEventListener('click', function() {
            item.classList.toggle('open');
            var expanded = item.classList.contains('open');
            btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });
    });
}

/* ========================================
   Scroll Animations
======================================== */

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Staggered animation for grid items
                const children = entry.target.querySelectorAll('.repertoire-item, .service-card, .project-card, .skill-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe section headers
    document.querySelectorAll('.section-header').forEach(el => observer.observe(el));
    
    // Observe grid containers
    document.querySelectorAll('.chi-sono-wrap, .repertoire-grid, .services-grid, .projects-grid, .skills-grid, .carousel-wrap').forEach(el => {
        observer.observe(el);
    });
}
