import "./style.css";
import "./js/choosingRegion";
import "flowbite";

const likeBtn = document.getElementById("likeBtn");
const heartIcon = document.querySelector("#heartIcon");

likeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  heartIcon.classList.toggle("icon-tabler-heart-checked");
});
