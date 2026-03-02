// Chạy thời gian
const btnStart1 = document.querySelector("#start-button");
btnStart1.addEventListener("click", () => {
    if (btnStart1.innerHTML.trim() === "Kết thúc") {
        btnStart1.innerHTML = "Bắt đầu";
        btnStart1.style.backgroundColor = "";
        clearInterval(timer);
        return;
    }
    btnStart1.innerHTML = "Kết thúc";
    btnStart1.style.backgroundColor = "red";
    const timer = setInterval(() => {
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
        if (btnStart1.innerHTML.trim() === "Kết thúc") {
            btnStart1.innerHTML = "Kết thúc";
            btnStart1.style.backgroundColor = "red";
        }
        else {
            minute.innerHTML = "00";
            second.innerHTML = "00";
            btnStart1.innerHTML = "Bắt đầu";
            btnStart1.style.backgroundColor = "";
            clearInterval(timer);
            return;
        }
    }, 1000);
});