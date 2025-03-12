// Ожидаем полной загрузки контента страницы
document.addEventListener("DOMContentLoaded", () => {
  // Header Underline https://codepen.io/alphardex/pen/JjoqbNP
  let underlineMenuItems = document.querySelectorAll(".underline-menu li");
  if (underlineMenuItems.length > 0) {
      underlineMenuItems[0].classList.add("active");
      underlineMenuItems.forEach(item => {
          item.addEventListener("click", () => {
              underlineMenuItems.forEach(item => item.classList.remove("active"));
              item.classList.add("active");
          });
      });
  }

  // Full Page Burger Navigation https://codepen.io/alphardex/pen/NWPBwYe
  let burgerMenuToggle = document.querySelector("#burger-toggle");
  let burgerMenuLinks = document.querySelectorAll(".burger-nav li a");
  burgerMenuLinks.forEach(link => {
      link.addEventListener("click", () => {
          if (burgerMenuToggle) {
              burgerMenuToggle.checked = false;
          }
      });
  });

  // Cursor Follow & Hover Effect https://codepen.io/alphardex/pen/jOEgYjr
  //let cursor = document.querySelector(".cursor");
  //let cursorBorder = document.querySelector(".cursor-border");

  // Функция для вычисления координат
 /* let getXY = (event, element) => {
      let x = event.clientX;
      let y = event.clientY;
      let rect = element.getBoundingClientRect();
      x -= rect.width / 2;
      y -= rect.height / 2;
      return [x, y];
  };

  document.addEventListener("mouseenter", () => {
      if (cursor && cursorBorder) {
          cursor.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: "forwards" });
          cursorBorder.animate([{ opacity: 0 }, { opacity: 0.8 }], { duration: 300, fill: "forwards" });
      }
  });

  document.addEventListener("mousemove", e => {
      if (cursor && cursorBorder) {
          let [cursorX, cursorY] = getXY(e, cursor);
          let [cursorBorderX, cursorBorderY] = getXY(e, cursorBorder);
          let targetName = e.target.tagName;
          if (targetName === "A" || targetName === "LABEL" || targetName === "BUTTON") {
              cursorBorder.classList.add("on-focus");
          } else {
              cursorBorder.classList.remove("on-focus");
          }
          cursor.animate([{ transform: `translate(${cursorX}px, ${cursorY}px)` }], {
              duration: 300,
              fill: "forwards",
              delay: 50
          });
          cursorBorder.animate([{ transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }], {
              duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
              fill: "forwards",
              delay: 150
          });
      }
  });

  document.addEventListener("mouseleave", () => {
      if (cursor && cursorBorder) {
          cursor.animate([{ opacity: 0.8 }, { opacity: 0 }], { duration: 500, fill: "forwards" });
          cursorBorder.animate([{ opacity: 0.8 }, { opacity: 0 }], { duration: 500, fill: "forwards" });
      }
  });
*/
  // Cross Bar Glitch Text https://codepen.io/alphardex/pen/VwLLLNG
  const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  let crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
  crossBarGlitchTexts.forEach(text => {
      let content = text.textContent;
      text.textContent = "";
      let slice = text.dataset.slice;
      let glitchText = document.createElement("div");
      glitchText.className = "glitch";
      glitchText.style.setProperty("--slice-count", slice);
      for (let i = 0; i <= Number(slice); i++) {
          let span = document.createElement("span");
          span.textContent = content;
          span.style.setProperty("--i", `${i + 1}`);
          if (i !== Number(slice)) {
              span.style.animationDelay = `${800 + random(100, 300)}ms`;
          }
          glitchText.append(span);
      }
      text.appendChild(glitchText);
      let bars = document.createElement("div");
      bars.className = "bars";
      for (let i = 0; i < 5; i++) {
          let bar = document.createElement("div");
          bar.className = "bar";
          bars.append(bar);
      }
      text.append(bars);
  });

  // Staggered Rise In Text https://codepen.io/alphardex/pen/qBEmGbw
  let staggeredRiseInTexts = document.querySelectorAll(".staggered-rise-in");
  staggeredRiseInTexts.forEach(text => {
      let letters = text.textContent.split("");
      text.textContent = "";
      letters.forEach((letter, i) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${i / 20}s`;
          text.append(span);
      });
  });

  // Observe the elements which have animations to fire
  let observer = new IntersectionObserver(
      entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      },
      { rootMargin: "0px 0px -140px" }
  );

  let titles = document.querySelectorAll(".titles > *");
  titles.forEach(title => observer.observe(title));
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => observer.observe(p));
  let profileCards = document.querySelectorAll(".card");
  profileCards.forEach(profileCard => observer.observe(profileCard));
  let timeline = document.querySelector(".timeline");
  if (timeline) observer.observe(timeline);
  let marker = document.querySelector(".marker");
  if (marker) observer.observe(marker);
  let placeName = document.querySelector(".place-name");
  if (placeName) observer.observe(placeName);

  let sponsorList = document.querySelectorAll(".sponsors-list li");
  sponsorList.forEach(sponsor => observer.observe(sponsor));

 
});

// Логика для переключателя языков
document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.querySelector(".language-switcher");
    const langLinks = langSwitcher.querySelectorAll("a");
  
    langLinks.forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          const lang = link.getAttribute("data-lang");
      
          // Список поддерживаемых языков
          const supportedLangs = ["ru", "sr", "en"];
      
          if (supportedLangs.includes(lang)) {
            // Переключение на соответствующую страницу
            window.location.href = lang === "ru" ? "index.html" : `index-${lang}.html`;
          } else {
            // Если язык не поддерживается, остаемся на текущей странице
            showErrorPopup("Error: The selected language is not supported!");
          }
        });
      });
  });
  
 // Логика для открытия попапов
document.querySelectorAll("[data-popup]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault(); // Предотвращаем переход по ссылке
      const popupId = button.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.classList.remove("hidden");
        popup.style.display = "block"; // Показываем попап
      }
    });
  });
  
  // Логика для закрытия попапов
  document.querySelectorAll(".popup-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const popup = closeBtn.closest(".popup");
      if (popup) {
        popup.classList.add("hidden");
        popup.style.display = "none"; // Скрываем попап
      }
    });
  });
  
  // Закрытие попапа при клике вне его области
  document.addEventListener("click", event => {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
      if (!popup.contains(event.target) && !event.target.closest("[data-popup]")) {
        popup.classList.add("hidden");
        popup.style.display = "none";
      }
    });
  });
  

//letters
function submitForm(event) {
    event.preventDefault(); // Прекращаем стандартное поведение формы (перенаправление)

    const form = event.target;
    const formData = new FormData(form);

    // Отправляем данные в Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            // Если отправка успешна, показываем попап и очищаем форму
            showPopup();
            clearForm(form); // Очищаем форму
        } else {
            alert("Ошибка при отправке сообщения.");
        }
    })
    .catch(error => {
        alert("Ошибка при отправке сообщения.");
    });
}

// Функция для отображения попапа
function showPopup() {
    const popup = document.getElementById("popup-success");
    popup.style.display = "block";
}

// Функция для закрытия попапа
function closePopup() {
    const popup = document.getElementById("popup-success");
    popup.style.display = "none";
}

// Функция для очистки данных формы
function clearForm(form) {
    form.reset(); // Метод reset() очищает все поля формы
}

// Функция для отслеживания активного пункта меню при прокрутке
function setActiveMenu() {
    const sections = document.querySelectorAll('section'); // Все секции на странице
    const menuLinks = document.querySelectorAll('.underline-menu li'); // Все пункты меню
    
    let currentSection = null;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // Проверяем, если секция находится в области видимости
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = menuLinks[index]; // Определяем активный раздел
        }
    });

    // Если активный пункт найден, добавляем класс .active, иначе убираем
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        currentSection.classList.add('active');
    }
}

// Добавляем обработчик события для прокрутки
window.addEventListener('scroll', setActiveMenu);

// Вызываем функцию при загрузке страницы для корректного отображения
document.addEventListener('DOMContentLoaded', setActiveMenu);


// определяем язык
document.addEventListener("DOMContentLoaded", () => {
    const langSwitcher = document.querySelector(".language-switcher");
    const langLinks = langSwitcher.querySelectorAll("a");
  
    langLinks.forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();  // Отменяем стандартное поведение ссылки
          const lang = link.getAttribute("data-lang");
          const currentLang = document.documentElement.lang; // Получаем текущий язык страницы

          // Переключаем только если выбран другой язык
          if (lang !== currentLang) {
            // Переключение на соответствующую страницу
            window.location.href = lang === "ru" ? "index.html" : `index-${lang}.html`;
          }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".citation");
    const nextBtn = document.querySelector(".next-btn");
    let currentSlide = 0;
    let interval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 10000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextBtn.addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    // Инициализация
    showSlide(currentSlide);
    startAutoSlide();
});
