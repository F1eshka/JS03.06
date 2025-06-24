document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("bookList");
  
    list.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        Array.from(list.children).forEach(li => li.classList.remove("active"));
        event.target.classList.add("active");
      }
    });
  });
  