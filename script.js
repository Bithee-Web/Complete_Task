
document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".faq-question").forEach(btn => {

    btn.addEventListener("click", function () {

      const item = this.closest(".faq-item");
      const icon = this.querySelector(".icon");

      // TOGGLE
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        icon.textContent = "+";
      } else {
        item.classList.add("active");
        icon.textContent = "−";
      }

    });

  });

});
