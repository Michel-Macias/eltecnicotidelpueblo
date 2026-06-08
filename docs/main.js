/* ==========================================================================
   EL TÉCNICO TI DEL PUEBLO - INTERACTIVIDAD PRINCIPAL (JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DEL MENÚ HAMBURGUESA (MÓVIL)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        // Alternar menú
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. CABECERA FLOTANTE AL HACER SCROLL (SHRINKING HEADER)
    const header = document.getElementById('site-header');
    
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Ejecución inicial por si carga la página ya con scroll

    // 3. CARRUSEL DINÁMICO DEL HERO
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    const slideInterval = 6000; // Cambiar cada 6 segundos
    let intervalId;

    const showSlide = (index) => {
        // Quitar activos
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => {
            dot.classList.remove('active');
            dot.setAttribute('aria-current', 'false');
        });

        // Asegurar rango circular
        currentSlide = (index + slides.length) % slides.length;

        // Activar seleccionado
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
            dots[currentSlide].setAttribute('aria-current', 'true');
        }
    };

    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const startCarousel = () => {
        if (slides.length > 1) {
            intervalId = setInterval(nextSlide, slideInterval);
        }
    };

    const stopCarousel = () => {
        clearInterval(intervalId);
    };

    // Configurar clics en los indicadores (dots)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Inicializar carrusel
    startCarousel();

    // 4. ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER - REVEAL)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Dejar de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12, // Umbral para activar (12% del elemento visible)
        rootMargin: '0px 0px -50px 0px' // Activa un poco antes de salir del viewport
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
