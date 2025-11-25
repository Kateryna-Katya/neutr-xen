

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

if (typeof Swiper !== 'undefined') {
    const reviewsSwiper = new Swiper('.reviews-slider', {
        // Опции Swiper
        direction: 'horizontal',
        loop: true, // Зацикленный слайдер
        slidesPerView: 1,
        spaceBetween: 30,
        
        // Навигация (стрелки)
        navigation: {
            nextEl: '.reviews-next-btn',
            prevEl: '.reviews-prev-btn',
        },

        // Пагинация (точки)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Адаптивные настройки
        breakpoints: {
            // Когда ширина экрана >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // Когда ширина экрана >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 50
            }
        },
        
        // Автоматическая прокрутка (опционально)
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
} else {
    console.error('Swiper.js не загружен. Проверьте CDN-ссылку в HTML.');
}

// =========================================================================
// ЛОГИКА ФОРМЫ КОНТАКТЫ + CAPTCHA
// =========================================================================

const contactForm = document.getElementById('contactForm');
const captchaQuestionElement = document.getElementById('captchaQuestion');
const formMessageElement = document.getElementById('formMessage');

let captchaAnswer;

// Функция для генерации CAPTCHA
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = ['+', '-'][Math.floor(Math.random() * 2)];

    let question, answer;

    if (operator === '-') {
        if (num1 < num2) {
            question = `${num2} ${operator} ${num1}`;
            answer = num2 - num1;
        } else {
            question = `${num1} ${operator} ${num2}`;
            answer = num1 - num2;
        }
    } else {
        question = `${num1} ${operator} ${num2}`;
        answer = num1 + num2;
    }

    captchaQuestionElement.textContent = `Сколько будет ${question}?`;
    captchaAnswer = answer;
}

// Генерируем CAPTCHA при загрузке страницы
generateCaptcha();


if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const captchaInput = parseInt(document.getElementById('captcha').value.trim());
        const consentChecked = document.getElementById('consent').checked;
        
        formMessageElement.style.display = 'none'; 

        // 1. Проверка CAPTCHA
        if (captchaInput !== captchaAnswer) {
            formMessageElement.textContent = 'Ошибка: Неверный ответ на CAPTCHA. Попробуйте еще раз.';
            formMessageElement.className = 'form__message error';
            formMessageElement.style.display = 'block';
            generateCaptcha(); 
            return; 
        }

        // 2. Проверка согласия
        if (!consentChecked) {
            formMessageElement.textContent = 'Ошибка: Вы должны согласиться с условиями использования.';
            formMessageElement.className = 'form__message error';
            formMessageElement.style.display = 'block';
            return; 
        }

        // Если все проверки пройдены:
        const submitButton = this.querySelector('.form__submit-btn');
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;

        setTimeout(() => {
            // Имитация успешной отправки
            console.log(`Форма успешно отправлена: Имя - ${name}`);

            formMessageElement.textContent = `Спасибо, ${name}! Ваша заявка принята. С вами свяжутся в течение 2 минут для начала обучения!`;
            formMessageElement.className = 'form__message success';
            formMessageElement.style.display = 'block';

            // Очистка формы и восстановление кнопки
            contactForm.reset();
            generateCaptcha(); 
            submitButton.textContent = 'Зарегистрироваться и начать';
            submitButton.disabled = false;

        }, 1500); // Задержка 1.5 секунды
    });
}