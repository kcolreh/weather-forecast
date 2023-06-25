/* eslint-disable indent */
import { createDiv } from '../interface/create-dom-elements';

function createForm(type, inputId, buttonId) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const inputError = document.createElement('span');

    form.noValidate = true;
    form.id = 'form';
    form.classList.add('form');
    input.type = type;
    input.id = inputId;
    input.name = 'location-input';
    input.placeholder = 'Enter a capital city';
    input.required = true;
    input.classList.add('input');
    button.innerText = 'x';
    button.id = buttonId;
    button.type = 'submit';
    button.classList.add('input-btn');
    inputError.id = 'location-input-error';

    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(inputError);
    return form;
}

function createFormContainer() {
    const conainer = document.getElementById('card-container');
    const formContainer = createDiv('form-container', 'form-container');

    conainer.appendChild(formContainer);
    return formContainer;
}

export default function appendForm() {
    const formContainer = createFormContainer();
    const weatherImage = document.createElement('img');
    weatherImage.classList.add('weather-image');
    weatherImage.id = 'weather-image';
    formContainer.appendChild(weatherImage);
    formContainer.appendChild(createForm('text', 'location-input', 'form-btn'));
}
