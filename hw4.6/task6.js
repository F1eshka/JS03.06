document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".button-container");
  
    containers.forEach(container => {
      const button = container.querySelector("button");
      const tooltip = container.querySelector(".tooltip");
  
      button.addEventListener("mouseenter", () => {
        tooltip.textContent = button.dataset.tooltip;
  
        tooltip.classList.add("show");
        tooltip.style.bottom = `${button.offsetHeight + 8}px`;
        tooltip.style.top = "auto";
        tooltip.style.left = `${(button.offsetWidth - tooltip.offsetWidth) / 2}px`;
  
        const rect = tooltip.getBoundingClientRect();
  
        if (rect.top < 0) {
          tooltip.style.top = `${button.offsetHeight + 8}px`;
          tooltip.style.bottom = "auto";
        }
      });
  
      button.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
      });
    });
  });
  