let timer;
// Chạy thời gian
const btnStart1 = document.querySelector("#start-button");
const winMessage = document.querySelector("#win-message");
btnStart1.addEventListener("click", () => {
    if (btnStart1.innerHTML.trim() === "Kết thúc") {
        btnStart1.innerHTML = "Bắt đầu";
        btnStart1.style.backgroundColor = "";
        winMessage.style.display = "none";
        clearInterval(timer);
        return;
    }
    if (btnStart1.innerHTML.trim() === "Chơi lại") {
        btnStart1.innerHTML = "Bắt đầu";
        btnStart1.style.backgroundColor = "rgb(1, 189, 1)";
        minute.innerHTML = "00";
        second.innerHTML = "00";
        winMessage.style.display = "none";
        return;
    }
    btnStart1.innerHTML = "Kết thúc";
    btnStart1.style.backgroundColor = "red";

    timer = setInterval(() => {
        const minute = document.querySelector("#minute");
        const second = document.querySelector("#second");
        let minuteValue = parseInt(minute.textContent);
        let secondValue = parseInt(second.textContent);
        secondValue++;
        if (secondValue > 59) {
            secondValue = 0;
            minuteValue++;
        }
        second.innerHTML = secondValue >= 10 ? `${secondValue}` : `0${secondValue}`;
        minute.innerHTML = minuteValue >= 10 ? `${minuteValue}` : `0${minuteValue}`;
        if (btnStart1.innerHTML.trim() === "Bắt đầu") {
            minute.innerHTML = "00";
            second.innerHTML = "00";
            clearInterval(timer);
        }
    }, 1000);
});