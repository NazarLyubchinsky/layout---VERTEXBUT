// BURGER MENU

const BURGER_MENU = document.querySelector('.burger_menu');
const MOBILE_MENU = document.querySelector('.mobile__menu');
const HEADER = document.querySelector('header');
const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

const switchMobileMenu = () => {
	BURGER_MENU.classList.toggle('active');
	MOBILE_MENU.classList.toggle('active');
	HEADER.classList.toggle('active');
};

BURGER_MENU.addEventListener('click', () => {
	switchMobileMenu();
})

MOBILE_MENU_LINKS.forEach((link) => {
	link.addEventListener('click', () => {
		switchMobileMenu();
	})
})

// 
// FORM CALLBACK
// 

const FORM = document.querySelector('.form__callback');
const NAME = document.getElementById('name');
const PHONE = document.getElementById('phone');
const CHECK = document.getElementById('check');
const SEND_BTN = document.getElementById("send");

// FORM NAME
NAME.addEventListener('blur', () => {
	let nameValue = NAME.value;

	let nameRegex = /^[a-zA-Z]+|[Є-ЯҐІЇЁа-їґ]+$/u;
	let isValidName = nameValue.match(nameRegex);

	let firstCharUpper = nameValue.charAt(0) === nameValue.charAt(0).toUpperCase();
	let otherCharsLower = nameValue.slice(1).toLowerCase() === nameValue.slice(1);

	if (isValidName && firstCharUpper && otherCharsLower) {
	} else {
		alert('Ім’я має містити тільки літери та бути написане з великої першої літери, а всі інші - з маленької');
		NAME.value = '';
	}
});
// FORM NUMBER
PHONE.addEventListener('blur', () => {
	let phoneValue = PHONE.value.trim();
	let phoneRegex = /^(\+38)?\d{10}$/;
	let isValidPhone = phoneValue.match(phoneRegex);
	if (isValidPhone) {
	} else {
		alert('Номер телефонускладається з 10 або 12 символів (з префіксом +38)');
		PHONE.value = '';
	}
});

// FORM CHECK
SEND_BTN.addEventListener("click", function (event) {
	if (!CHECK.checked) {
		event.preventDefault();
		alert("Будь ласка, погодьтесь з політикою конфіденційності");
	}
});

// LOCAL_STORAGE
if (localStorage.getItem('name')) {
	NAME.value = localStorage.getItem('name');
}

if (localStorage.getItem('phone')) {
	PHONE.value = localStorage.getItem('phone');
}

if (localStorage.getItem('check')) {
	CHECK.checked = localStorage.getItem('check');
}

FORM.addEventListener('submit', (e) => {
	e.preventDefault();

	localStorage.setItem('name', NAME.value);
	localStorage.setItem('phone', PHONE.value);
	localStorage.setItem('check', CHECK.checked);

	FORM.submit();
});



