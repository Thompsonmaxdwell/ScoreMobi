const tracks = document.querySelectorAll('.carousel_track');
const slides = Array.from(tracks);
const dotsNavs = document.querySelectorAll('.carousel_nav');
const slideWidth = slides[0].children[0].getBoundingClientRect().width;


// arrange slide next  each other 
tracks.forEach(track => {
    const slides = Array.from(track.children);
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';

    })

})

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');

}
// My Dot indicator function
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}



// // When i click left, move slide to the left
export const moveSlideToRight = e => {

    let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    

    
    let dotsNav =  e.target.parentElement.parentElement.parentElement.querySelector('.carousel_nav')
    let currentDot = dotsNav.querySelector('.current_slide');
    let nextDot = currentDot.nextElementSibling;
  

    // Reset Slide to first slide , when it reach last the slide   
    if (!nextSlide) {
        currentSlide.classList.remove('current_slide');
        currentDot.classList.remove('current_slide');
    
        track.children[0].classList.add('current_slide');
        dotsNav.children[0].classList.add('current_slide');
       

        track.style.transition = '5ms ';
        track.style.transform = 'translateX(-' + 0 + ')';
        return
    }
    track.style.transition = 'transform 250ms ease-in';
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
}


// // When i click right, move slide to the right
export const moveSlideToLeft = e => {
    let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    
//   Dot indicating the current slide
    let dotsNav =  e.target.parentElement.parentElement.parentElement.querySelector('.carousel_nav');
    let currentDot = dotsNav.querySelector('.current_slide');
    let nextDot = currentDot.previousElementSibling;
  

    // Reset Slide to first slide , when it reach last the slide   
    if (!prevSlide) {
        currentSlide.classList.remove('current_slide');
        currentDot.classList.remove('current_slide');
    
        track.children[track.children.length -1].classList.add('current_slide');
        dotsNav.children[dotsNav.children.length -1].classList.add('current_slide');
    
       
        track.style.transition = '5ms ';
        track.style.transform = 'translateX(-' + track.children[track.children.length -1].style.left + ')';
        return
    }

    
    track.style.transition = 'transform 250ms ease-in';
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, nextDot);

    
   
}


// // When i click slide nav indicator, move to that slide 
dotsNavs.forEach(dotsNav => {

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');
        let dots = Array.from(e.target.parentElement.children);
        let slides = Array.from(track.children);

        if (!targetDot) return;

        const currentSlide = track.querySelector('.current_slide');
        const currentDot = dotsNav.querySelector('.current_slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        
        // /****************************************************************************/
        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);

    })
})