let currentItem = 0;
const items = ["img2.jpg", "img1.jpeg", "img3.jpeg"]; 

function updateImage() {
    const imageElement = document.getElementById("collect-item");
    imageElement.src = items[currentItem];
}

function prevItem() {
    currentItem = (currentItem === 0) ? items.length - 1 : currentItem - 1;
    updateImage();
}

function nextItem() {
    currentItem = (currentItem === items.length - 1) ? 0 : currentItem + 1;
    updateImage();
}
