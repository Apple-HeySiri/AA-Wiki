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
    const xPosition = Math.random() * (window.innerWidth + 100) - 50;
    const yPosition = Math.random() * (window.innerHeight + 100) - 50;
    starEl.style.left = `${xPosition}px`;
    starEl.style.top = `${yPosition}px`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});
