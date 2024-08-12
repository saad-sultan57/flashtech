document.addEventListener("DOMContentLoaded", () => {
  // Password visibility toggle
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

  // Tabs functionality
  const tabsContainer = document.querySelector("#tabs");
  const tabTogglers = tabsContainer.querySelectorAll("#tabs a");
  const tabContents = document.querySelector("#tab-contents");

  tabTogglers.forEach((toggler) => {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();

      const tabName = this.getAttribute("href");

      tabTogglers.forEach((tab, i) => {
        tab.parentElement.classList.remove(
          "border-t",
          "border-r",
          "border-l",
          "-mb-px",
          "bg-[#9159fa]",
          "text-white"
        );
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) return;
        tabContents.children[i].classList.add("hidden");
      });

      e.target.parentElement.classList.add(
        "border-t",
        "border-r",
        "border-l",
        "-mb-px",
        "bg-[#9159fa]",
        "text-white"
      );
    });
  });
});
