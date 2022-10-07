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
	}
});
