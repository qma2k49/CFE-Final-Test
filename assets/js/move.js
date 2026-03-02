let moveCount = 0;

function swapBoxes(boxA, boxB) {
    // Hoán đổi số
    const tempHTML = boxA.innerHTML;
    boxA.innerHTML = boxB.innerHTML;
    boxB.innerHTML = tempHTML;

    // Hoán đổi className
    const tempClass = boxA.className;
    boxA.className = boxB.className;
    boxB.className = tempClass;
}

function checkWin(boxes) {
    for (let i = 0; i < 11; i++) {
        const currentNumber = parseInt(boxes[i].innerHTML.trim());
        if (currentNumber !== (i + 1)) {
            return false;
        }
    }
    return true;
}

document.addEventListener("keydown", (event) => {
    const btnStart3 = document.querySelector("#start-button");
    if (btnStart3.innerHTML.trim() !== "Kết thúc") return;

    const boxes2 = Array.from(document.querySelectorAll(".box"));
    const blackBoxIndex = boxes2.findIndex(box => box.classList.contains("box12"));
    let targetIndex = -1;

    // Tăng số bước di chuyển
    switch (event.key) {
        case "ArrowUp":
        case "W":
        case "w":
            if (blackBoxIndex >= 4) targetIndex = blackBoxIndex - 4;
            break;
        case "ArrowDown":
        case "S":
        case "s":
            if (blackBoxIndex < boxes2.length - 4) targetIndex = blackBoxIndex + 4;
            break;
        case "ArrowLeft":
        case "A":
        case "a":
            if (blackBoxIndex % 4 !== 0) targetIndex = blackBoxIndex - 1;
            break;
        case "ArrowRight":
        case "D":
        case "d":
            if (blackBoxIndex % 4 !== 3) targetIndex = blackBoxIndex + 1;
            break;
    }

    if (targetIndex !== -1) {
        swapBoxes(boxes2[blackBoxIndex], boxes2[targetIndex]);
        moveCount++;

        // Kiểm tra chiến thắng
        const isWin = checkWin(boxes2);
        if (isWin) {
            clearInterval(timer);
            // Hiển thị thông báo chiến thắng
            const winMessage = document.querySelector("#win-message");
            winMessage.style.display = "flex";

            // Chơi lại
            btnStart3.innerHTML = "Chơi lại";
            btnStart3.style.backgroundColor = "#ccc015ff";

            // Ghi kết quả vào bảng
            const tableBody = document.querySelector("tbody");
            const row = document.createElement("tr");
            const minute = document.querySelector("#minute");
            const second = document.querySelector("#second");

            row.innerHTML = `
            <td>${tableBody.children.length + 1}</td>
            <td>${moveCount}</td>
            <td>${minute.innerHTML}:${second.innerHTML}</td>`;

            tableBody.appendChild(row);


            // Lưu vào LocalStorage
            const result = {
                moveCount: moveCount,
                time: `${minute.innerHTML}:${second.innerHTML}`
            };
            localStorage.setItem("result", JSON.stringify(result));

        }

        // Reset bước di chuyển khi nhấn "Kết thúc"
        if (btnStart3.innerHTML.trim() === "Bắt đầu") {
            moveCount = 0;
        }
    }

});
