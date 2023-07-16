const btnTheme = document.querySelector('.fa-lightbulb');

const addThemeClass = (bodyClass, btnClass) => {
	document.body.classList.add(bodyClass);
	btnTheme.classList.add(btnClass);
};

const isDark = () => document.body.classList.contains('body-dark');

const setTheme = (bodyClass, btnClass) => {
	document.body.classList.remove(localStorage.getItem('class-body-theme'));
	btnTheme.classList.remove(localStorage.getItem('class-btn-theme'));
	addThemeClass(bodyClass, btnClass);
	localStorage.setItem('class-body-theme', bodyClass);
	localStorage.setItem('class-btn-theme', btnClass);
};

const toggleTheme = () =>
	isDark()
		? setTheme('body-light', 'fa-lightbulb')
		: setTheme('body-dark', 'fa-sun');

export { toggleTheme, addThemeClass };
