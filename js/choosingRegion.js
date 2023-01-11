const chooseRegion = document.getElementById("chooseRegion");
const confirmRegion = document.getElementById("confirmRegion");
const choosedRegion = document.getElementById("choosedRegion");
const chooseCity = document.getElementById("chooseCity");
const choosedCity = document.getElementById("choosedCity");

let chooseCityIsDisabled = true;

chooseCity.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(chooseCityIsDisabled);
  if (value.trim().length === 0) {
    confirmRegion.disabled = true;
    chooseCityIsDisabled = true;
  } else {
    confirmRegion.disabled = false;
    chooseCityIsDisabled = false;
  }
});

confirmRegion.addEventListener("click", (e) => {
  e.preventDefault();
  if (chooseCityIsDisabled) {
    e.target.disabled = true;
  } else {
    e.target.disabled = false;
    toggleChoosingRegions();
    choosedCity.textContent = chooseCity.value;
  }
});

choosedCity.addEventListener("click", () => {
  toggleChoosingRegions();
  chooseCity.value = "";
  chooseCityIsDisabled = true;
});

function ariaDisabledHandler(el) {
  el.ariaDisabled
    ? el.classList.toggle("hidden")
    : el.classList.toggle("hidden");
}

function toggleChoosingRegions() {
  ariaDisabledHandler(chooseRegion);
  ariaDisabledHandler(choosedRegion);
}
