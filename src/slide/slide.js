
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;



// setSlidePosition
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}



// When i click left, move slide to the left
export const moveSlideToRight = e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;


    // Reset Slide to first slide , when it reach last slide   
    if (!nextSlide) {
        currentSlide.classList.remove('current_slide');
        currentDot.classList.remove('current_slide');

        slides[0].classList.add('current_slide');
        dots[0].classList.add('current_slide');

        track.style.transition = '5ms ';
        track.style.transform = 'translateX(-' + 0 + ')';
        return
    }
    track.style.transition = 'transform 250ms ease-in';
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
}


// When i click right, move slide to the right
export const moveSlideToLeft = e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.previousElementSibling;

    // Reset Slide to last slide , when it reach first slide   
    if (!prevSlide) {
        currentSlide.classList.remove('current_slide');
        dots[dots.length - 1].classList.add('current_slide');

        currentDot.classList.remove('current_slide');
        slides[slides.length - 1].classList.add('current_slide');

        track.style.transition = 'none ';
        track.style.transform = 'translateX(-' + slides[slides.length - 1].style.left + ')';

        return
    }

    track.style.transition = 'transform 250ms ease-in';
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, nextDot);
}


// When i click slide nav indicator, move to that slide 
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button')

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotsNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    /*****************************************************************************/
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

})



	//    remove   transition when it reaches lastElemnt and FirstElement
	slide_container.addEventListener('transitionend', slide_container_Event);
	// Auto slid
	setInterval(prevSlideEventFun, 5000);
	// click  indicator to move the  slide
	indicators.addEventListener('click', dostSlide);
};
export default imgSliding;
