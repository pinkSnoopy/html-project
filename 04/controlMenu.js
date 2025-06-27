const hamburgerBtn = document.querySelector(
    '[aria-controls="primary-navigation"]'
);
const nav = document.querySelector(".primary-navigation");
nav.style.display = "none"
console.log("----------------------")
hamburgerBtn.addEventListener("click", () => {
    const isNavOpened = hamburgerBtn.getAttribute("aria-expanded")
    hamburgerBtn.setAttribute("aria-expanded", isNavOpened === "false" ? "true" : "false")
    nav.style.display = isNavOpened === "false" ? "block" : "none"
})