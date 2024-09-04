let currentIndex = 0;
const images = document.querySelectorAll(".img__carousel");
const totalImages = images.length;

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100; // Смещение на 100% для каждого изображения
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${offset}%)`;
}

// Меняем изображение каждые 3 секунды
setInterval(showNextImage, 3000);

// кнопки
document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${offset}%)`;
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel"
  ).style.transform = `translateX(${offset}%)`;
});

// modal
const burgerMenu = document.querySelector(".burger-menu");
const menuModal = document.querySelector(".menu-modal");

burgerMenu.addEventListener("click", () => {
  menuModal.style.display =
    menuModal.style.display === "block" ? "none" : "block";
});

// для закрытия меню

document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !menuModal.contains(e.target)) {
    menuModal.style.display = "none";
  }
});

// кнопка закрытия
const closeIcon = document.querySelector(".closeIcon");

closeIcon.addEventListener("click", () => {
  menuModal.style.display = "none";
});

// разный язык

function switchLanguage(event) {
  const isRussian = event.target.id === "ru";

  // Скрываем все элементы с текстом на разных языках
  document.querySelectorAll("[data-lang]").forEach(function (element) {
    element.style.display = "none";
  });

  // Показываем элементы с выбранным языком
  if (isRussian) {
    document.querySelectorAll('[data-lang="ru"]').forEach(function (element) {
      element.style.display = "block";
    });
  } else {
    document.querySelectorAll('[data-lang="eng"]').forEach(function (element) {
      element.style.display = "block";
    });
  }
}

// Добавляем обработчики для обоих переключателей
document
  .getElementById("languageSwitch1")
  .addEventListener("click", switchLanguage);
document
  .getElementById("languageSwitch2")
  .addEventListener("click", switchLanguage);
