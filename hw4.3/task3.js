document.addEventListener("DOMContentLoaded", () => {
    const field = document.getElementById("field");
    const ball = document.getElementById("ball");
  
    field.addEventListener("click", function(event) {
      const fieldRect = field.getBoundingClientRect();
  
      const ballWidth = ball.offsetWidth;
      const ballHeight = ball.offsetHeight;
  
      let x = event.clientX - fieldRect.left - ballWidth / 2;
      let y = event.clientY - fieldRect.top - ballHeight / 2;
  
      x = Math.max(0, Math.min(x, field.clientWidth - ballWidth));
      y = Math.max(0, Math.min(y, field.clientHeight - ballHeight));
  
      ball.style.left = x + "px";
      ball.style.top = y + "px";
    });
  });
  