let btns = document.querySelectorAll('.btn-game');
let result = document.getElementById('result');
let resetBtn = document.getElementById('reset');
let currentValue = 'X';
let isDraw = true;
let cells = ['','','','','','','','','',];
let conditions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

const game = (value) =>{
	cells[value-1] = currentValue;
	// console.log(cells);
	btns[value-1].textContent = currentValue;
	currentValue = currentValue == 'X' ? 'O' : 'X';
	result.innerHTML = `<b>Player ${currentValue} turn</b>`;

	if (btns[value-1].textContent != null){
		btns[value-1].disabled = true;
	}

	for (let i = 0; i < conditions.length; i++){
		let condition = conditions[i];
		let a = cells[condition[0]];
		let b = cells[condition[1]];
		let c = cells[condition[2]];

		if (a =='' || b == '' || c == '') { continue; }
		if (a == b && b == c) {
			result.innerHTML = `<b class='text-success'>Player ${b} wins</b>`;
			btns.forEach(btn => btn.setAttribute('disabled', null));
		}
		
		if (!cells.includes('')){
			conditions.forEach(cond => {
				if (cells[cond[0]] == cells[cond[1]] && cells[cond[1]] == cells[cond[2]]){
					isDraw = false;
				};
			});
			if (isDraw){ result.innerHTML = `<b class='text-secondary'>Game Draw</b>`;}
		}	
	}
};

function resetGame(){
	cells = ['','','','','','','','','',];
	// console.log(cells);
	btns.forEach(btn => {
		btn.textContent = '';
		btn.disabled = false;
	});
	result.innerHTML = '<b>Player X turn</b>';
	closeModal();
};

const modalReset = document.querySelector('.modal-reset');
function showModal(){
	modalReset.style.display = 'block';
}

function closeModal(){
	modalReset.style.display = 'none';
}

const btnReset = document.getElementById('resetGame');
btnReset.addEventListener('click', resetGame);

this.onclick = (event) => {
	if (event.target == modalReset){
		modalReset.style.display = 'none';
	}
}




