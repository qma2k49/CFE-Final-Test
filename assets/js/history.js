// Hiện ra lịch sử
const result = JSON.parse(localStorage.getItem("result"));
const tableBody = document.querySelector("tbody");
const row = document.createElement("tr");
row.innerHTML = `
<td>${tableBody.children.length + 1}</td>
<td>${result.moveCount}</td>
<td>${result.time}</td>`;
tableBody.appendChild(row);