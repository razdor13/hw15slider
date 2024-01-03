const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const containerImg = document.querySelector(".containerimg");
let currentImgIndex = 1;
const IMG_COUNT = 3;
const IMG_WIDTH = 1000;
prevBtn.addEventListener("click", () => {
    currentImgIndex--;
    updateImg();
});

nextBtn.addEventListener("click", () => {
    currentImgIndex++;
    updateImg();
});

function updateImg() {
    prevBtn.style.visibility = !currentImgIndex ? "hidden" : "visible";
    nextBtn.style.visibility =
        currentImgIndex === IMG_COUNT - 1 ? "hidden" : "visible";
    const newX = currentImgIndex * IMG_WIDTH - IMG_WIDTH;
    containerImg.style.transform = `translateX(${-newX}px)`;
}
