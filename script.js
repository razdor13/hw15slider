const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const containerImg = document.querySelector(".containerimg");
let isAnimating = false;
prevBtn.addEventListener("click", () => {
    let i = 100;
    function animationPrev() {
        if (i === 0) {
            return;
        } else if (parseFloat(containerImg.style.right) === -1000) {
            prevBtn.style.visibility = "hidden";
        } else {
            nextBtn.style.visibility = "visible";
        }
        i -= 1;
        containerImg.style.right =
            parseFloat(containerImg.style.right) - 10 + "px";

        animation();
        console.log(i);
    }
    function animation() {
        setTimeout(animationPrev, 1);
    }
    animationPrev();
});
nextBtn.addEventListener("click", () => {
    let i = 100;
    function animationPrev() {
        if (i === 0) {
            return;
        } else if (parseFloat(containerImg.style.right) === -1000) {
            nextBtn.style.visibility = "hidden";
        } else {
            prevBtn.style.visibility = "visible";
        }
        i -= 1;
        containerImg.style.right =
            parseFloat(containerImg.style.right) + 10 + "px";
        animation();
        console.log(i);
    }
    function animation() {
        setTimeout(animationPrev, 1);
    }
    animationPrev();
});
