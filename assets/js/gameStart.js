(document.querySelector("#start-button")).addEventListener("click", () => {
    // Đổi nút Bắt đầu => Kết thúc
    const btn = document.querySelector("#start-button");
    const winMessage = document.querySelector("#win-message");

    if (btn.innerHTML.trim() === "Bắt đầu") {
        btn.innerHTML = "Kết thúc";
        btn.style.backgroundColor = "red";
    }
    else {
        btn.innerHTML = "Bắt đầu";
        btn.style.backgroundColor = "";
    }

    const boxes = document.querySelectorAll(".box");
    const shuffleTimes = 100;

    for (let i = 0; i < shuffleTimes; i++) {
        // Random 2 ô bất kì để hoán đổi
        const boxA = Math.floor(Math.random() * 12);
        const boxB = Math.floor(Math.random() * 12);

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
