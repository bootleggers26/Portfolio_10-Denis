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
