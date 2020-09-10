let slide_container = document.querySelector('.slide_container');
let slides = slide_container.children;
let slide_width = slides[0].getBoundingClientRect().width;
let next_slide = document.querySelector('.next_slide');
let prev_slide = document.querySelector('.prev_slide');
let indicators = document.querySelector('.indicator_wrapper');
let indicator = document.querySelectorAll('.indicator');
let slide_counter = 1;
import  {leftSlideIndicator, rightSlideIndicator} from './slideIndicator';

slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';

// Next Slide
const nextSlideEventFun = () => {
	if (slide_counter >= slides.length - 1) return;
	slide_container.style.transition = 'transform 100ms ';
	slide_counter++;
	slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	rightSlideIndicator(slide_counter);
};

// Previous Slide
const prevSlideEventFun = () => {
	if (slide_counter <= 0) return;
	slide_container.style.transition = 'transform 100ms ease-in-out';
	slide_counter--;
	slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	leftSlideIndicator(slide_counter);
};



//     remove   transition when it reaches lastElemnt and FirstElement
const slide_container_Event = (e) => {
	if (slides[slide_counter].id === 'last_slide') {
		slide_container.style.transition = 'none';
		slide_counter = slides.length - 2;

		slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	}

	if (slides[slide_counter].id === 'first_slide') {
		slide_container.style.transition = 'none';
		slide_counter = slides.length - slide_counter;

		slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
	}
};

const dostSlide = (e) => {
	let button = e.target.closest('button');
	if (!button) return;

	let current = indicators.querySelector('.current');
	current.classList.remove('current');
	e.target.classList.add('current');

	slide_counter = Array.from(indicator).indexOf(e.target) + 1;
	slide_container.style.transition = 'transform 100ms ease-in-out';
	slide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';
};

const imgSliding = () => {
	// //   Next  Slide Event tigger
	next_slide.addEventListener('click', nextSlideEventFun);

	//   previous Slide Event tigger
	prev_slide.addEventListener('click', prevSlideEventFun);

	//    remove   transition when it reaches lastElemnt and FirstElement
	slide_container.addEventListener('transitionend', slide_container_Event);
	// Auto slid
	setInterval(prevSlideEventFun, 5000);
	// click  indicator to move the  slide
	indicators.addEventListener('click', dostSlide);
};
export default imgSliding;
