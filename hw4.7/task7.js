document.addEventListener("DOMContentLoaded", () => {
    const tree = document.getElementById("tree");
  
    const liWithChildren = tree.querySelectorAll("li > ul");
  
    liWithChildren.forEach(ul => {
      const parentLi = ul.parentElement;
  
      ul.classList.add("hidden");
  
      parentLi.addEventListener("click", function (event) {
        event.stopPropagation(); 
        ul.classList.toggle("hidden");
      });
    });
  });
  