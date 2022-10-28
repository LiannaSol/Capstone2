const carouselInner = document.querySelector(".carousel-inner");

function buildCarouselImage(section, image) {
  let carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel-item";
  section.appendChild(carouselDiv);
  let carouselImage = document.createElement("img");
  carouselImage.className = "d-block w-100";
  carouselImage.src = "images/" + image.img;
  carouselDiv.alt = image.name;
  carouselDiv.appendChild(carouselImage);
}
function loadFirstImage(carouselInner) {
  let fCarouDiv = document.createElement("div");
  fCarouDiv.className = "carousel-item active";
  carouselInner.appendChild(fCarouDiv);
  let carouselImage = document.createElement("img");
  carouselImage.className = "d-block w-100";
  carouselImage.src = "images/Zeacliff-StoryImg_2.jpg";
  fCarouDiv.alt = "Zeacliff-StoryImg_2";
  fCarouDiv.appendChild(carouselImage);
}

function loadCarouselImages() {

  mountainsArray.forEach((image) => {
    buildCarouselImage(carouselInner, image);
  });
}

window.onload = () => {
    loadCarouselImages();
   loadFirstImage(carouselInner, mountainsArray);
};