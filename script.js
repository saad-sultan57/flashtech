document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".js-password-toggle").forEach((toggle) => {
    toggle.addEventListener("change", function () {
      const parent = toggle.closest(".relative");
      const password = parent.querySelector(".js-password");
      const eyeIcon = parent.querySelector(".js-eye-icon");
      const eyeSlashIcon = parent.querySelector(".js-eye-slash-icon");

      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.add("hidden");
        eyeSlashIcon.classList.remove("hidden");
      } else {
        password.type = "password";
        eyeIcon.classList.remove("hidden");
        eyeSlashIcon.classList.add("hidden");
      }

      password.focus();
    });
  });
});
