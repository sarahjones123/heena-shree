document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 0.6s ease";
      document.body.style.opacity = 1;
    }, 100);
  });
  