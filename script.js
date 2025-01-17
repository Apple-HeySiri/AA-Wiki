window.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelector("body");
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1;
    const maxSize = 2;
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    starEl.style.left = `${Math.random() * (screenWidth + 200) - 100}px`;
    starEl.style.top = `${Math.random() * (screenHeight + 200) - 100}px`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});
