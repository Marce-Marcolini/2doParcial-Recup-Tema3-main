//Secuencia de fotos
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const btnNext = document.querySelector(".btn-next");
  const btnPrev = document.querySelector(".btn-prev");

  let currentIndex = 0;

  const updateSlide = (newIndex) => {
    slides[currentIndex].classList.remove("active");
    currentIndex = newIndex;
    slides[currentIndex].classList.add("active");
  };

  btnNext.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    updateSlide(nextIndex);
  });

  btnPrev.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(prevIndex);
  });
});
