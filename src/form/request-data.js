/* eslint-disable indent */

import getData from '../data/get-data';

export default function sendUserInput() {
    const requestBtn = document.getElementById('form-btn');
    const userInput = document.getElementById('location-input');

    requestBtn.addEventListener('click', (event) => {
        event.preventDefault();
        getData(userInput.value);
    });
}
