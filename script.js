document.addEventListener('DOMContentLoaded', function () {
	//Display initial message
	var content = 'whats up chum, whach you want to see? FizzBuzz or Fibonacci?';
	var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

	$(ele)
		.hide()
		.appendTo('.greeting')
		.each(function (i) {
			$(this)
				.delay(40 * i)
				.css({
					display: 'inline',
					opacity: 0,
				})
				.animate(
					{
						opacity: 1,
					},
					100
				);
		});

	const fizz = document.querySelector('.fizzbuzz');
	fizz.addEventListener('click', fizzbuzz);
	const fib = document.querySelector('.fibonacci');
	fib.addEventListener('click', fibonacci);
	const output = document.querySelector('.outputFizzBuzz');

	//wait before displaying the buttons
	setTimeout(() => {
		fizz.classList.remove('hidden');
		fib.classList.remove('hidden');
	}, 2500);

	function fizzbuzz() {
		//don't spam with fizzbuzz
		const used = false;
		if (used != true) {
			//array of 100 elements
			fizzArray = [...Array(100).keys()].map(
				(n) =>
					({
						1: n,
						6: 'Fizz',
						10: 'Buzz',
						0: 'FizzBuzz',
					}[Math.pow(n, 4) % 15])
			);
			console.log(fizzArray);
			output.innerHTML = fizzArray.join('<br>');
		}
		used == true;
	}

	function fibonacci() {
		var a = 1,
			b = 0,
			temp,
			num = 10;

		while (num >= 0) {
			temp = a;
			a = a + b;
			b = temp;
			console.log(b);
			num--;
		}

		draw();
	}
	const canvas = document.querySelector('#placeForFibo');
	const ctx = canvas.getContext('2d');
	function draw() {
		ctx.fillStyle = 'red';
		ctx.fillRect(130, 390, 10, 10);

		ctx.fillStyle = 'blue';
		ctx.fillRect(140, 390, 10, 10);

		ctx.fillStyle = 'purple';
		ctx.fillRect(130, 400, 20, 20);

		ctx.fillStyle = 'green';
		ctx.fillRect(100, 390, 30, 30);

		ctx.fillStyle = 'yellow';
		ctx.fillRect(100, 340, 50, 50);

		ctx.fillStyle = 'pink';
		ctx.fillRect(150, 340, 80, 80);

		ctx.fillStyle = 'white';
		ctx.fillRect(100, 420, 130, 130);

		ctx.fillStyle = 'cyan';
		ctx.fillRect(230, 340, 210, 210);

		ctx.fillStyle = 'magenta';
		ctx.fillRect(100, 0, 340, 340);
	}
});
