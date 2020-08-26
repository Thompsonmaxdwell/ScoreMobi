let indicators = document.querySelector('.indicator_wrapper');
let indicator = document.querySelectorAll('.indicator');

export const rightSlideIndicator = (slide_counter) => {
	let current = indicators.querySelector('.current');
	if (indicator.length + 1 === slide_counter) {
		current.classList.remove('current');
		indicator[0].classList.add('current');
		
		return false;
	}else {
		current.classList.remove('current');
		current.nextElementSibling.classList.add('current');
	}

};

export  const leftSlideIndicator = (slide_counter) => {
	let current = indicators.querySelector('.current');
	if (slide_counter === 0) {
		current.classList.remove('current');
		indicator[indicator.length - 1].classList.add('current');
		return false;
	} else {
		current.classList.remove('current');
		current.previousElementSibling.classList.add('current');
	}
};