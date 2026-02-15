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
        hero_follow_social: 'Sígueme en redes',
        hero_donate: 'Invítame un café',
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
        chi_sono_p1: '¡Hola! Me llamo Francesco y soy pianista y productor musical.',
        chi_sono_p2: 'La música forma parte de mi vida desde siempre: empecé de niño gracias a mi abuela, que me acompañó en las primeras notas y me transmitió un amor profundo por este lenguaje universal.',
        chi_sono_p3: 'Actualmente vivo en Sevilla, en Andalucía, donde trabajo como artista callejero: una experiencia intensa y formativa que me permite entrar en contacto directo con las personas y, al mismo tiempo, financiar mis estudios musicales. Tocar cada día ante un público real me ha enseñado a escuchar, adaptarme y crear atmósferas auténticas.',
        chi_sono_p4: 'Estudio jazz y me exhibo regularmente en pequeños locales y contextos culturales, tanto como pianista solista como en grupo, colaborando con cantantes y músicos con los que comparto proyectos estables. Mi repertorio abarca desde el jazz al piano solo, desde el pop al R&B, con gran atención al ambiente y a las exigencias del contexto.',
        chi_sono_p5: 'Cuando tengo ocasión toco en eventos como bodas, exposiciones de arte y eventos privados. En estas situaciones pongo en primer lugar la sensibilidad, la fiabilidad y la capacidad de adaptarme a las peticiones, para acompañar los momentos importantes con discreción y elegancia. Quien me escucha aprecia mi carácter alegre y el hecho de que mi pasión se transparente claramente a través de la música: las sonrisas, las lágrimas y las palabras amables del público son el feedback más preciado que recibo.',
        chi_sono_p6: 'En el pasado estudié Física en la Universidad de Bolonia y trabajé como ingeniero informático. Impulsado por mis sueños, elegí dedicarme a tiempo completo a la música, ocupándome también de producción musical, mixing y mastering, además del estudio del instrumento.',
        chi_sono_p7: 'Dispongo de instrumentación propia, hablo italiano, inglés y español y estoy disponible para desplazarme. Si buscas un pianista capaz de unir profesionalidad, emoción y versatilidad, estaré encantado de colaborar contigo.',
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
        nav_services: 'Services',
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
        section_services: 'Services',
        section_skills: 'Skills',
        section_projects: 'Projects',
        section_gallery: 'Gallery',
        section_contact: 'Contact',
        chi_sono_read: 'Read my story',
        chi_sono_p1: 'Hi! My name is Francesco and I\'m a pianist and music producer.',
        chi_sono_p2: 'Music has been part of my life for as long as I can remember: I started as a child thanks to my grandmother, who accompanied me through my first notes and passed on to me a deep love for this universal language.',
        chi_sono_p3: 'I currently live in Seville, Andalusia, where I work as a street artist: an intense and formative experience that allows me to connect directly with people and, at the same time, fund my music studies. Playing every day in front of a real audience has taught me to listen, adapt and create authentic atmospheres.',
        chi_sono_p4: 'I study Jazz and perform regularly in small venues and cultural contexts, both as a solo pianist and in groups, collaborating with singers and musicians with whom I share stable projects. My repertoire ranges from jazz to solo piano, from pop to R&B, with great attention to atmosphere and the needs of the context.',
        chi_sono_p5: 'When I get the chance I play at events such as weddings, art exhibitions and private events. In these situations I put sensitivity, reliability and the ability to adapt to requests first, to accompany important moments with discretion and elegance. Those who listen to me appreciate my sunny character and the fact that my passion clearly shines through the music: the smiles, tears and kind words from the audience are the most precious feedback I receive.',
        chi_sono_p6: 'In the past I studied Physics at the University of Bologna and worked as a computer engineer. Driven by my dreams, I chose to devote myself full-time to music, also dealing with music production, mixing and mastering, as well as studying the instrument.',
        chi_sono_p7: 'I have my own equipment, I speak Italian, English and Spanish and I am available to travel. If you\'re looking for a pianist who can combine professionalism, emotion and versatility, I\'ll be happy to collaborate with you.',
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
        nav_services: 'Servizi',
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
        section_services: 'Servizi',
        section_skills: 'Competenze',
        section_projects: 'Progetti',
        section_gallery: 'Galleria',
        section_contact: 'Contatti',
        chi_sono_read: 'Leggi la mia storia',
        chi_sono_p1: 'Ciao! Mi chiamo Francesco e sono un pianista e produttore musicale.',
        chi_sono_p2: 'La musica fa parte della mia vita da sempre: ho iniziato da bambino grazie a mia nonna, che mi ha accompagnato sulle prime note e mi ha trasmesso un amore profondo per questo linguaggio universale.',
        chi_sono_p3: 'Attualmente vivo a Siviglia, in Andalusia, dove lavoro come artista di strada: un\'esperienza intensa e formativa che mi permette di entrare in contatto diretto con le persone e, allo stesso tempo, di finanziare i miei studi musicali. Suonare ogni giorno davanti a un pubblico reale mi ha insegnato ad ascoltare, adattarmi e creare atmosfere autentiche.',
        chi_sono_p4: 'Studio Jazz e mi esibisco regolarmente in piccoli locali e contesti culturali, sia come pianista solista sia in gruppo, collaborando con cantanti e musicisti con cui condivido progetti stabili. Il mio repertorio spazia dal jazz al piano solo, dal pop all\'R&B, con grande attenzione all\'atmosfera e alle esigenze del contesto.',
        chi_sono_p5: 'Quando ne ho l\'occasione suono in eventi come matrimoni, mostre d\'arte ed eventi privati. In queste situazioni metto al primo posto la sensibilità, l\'affidabilità e la capacità di adattarmi alle richieste, per accompagnare i momenti importanti con discrezione ed eleganza. Chi mi ascolta apprezza il mio carattere solare e il fatto che la mia passione traspaia chiaramente attraverso la musica: i sorrisi, le lacrime e le parole gentili del pubblico sono il feedback più prezioso che ricevo.',
        chi_sono_p6: 'In passato ho studiato Fisica all\'Università di Bologna e ho lavorato come ingegnere informatico. Spinto dai miei sogni, ho scelto di dedicarmi a tempo pieno alla musica, occupandomi anche di produzione musicale, mixing e mastering, oltre allo studio dello strumento.',
        chi_sono_p7: 'Dispongo di strumentazione propria, parlo italiano, inglese e spagnolo e sono disponibile a spostarmi. Se cerchi un pianista capace di unire professionalità, emozione e versatilità, sarò felice di collaborare con te.',
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
