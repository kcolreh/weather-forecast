/* eslint-disable indent */

import validateForm from './form-validation';

export default function sendUserInput() {
    const requestBtn = document.getElementById('form-btn');

    requestBtn.addEventListener('click', (event) => {
        event.preventDefault();
        validateForm();
    });
}
