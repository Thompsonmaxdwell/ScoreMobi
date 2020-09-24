const nextButtons = document.querySelectorAll('.carousel_button-right');
const prevButtons = document.querySelectorAll('.carousel_button-left');

import {moveSlideToRight, moveSlideToLeft } from './slide/slide';
import navFun  from './header/navbar';
import tab from './tabs/tabs';


/*****************************************************************************/

nextButtons.forEach(nextButton => nextButton.addEventListener('click', moveSlideToRight))
prevButtons.forEach(prevButton => prevButton.addEventListener('click', moveSlideToLeft))
// setInterval(moveSlideToRight, 5000);
/*****************************************************************************/

// tabs of the league page section
navFun()
tab()













