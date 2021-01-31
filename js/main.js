let toggle = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');

toggle.addEventListener('click', function () {
	collapse.forEach((collapse) => collapse.classList.toggle('collapse-toggle'));
});
