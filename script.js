const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const containerImg = document.querySelector(".containerimg");
let nowPositionNoPx = parseFloat(containerImg.style.right);

prevBtn.addEventListener("click", () => {
    console.log(nowPositionNoPx);
    let i = 100;
    function animationPrev() {
        if (i === 0) {
            return;
        }
        nowPositionNoPx -= 10;
        i -= 1;
        containerImg.style.right = `${nowPositionNoPx}px`;

        animation();
        console.log(i);
    }
    function animation() {
        setTimeout(animationPrev, 1);
    }
    animationPrev();
});
