class SidebarMenu {
  constructor() {
    this.sidebarToggleButtons = document.querySelectorAll(
      '[data-drawer-toggle="sidebar-multi-level-sidebar"]'
    );
    this.sidebar = document.getElementById("sidebar-multi-level-sidebar");
    this.backdrop = document.getElementById("backdrop");
    this.dropdownButtons = document.querySelectorAll("[data-collapse-toggle]");

    this.initSidebarToggle();
    this.initDropdownToggle();
  }

  initSidebarToggle() {
    this.sidebarToggleButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.sidebar.classList.toggle("-translate-x-full");
        this.backdrop.classList.toggle("hidden");
      });
    });

    this.backdrop.addEventListener("click", () => {
      this.sidebar.classList.add("-translate-x-full");
      this.backdrop.classList.add("hidden");
    });
  }

  initDropdownToggle() {
    this.dropdownButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-collapse-toggle");
        const target = document.getElementById(targetId);
        target.classList.toggle("hidden");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SidebarMenu();

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

  let tabsContainer = document.querySelector("#tabs");

  let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

  console.log(tabTogglers);

  tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();

      let tabName = this.getAttribute("href");

      let tabContents = document.querySelector("#tab-contents");

      for (let i = 0; i < tabContents.children.length; i++) {
        tabTogglers[i].parentElement.classList.remove(
          "border-t",
          "border-r",
          "border-l",
          "-mb-px",
          "bg-[#9159fa]",
          "text-white"
        );
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden");
      }
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
