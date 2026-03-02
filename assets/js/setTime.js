// Chạy thời gian
(document.querySelector("#start-button")).addEventListener("click", () => {
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
    }, 1000);
});
