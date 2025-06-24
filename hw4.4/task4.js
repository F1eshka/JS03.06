document.addEventListener("DOMContentLoaded", () => {
    const lights = ["red", "yellow", "green"];
    let current = 0;
  
    function updateLights() {
      lights.forEach((id, index) => {
        const el = document.getElementById(id);
        if (index === current) {
          el.style.backgroundColor = id;
        } else {
          el.style.backgroundColor = "#111";
        }
      });
    }
  
    document.getElementById("controlBtn").addEventListener("click", () => {
      current = (current + 1) % lights.length;
      updateLights();
    });
  
    updateLights();
  });
  