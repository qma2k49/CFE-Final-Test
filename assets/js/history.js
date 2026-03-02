const gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];
const tableBody = document.querySelector("tbody");

gameHistory.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.moveCount}</td>
        <td>${item.time}</td>`;
    tableBody.appendChild(row);
});