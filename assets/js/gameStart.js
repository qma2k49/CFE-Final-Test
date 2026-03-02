const btnStart2 = document.querySelector("#start-button");
btnStart2.addEventListener("click", () => {
    if (btnStart2.innerHTML.trim() === "Bắt đầu") {
        return;
    }
    const boxes = document.querySelectorAll(".box");
    const shuffleTimes = 100;
    for (let i = 0; i < shuffleTimes; i++) {
        // Random 2 ô bất kì để hoán đổi
        const boxA = Math.floor(Math.random() * boxes.length);
        const boxB = Math.floor(Math.random() * boxes.length);
        // Hoán đổi nội dung của boxA và boxB
        const temp = boxes[boxA].innerHTML;
        boxes[boxA].innerHTML = boxes[boxB].innerHTML;
        boxes[boxB].innerHTML = temp;
        // Đổi className
        const tempClass = boxes[boxA].className;
        boxes[boxA].className = boxes[boxB].className;
        boxes[boxB].className = tempClass;
    }
});