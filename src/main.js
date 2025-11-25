// Инициализация Lucide Icons
lucide.createIcons();

// =========================================================================
// ЛОГИКА МОБИЛЬНОГО МЕНЮ (Ваш предыдущий код)
// =========================================================================
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__list a');

const toggleMenu = () => {
    nav.classList.toggle('header__nav--active');

    const icon = burger.querySelector('i');
    if (nav.classList.contains('header__nav--active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
};

burger.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            toggleMenu();
        }
    });
});


// =========================================================================
// ЛОГИКА АНИМАЦИИ HERO СЕКЦИИ (Anime.js)
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------- Анимация печатающегося кода --------------------
    const codeElement = document.getElementById('animated-code');
const codeString = String.raw`
class NeuralXen {
  constructor(courseId) {
    this.course = courseId;
    this.status = 'Ready';
  }

  async startLearning() {
    this.status = 'Processing...';
    await new Promise(r => setTimeout(r, 1500));
    console.log("SUCCESS: Открыты новые возможности!");
    this.status = 'Complete';
  }
}

const student = new NeuralXen('FrontendMaster');
student.startLearning();
`;

    let index = 0;

    anime({
        targets: { idx: 0 },
        idx: codeString.length,
        duration: codeString.length * 15,
        easing: "linear",
        update(anim) {
            index = Math.floor(anim.animations[0].currentValue);
            codeElement.textContent = codeString.slice(0, index);
        },
        complete() {
            // Появление окна с кодом
            anime({
                targets: '.hero__visuals',
                opacity: [0, 1],
                translateX: [-50, 0],
                duration: 800,
                easing: 'easeOutQuad',
            });

            // Появление основного текста
            anime({
                targets: '.hero__content',
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 1000,
                delay: 200,
                easing: 'easeOutQuad',
            });
        }
    });

    // -------------------- Плавное появление заголовков --------------------
    anime({
        targets: '.hero__title, .hero__subtitle, .hero__badge, .hero__actions',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(150),
    });

});