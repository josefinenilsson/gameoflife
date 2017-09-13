const displayScreen = document.getElementById('screen');
let cells:Array<Array<boolean>> = [];
for(let y = 0; y <30; ++y){
	const row = [];

	for(let x = 0; x <30; ++x){
		// row.push(false);
		row.push(Math.random()<0.5);
	}
	cells.push(row);

}
cells[4][4] = true;
cells[4][5] = true;
cells[5][4] = true;
cells[5][5] = true;
// step();
setInterval(step, 500);
function step(){
	const newCells:Array<Array<boolean>> = [];
	for(let y = 0; y <30; ++y){
		newCells[y] = [];

		for(let x = 0; x <30; ++x){
				newCells[y][x] = cells[y][x];


			const neigbourCount =
				(cells[(y -1+30) %30][(x   +30)%30] ? 1 : 0 )+
				(cells[(y +1+30) %30][(x   +30)%30] ? 1 : 0 )+
				(cells[(y   +30) %30][(x -1+30)%30] ? 1 : 0 )+
				(cells[(y   +30) %30][(x +1+30)%30] ? 1 : 0 )+
				(cells[(y-1 +30) %30][(x-1 +30)%30] ? 1 : 0 )+
				(cells[(y+1 +30) %30][(x+1 +30)%30] ? 1 : 0 )+
				(cells[(y-1 +30) %30][(x+1 +30)%30] ? 1 : 0 )+
				(cells[(y+1 +30) %30][(x-1 +30)%30] ? 1 : 0 )
			if(neigbourCount < 2){
				newCells[y][x] = false;
			}else if(neigbourCount >3){
				newCells[y][x] = false;
			}else if(neigbourCount == 3){
				newCells[y][x] = true;
			}else if(neigbourCount == 2){
				// newCells[y][x] = true;
			}
		}

	}
	if (displayScreen){
		displayScreen.textContent = cells
			.map(row => row
				.map(cell => cell ? '🍍' : ' ')
				.join('')
			)
			.join("\n");
	}
	cells = newCells;
}
