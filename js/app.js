console.log('Up and running.');


class Tomagotchi {
	constructor(name, hunger, sleepiness, boredom, age) {
	this.name = name;
	this.hunger = hunger;
	this.sleepiness = sleepiness;
	this.boredom = boredom;
	this.age = age;
	}
}

$('.rip').hide();
$('.gameButtons button').hide();
$('.bonusButton').hide();
$('.timeStats').hide();
$('ul').hide();

let usersTomagotchi = new Tomagotchi('', 0, 0, 0, 0)
let tomImage1 = '<img src="https://media.giphy.com/media/622pIQ8HC8f4m4P1ki/giphy.gif">'
let tomImage2 = '<img src="https://i.imgur.com/wqOkiNU.gif">'


$('form').on('submit', (e) => {
	e.preventDefault();
	$('.welcome').hide();
	$('.gameButtons button').show();

	$('.timeStats').show();
	$('ul').show();
	const valueOfInput = $('.petName').val();
	usersTomagotchi.name = valueOfInput;

		$('.tomagotchi').append(tomImage1);

	$('.name').text(`Name: ${valueOfInput}`);
	$('.petName').val('');
	$('.hunger').text("Hunger: 0");
	$('.sleepiness').text("Sleepiness: 0");
	$('.boredom').text("Boredom: 0");
	$('.age').text("Age: 0");
	timePassing = setInterval(ageTimer, 100);
	ageTimer();
	tomMoves();
	console.log(valueOfInput);
});

$('.feed').on('click', (e) => {
	usersTomagotchi.hunger--;
	$('.hunger').text(`Hunger: ${usersTomagotchi.hunger}`);
});

$('.sleep').on('click', (e) => {
	usersTomagotchi.sleepiness = 0;
	$('.sleepiness').text(`Sleepiness: ${usersTomagotchi.sleepiness}`);
});

$('.play').on('click', (e) => {
	usersTomagotchi.boredom--;
	$('.boredom').text(`Boredom: ${usersTomagotchi.boredom}`);
});

$('.exercise').on('click', (e) => {
	usersTomagotchi.boredom = 0;
	$('.boredom').text(`Boredom: ${usersTomagotchi.boredom}`);
});


let timePassing;
let seconds = 0;
let minutes = 0;

const ageTimer = () => {
$('.age').text(`Age: ${minutes}`);

	seconds++;
	$('.seconds').text(`Seconds: ${seconds}`);
	if (seconds % 60 === 0) {
		minutes++;
		$('.minutes').text(`Minutes: ${minutes}`);
	}
	if (seconds % 10 === 0) {
		hungerGoesUp();
	}
	if (seconds % 20 === 0) {
		sleepinessGoesUp();
	}
	if (seconds % 30 === 0) {
		boredomGoesUp();
	}


	if (seconds % 180 === 0 && seconds > 130 && seconds < 210) {
		// console.log('age 3 firing');
		alert("Your pet has morphed into Keanu! Excellent!");
		$('.tomagotchi img').attr('src', 'https://i.imgur.com/wqOkiNU.gif');
	}
	if (seconds % 300 === 0 && seconds > 200 && seconds < 310) {
		// console.log('age 3 firing');
		alert("Your pet has morphed again! It's Carlton time.");
		$('.tomagotchi img').attr('src', 'http://66.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mudgvo7TvD1qf5do9o1_250.gif');
		$('.bonusButton').show();
		$('.gameButtons').append($('.bonusButton'));
	}	
	if (seconds % 420 === 0 && seconds > 400 && seconds < 430) {
		// console.log('age 3 firing');
		alert("Your pet has reached it's final form: Huge Colorful Pants Man");
		$('.tomagotchi img').attr('src', 'https://media2.giphy.com/media/jVqk5ktcuxBuOW1jJx/giphy.gif');
	}

	if (usersTomagotchi.hunger >= 10 || usersTomagotchi.boredom >= 10 || usersTomagotchi.sleepiness >= 10) {
		console.log('confirm works');
		clearInterval(timePassing);
		alert('Your Tomagotchi has died! What an awful parent you are.');
			let value = prompt('Play again? y/n')
			if (value === 'y') {
				console.log('y');
			location.reload(true);
			} else {
				// $('.tomagotchi img').attr('src', 'https://t1.rbxcdn.com/7bd76f30bb1e6cbc5df2d6ac8d5f941e');
				$('.gameButtons button').hide();
				$('ul').hide();
				$('.tomagotchi').hide();
				$('.rip').show();
			}
		}

}

const hungerGoesUp = () => {
	usersTomagotchi.hunger++;
	$('.hunger').text(`Hunger: ${usersTomagotchi.hunger}`);
}

const sleepinessGoesUp = () => {
	usersTomagotchi.sleepiness++;
	$('.sleepiness').text(`Sleepiness: ${usersTomagotchi.sleepiness}`);
}

const boredomGoesUp = () => {
	console.log('boredom working');
	usersTomagotchi.boredom++;
	$('.boredom').text(`Boredom: ${usersTomagotchi.boredom}`);
}

const tomMoves = () => {
	for (let i = 0; i < 100000; i++) {
	$('.tomagotchi').animate({left: '100px'}, 5000).animate({ left: '-500px' }, 5000).animate({left: '0'}, 5000)
  	};
  }

















