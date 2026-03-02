const btnStart2 = document.querySelector("#start-button");
btnStart2.addEventListener("click", () => {
    if (btnStart2.innerHTML.trim() === "Bắt đầu") {
        return;
    }
    if (btnStart2.innerHTML.trim() === "Chơi lại") {
        return;
    }
    const boxes1 = document.querySelectorAll(".box");
    const shuffleTimes = 100;
    for (let i = 0; i < shuffleTimes; i++) {
        // Random 2 ô bất kì để hoán đổi
        const boxA = Math.floor(Math.random() * boxes1.length);
        const boxB = Math.floor(Math.random() * boxes1.length);
        // Hoán đổi nội dung của boxA và boxB
        const temp = boxes1[boxA].innerHTML;
        boxes1[boxA].innerHTML = boxes1[boxB].innerHTML;
        boxes1[boxB].innerHTML = temp;
        // Đổi className
        const tempClass = boxes1[boxA].className;
        boxes1[boxA].className = boxes1[boxB].className;
        boxes1[boxB].className = tempClass;
    }
});