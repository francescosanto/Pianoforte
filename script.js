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
        nav_services: 'Servicios y competencias',
        nav_projects: 'Proyectos',
        nav_gallery: 'Galería',
        nav_contact: 'Contacto',
        hero_audio_hint: 'Haz clic para activar el audio',
        hero_subtitle: 'Tu evento. Mi piano. El ambiente perfecto.',
        hero_follow_social: 'Sígueme en redes',
        hero_donate: 'Invítame un café',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'Quién soy',
        section_repertoire: 'Repertorio',
        section_services: 'Servicios y competencias',
        section_skills: 'Servicios y competencias',
        section_projects: 'Proyectos',
        section_gallery: 'Galería',
        section_contact: 'Contacto',
        chi_sono_read: 'Lee mi historia',
        chi_sono_p1: '¡Hola! Me llamo Francesco y soy pianista y productor musical.',
        chi_sono_p2: 'Empecé a tocar de niño gracias a mi abuela, que me acompañó en las primeras notas y me transmitió un amor profundo por la música.',
        chi_sono_p3: 'En el pasado estudié Física en la Universidad de Bolonia y, después de graduarme, trabajé como ingeniero informático. Impulsado por mis sueños, elegí dedicarme a tiempo completo a la música, ocupándome de producción musical, mixing y mastering, además del estudio del instrumento. Me diplomé en producción musical e ingeniería de audio con la máxima calificación en el instituto NAM de Milán.',
        chi_sono_p4: 'Actualmente vivo en Sevilla, en Andalucía, donde trabajo principalmente como artista callejero para financiar mis estudios de piano jazz y mis proyectos personales.',
        chi_sono_p5: 'Hablo italiano, inglés y español y tengo un gran espíritu de adaptación. Si buscas un pianista, un productor o un técnico de audio capaz de unir profesionalidad, emoción y versatilidad, estaré encantado de colaborar contigo.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'Pop Internacional',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Clásica Moderna',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Actuación elegante para cenas refinadas, cócteles y momentos íntimos',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Dúo, trío o cuarteto con saxofonista, cantante, contrabajo',
        service_sound_eng: 'Sound Engineering',
        service_sound_eng_desc: 'Técnico de sonido para eventos: mezcla en directo, gestión del sonido y de los equipos',
        service_mixing: 'Mixing & Mastering',
        service_mixing_desc: 'Mezcla y mastering analógico y digital para un sonido cuidado y profesional',
        service_production: 'Music Production',
        service_production_desc: 'Producción musical y arreglos, de la idea a la canción terminada',
        service_teaching: 'Enseñanza',
        service_teaching_desc: 'Clases de piano personalizadas, desde principiantes hasta nivel avanzado',
        services_note: 'Cada actuación es personalizada. Repertorio, duración y formación se definen junto al cliente para crear el ambiente perfecto.',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Haz clic para escuchar el audio',
        contact_intro: 'Para reservas, información o solicitudes personalizadas',
        contact_email: 'Email',
        contact_phone: 'Teléfono',
        contact_cta: 'Solicitar presupuesto',
        contact_instagram: 'Sígueme en Instagram',
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
        nav_services: 'Services & skills',
        nav_projects: 'Projects',
        nav_gallery: 'Gallery',
        nav_contact: 'Contact',
        hero_audio_hint: 'Click to enable audio',
        hero_subtitle: 'Your event. My piano. The perfect atmosphere.',
        hero_follow_social: 'Follow me on social',
        hero_donate: 'Buy me a coffee',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'About me',
        section_repertoire: 'Repertoire',
        section_services: 'Services & skills',
        section_skills: 'Services & skills',
        section_projects: 'Projects',
        section_gallery: 'Gallery',
        section_contact: 'Contact',
        chi_sono_read: 'Read my story',
        chi_sono_p1: 'Hi! My name is Francesco and I\'m a pianist and music producer.',
        chi_sono_p2: 'I started playing as a child thanks to my grandmother, who guided me through my first notes and passed on to me a deep love for music.',
        chi_sono_p3: 'In the past I studied Physics at the University of Bologna and after graduating I worked as a computer engineer. Driven by my dreams, I chose to devote myself full-time to music, working on music production, mixing and mastering, as well as studying the instrument. I graduated in music production and audio engineering with top marks from the NAM institute in Milan.',
        chi_sono_p4: 'I currently live in Seville, Andalusia, where I work mainly as a street artist to fund my jazz piano studies and my personal projects.',
        chi_sono_p5: 'I speak Italian, English and Spanish and I have a strong ability to adapt. If you\'re looking for a pianist, a producer or an audio engineer who can combine professionalism, emotion and versatility, I\'ll be happy to collaborate with you.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'International Pop',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Modern Classical',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Elegant performance for refined dinners, cocktails and intimate moments',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Duo, trio or quartet with saxophonist, singer, double bass',
        service_sound_eng: 'Sound Engineering',
        service_sound_eng_desc: 'Sound engineer for events: live mixing, sound and equipment management',
        service_mixing: 'Mixing & Mastering',
        service_mixing_desc: 'Analogue and digital mixing and mastering for a polished, professional sound',
        service_production: 'Music Production',
        service_production_desc: 'Music production and arrangement, from the idea to the finished track',
        service_teaching: 'Teaching',
        service_teaching_desc: 'Personalised piano lessons, from beginner to advanced level',
        services_note: 'Every performance is personalised. Repertoire, duration and line-up are defined together with the client to create the perfect atmosphere.',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Click to listen to audio',
        contact_intro: 'For bookings, information or custom requests',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_cta: 'Request a quote',
        contact_instagram: 'Follow me on Instagram',
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
        nav_services: 'Servizi e competenze',
        nav_projects: 'Progetti',
        nav_gallery: 'Galleria',
        nav_contact: 'Contatti',
        hero_audio_hint: 'Clicca per attivare l\'audio',
        hero_subtitle: 'Il tuo evento. Il mio piano. L\'atmosfera perfetta.',
        hero_follow_social: 'Seguimi sui social',
        hero_donate: 'Offrimi un caffè',
        hero_scroll: 'Scroll',
        section_performance: 'PERFORMANCE',
        section_listen: 'LISTEN',
        section_chi_sono: 'Chi sono',
        section_repertoire: 'Repertorio',
        section_services: 'Servizi e competenze',
        section_skills: 'Servizi e competenze',
        section_projects: 'Progetti',
        section_gallery: 'Galleria',
        section_contact: 'Contatti',
        chi_sono_read: 'Leggi la mia storia',
        chi_sono_p1: 'Ciao! Mi chiamo Francesco e sono un pianista e produttore musicale.',
        chi_sono_p2: 'Ho iniziato a suonare da bambino grazie a mia nonna, che mi ha accompagnato sulle prime note e mi ha trasmesso un amore profondo per la musica.',
        chi_sono_p3: 'In passato ho studiato Fisica all\'Università di Bologna e dopo essermi laureato ho lavorato come ingegnere informatico. Spinto dai miei sogni, ho scelto di dedicarmi a tempo pieno alla musica, occupandomi di produzione musicale, mixing e mastering, oltre allo studio dello strumento. Mi sono diplomato in produzione musicale e ingegneria audio con il massimo dei voti presso l\'istituto NAM di Milano.',
        chi_sono_p4: 'Attualmente vivo a Siviglia, in Andalusia, dove lavoro principalmente come artista di strada per finanziare i miei studi in pianoforte Jazz e i miei progetti personali.',
        chi_sono_p5: 'Parlo italiano, inglese e spagnolo e ho un grande spirito di adattamento. Se cerchi un pianista, un producer o un tecnico audio capace di unire professionalità, emozione e versatilità, sarò felice di collaborare con te.',
        repertoire_jazz: 'Jazz Standards',
        repertoire_pop: 'Pop Internazionale',
        repertoire_soul: 'Soul & R&B',
        repertoire_classical: 'Classica Moderna',
        service_piano: 'Piano Solo',
        service_piano_desc: 'Performance elegante per cene raffinate, cocktail e momenti intimi',
        service_ensemble: 'Ensemble',
        service_ensemble_desc: 'Duo, trio o quartetto con sassofonista, cantante, contrabbasso',
        service_sound_eng: 'Sound Engineering',
        service_sound_eng_desc: 'Tecnico del suono per eventi: mixaggio live, gestione del suono e delle attrezzature',
        service_mixing: 'Mixing & Mastering',
        service_mixing_desc: 'Mixing e mastering analogico e digitale per un suono curato e professionale',
        service_production: 'Music Production',
        service_production_desc: 'Produzione musicale e arrangiamento, dall\'idea al brano finito',
        service_teaching: 'Insegnamento',
        service_teaching_desc: 'Lezioni di pianoforte personalizzate, dal principiante al livello avanzato',
        services_note: 'Ogni performance è personalizzata. Repertorio, durata e formazione vengono definiti insieme al cliente per creare l\'atmosfera perfetta.',
        project_albums: 'Albums',
        project_live: 'Live',
        project_live_hint: 'Clicca per ascoltare l\'audio',
        contact_intro: 'Per prenotazioni, informazioni o richieste personalizzate',
        contact_email: 'Email',
        contact_phone: 'Telefono',
        contact_cta: 'Richiedi un preventivo',
        contact_instagram: 'Seguimi su Instagram',
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

function updateHeroAudioHintText() {
    const audioBtn = document.getElementById('heroAudioHint');
    if (!audioBtn) return;
    
    const heroVideo = document.getElementById('heroVideo');
    if (!heroVideo) return;
    
    const lang = getStoredLang();
    const isActive = audioBtn.classList.contains('audio-active') || (!heroVideo.muted && heroVideo.volume > 0);
    
    // Aggiorna l'aria-label in base alla lingua e allo stato
    if (lang === 'it') {
        audioBtn.setAttribute('aria-label', isActive ? 'Disattiva audio' : 'Attiva audio');
    } else if (lang === 'en') {
        audioBtn.setAttribute('aria-label', isActive ? 'Disable audio' : 'Enable audio');
    } else {
        audioBtn.setAttribute('aria-label', isActive ? 'Desactivar audio' : 'Activar audio');
    }
}

function applyLanguage(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Salta il pulsante audio (gestito separatamente)
        if (el.id === 'heroAudioHint') {
            return;
        }
        if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        // Salta il pulsante audio (gestito separatamente)
        if (el.id === 'heroAudioHint') {
            return;
        }
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
    
    // Aggiorna il testo del pulsante audio quando cambia la lingua
    updateHeroAudioHintText();
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

        if (audioHint) {
            audioHint.classList.add('audio-active');
            updateHeroAudioHintText();
        }
    }

    function disableAudioWithFadeOut() {
        var duration = 0.4;
        var start = performance.now();
        var startVolume = heroVideo.volume;
        
        function fadeOut() {
            var elapsed = (performance.now() - start) / 1000;
            var v = Math.max(0, startVolume * (1 - elapsed / duration));
            heroVideo.volume = v;
            if (v > 0) {
                requestAnimationFrame(fadeOut);
            } else {
                heroVideo.muted = true;
                if (audioHint) {
                    audioHint.classList.remove('audio-active');
                    updateHeroAudioHintText();
                }
            }
        }
        requestAnimationFrame(fadeOut);
    }

    if (audioHint) {
        audioHint.addEventListener('click', function(e) {
            e.preventDefault();
            if (heroVideo.muted || heroVideo.volume === 0) {
                enableAudioWithFadeIn();
            } else {
                disableAudioWithFadeOut();
            }
            // Aggiorna il testo dopo il cambio di stato
            setTimeout(updateHeroAudioHintText, 100);
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
