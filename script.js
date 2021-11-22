const image = document.querySelector(".gallery__main__image");

const images = ["assets/img-0.jpg", "assets/img-1.png", "assets/img-2.jpg", "assets/img-3.jpg", "assets/img-4.jpg", "assets/img-5.jpg", "assets/img-6.jpg", "assets/img-7.jpg", "assets/img-8.jpg", "assets/img-9.jpg"];

function changeImg(selectedImg) {
    image.src = images[selectedImg.src[selectedImg.src.length - 5]];
}