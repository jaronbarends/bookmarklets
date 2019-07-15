//
// ==UserScript==
// @name          Toggle Passwords
// @namespace     http://jaron.nl/
// @description   Places a link "• T" at the right side of every password field. Clicking this link toggles the display of all passwords between •••• and text.(submitting a form will allways revert the fields to type=password, to make sure no auto-competion information is stored for these fields by your browser.)
// @version 1.0.2
// @include       *
// @exclude       
// ==/UserScript==
(() => {
	const css = `
		.tggl-pw {
			--icon-width: 18px;
			--icon-height: calc(2 * var(--icon-width) / 3);
			--pd-h: 5px;
			--pd-v: 5px;

			position: relative;
			display: inline-block;
			border-radius: 5px;
			margin-left: 10px;
			padding: var(--pd-v) var(--pd-h);
			width: var(--icon-width);
			height: var(--icon-height);
			background: white;
			vertical-align: middle;
			background: rgba(255, 255, 255, 0.5);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
			box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		}

		.tggl-pw::before {
			content: '';
			display: block;
			position: absolute;
			border: 8px solid transparent;
			border-right-color: white;
			top: 50%;
			transform: translateY(-50%);
			right: 100%;
		}

		.tggl-pw__btn {
			--hide-icon: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><path d="M45 15c-2.8 0-5.3.8-7.6 2.1 1.3 1.1 2.1 2.7 2.1 4.5 0 3.2-2.6 5.8-5.8 5.8-1.2 0-2.4-.4-3.3-1-.2 1.1-.4 2.3-.4 3.6 0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15z"/><g stroke="black" stroke-width="7" stroke-miterlimit="10"><path fill="none" stroke-linecap="round" d="M5 55L85 5"/><path d="M85 30S67.1 55 45 55 5 30 5 30 22.9 5 45 5s40 25 40 25z" fill="none"/></g></svg>');

			--show-icon: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><style></style><g id="Layer_4"><path d="M85 30S67.1 55 45 55 5 30 5 30 22.9 5 45 5s40 25 40 25z" fill="none" stroke="black" stroke-width="7" stroke-miterlimit="10"/><path d="M45 15c-2.8 0-5.3.8-7.6 2.1 1.3 1.1 2.1 2.7 2.1 4.5 0 3.2-2.6 5.8-5.8 5.8-1.2 0-2.4-.4-3.3-1-.2 1.1-.4 2.3-.4 3.6 0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15z"/></g></svg>');

			position: absolute;
			border: none;
			top: 50%;
			left: 0;
			width: 100%;
			height: 100%;
			transform: translateY(-50%);
			cursor: pointer;
			background: var(--show-icon) center center no-repeat;
			background-size: var(--icon-width) var(--icon-height);
			opacity: 0.5;
		}

		.tggl-pw__btn:focus {
			outline: none;
		}

		.tggl-pw__btn--hide {
			background-image: var(--hide-icon);
		}
	`;

	let pwFields = [];
	let allToggleBtns = [];

	/**
	* add a toggle to a password field
	* @returns {undefined}
	*/
	const addToggle = function(pwField) {
		const span = document.createElement('span');
		const btn = document.createElement('button');
		span.classList.add('tggl-pw');
		btn.classList.add('tggl-pw__btn');
		btn.type = "button";
		btn.title = "toggle all password fields";
		span.appendChild(btn);
		btn.addEventListener('click', toggleAllFields);
		pwField.after(span);
		allToggleBtns.push(btn);
	};

	/**
	* toggle all password fields
	* @returns {undefined}
	*/
	const toggleAllFields = function(e) {
		let newType;
		pwFields.forEach((pwField) => {
			if (!newType) {
				newType = (pwField.type === 'password') ? 'text' : 'password';
			}
			pwField.type = newType;

			allToggleBtns.forEach((btn) => {
				if (pwField.type === 'password') {
					btn.classList.remove('tggl-pw__btn--hide');
				} else {
					btn.classList.add('tggl-pw__btn--hide');
				}
			});
		});
	};
	
	

	/**
	* reset all password fields to type password
	* @returns {undefined}
	*/
	const resetAllPwFields = function(e) {
		pwFields.forEach(pwField => pwField.type = 'password')
	};
	

	/**
	* initialize
	* @returns {undefined}
	*/
	const init = function() {
		pwFields = document.querySelectorAll(`input[type="password"]`) ;
		pwFields.forEach((pwField) => {
			addToggle(pwField);
			const currForm = pwField.closest('form');
			if (currForm) {
				currForm.addEventListener('submit', resetAllPwFields);
			}
		});
		const styles = document.createElement('style');
		styles.innerHTML = css;
		document.querySelector('head').appendChild(styles);
	};
	

	init();
})();