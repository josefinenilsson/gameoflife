"use strict";
var displayScreen = document.getElementById('screen');
var cells = [];
for (var y = 0; y < 30; ++y) {
    var row = [];
    for (var x = 0; x < 30; ++x) {
        // row.push(false);
        row.push(Math.random() < 0.5);
    }
    cells.push(row);
}
cells[4][4] = true;
cells[4][5] = true;
cells[5][4] = true;
cells[5][5] = true;
// step();
setInterval(step, 500);
function step() {
    var newCells = [];
    for (var y = 0; y < 30; ++y) {
        newCells[y] = [];
        for (var x = 0; x < 30; ++x) {
            newCells[y][x] = cells[y][x];
            var neigbourCount = (cells[(y - 1 + 30) % 30][(x + 30) % 30] ? 1 : 0) +
                (cells[(y + 1 + 30) % 30][(x + 30) % 30] ? 1 : 0) +
                (cells[(y + 30) % 30][(x - 1 + 30) % 30] ? 1 : 0) +
                (cells[(y + 30) % 30][(x + 1 + 30) % 30] ? 1 : 0) +
                (cells[(y - 1 + 30) % 30][(x - 1 + 30) % 30] ? 1 : 0) +
                (cells[(y + 1 + 30) % 30][(x + 1 + 30) % 30] ? 1 : 0) +
                (cells[(y - 1 + 30) % 30][(x + 1 + 30) % 30] ? 1 : 0) +
                (cells[(y + 1 + 30) % 30][(x - 1 + 30) % 30] ? 1 : 0);
            if (neigbourCount < 2) {
                newCells[y][x] = false;
            }
            else if (neigbourCount > 3) {
                newCells[y][x] = false;
            }
            else if (neigbourCount == 3) {
                newCells[y][x] = true;
            }
            else if (neigbourCount == 2) {
                // newCells[y][x] = true;
            }
        }
    }
    if (displayScreen) {
        displayScreen.textContent = cells
            .map(function (row) { return row
            .map(function (cell) { return cell ? '🍍' : ' '; })
            .join(''); })
            .join("\n");
    }
    cells = newCells;
}
