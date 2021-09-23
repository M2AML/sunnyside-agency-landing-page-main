const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  console.log("fee");
  if (hamburger.classList.toggle("active")) {
    nav.classList.remove("display");
  } else {
    nav.classList.add("display");
  }
});
