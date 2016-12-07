const app = "I don't do much."

var dodger = document.getElementById('dodger');
const DODGER_WIDTH = 40;

document.addEventListener('keydown', (evt) => {
	var key = evt.which;

	switch(key) {
		case 37:
			moveDodgerLeft();
			break;
		case 39:
			moveDodgerRight();
			break;
	}
});

function moveDodgerRight() {
	var left = parseInt(dodger.style.left.replace('px', ''));
	var right = left + DODGER_WIDTH;

	if (right < 400)
		dodger.style.left = `${left + 1}px`;
}

function moveDodgerLeft() {
	var left = parseInt(dodger.style.left.replace('px', ''));

	if (left > 0)
		dodger.style.left = `${left - 1}px`;
}
