// Menu burger
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuBody.classList.toggle("_active");
  menuIcon.classList.toggle("_active");
  body.classList.toggle("_lock");
});

// Mobile dropdown menu
if (deviceType() == "mobile" || deviceType() == "tablet") {
  document.body.classList.add("_touch");
  const menuArrows = document.querySelectorAll("._icon-icon-right");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.closest(".menu__item").classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

const formInputs = document.querySelectorAll(".search-form__input");

formInputs.forEach((formInput) => {
  formInput.addEventListener("focus", () => {
    formInput.closest(".search-form").style.border = "solid 0.1rem #10b981";
  });
  formInput.addEventListener("focusout", () => {
    formInput.closest(".search-form").style.border = "solid 0.1rem #e0e3eb";
  });
});

// Tabs
const tabs = document.querySelector(".tabs");
if (tabs) {
  const tabItems = document.querySelectorAll(".tabs__item");
  const tabsContent = document.querySelectorAll(".tabs__content");

  tabItems.forEach((tab, index) => {
    const interval = setInterval(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
    setTimeout(function () {
      clearInterval(setInterval);
    }, 5000);
    tab.addEventListener("click", () => {
      tabsContent.forEach((content) => {
        content.classList.remove("_active");
      });
      tabItems.forEach((tab) => {
        tab.classList.remove("_active");
      });
      tabItems[index].classList.add("_active");
      tabsContent[index].classList.add("_active");
    });
  });
}

// Fixed header on Scroll
const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  const windowScroll = window.scrollY;
  const headerPosition = windowScroll;
  if (headerPosition >= 8) {
    header.classList.add("_scroll");
  } else if (headerPosition <= 8) {
    header.classList.remove("_scroll");
  }
});
