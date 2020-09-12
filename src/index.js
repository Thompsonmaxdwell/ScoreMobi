const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');

import {moveSlideToRight, moveSlideToLeft } from './slide/slide';
import navFun  from './header/navbar';
import tab from './tabs/tabs';



/*****************************************************************************/
nextButton.addEventListener('click', moveSlideToRight);
prevButton.addEventListener('click', moveSlideToLeft);
setInterval(moveSlideToRight, 5000);
/*****************************************************************************/

// tabs of the league page section
navFun()
tab()














