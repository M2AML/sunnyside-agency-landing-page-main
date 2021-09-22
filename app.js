const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  console.log("fee");
  if (hamburger.classList.toggle("active")) {
    nav.classList.add("display");
  } else {
    nav.classList.remove("display");
  }
});
