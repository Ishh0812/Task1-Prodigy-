// Menu Slider - Enable sliding behavior
const menuSlider = document.querySelector(".menu-slider");

// Add horizontal scroll capability with mouse wheel
menuSlider.addEventListener("wheel", (event) => {
  event.preventDefault();
  menuSlider.scrollLeft += event.deltaY;
});
