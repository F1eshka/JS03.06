document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('username');
  
    input.addEventListener('keypress', function (event) {
      if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
      }
    });
  
    input.addEventListener('input', function () {
      this.value = this.value.replace(/\d/g, '');
    });
  });
  