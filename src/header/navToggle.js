let navToggle = (nav, header_right) => {
	if (nav.className == 'nav_close') {
		nav.classList.add('nav_open');
		header_right.classList.add('header_right_open');
	} else {
		nav.classList.remove('nav_open');
		header_right.classList.remove('header_right_open');
	}
};


export default navToggle;
