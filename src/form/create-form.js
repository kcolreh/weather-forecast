/* eslint-disable indent */

function createForm(type, inputId, buttonId) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const inputError = document.createElement('span');

    form.noValidate = true;
    form.id = 'form';
    input.type = type;
    input.id = inputId;
    input.name = 'location-input';
    input.placeholder = 'Enter a capital city';
    input.required = true;
    button.innerText = 'x';
    button.id = buttonId;
    button.type = 'submit';
    inputError.id = 'location-input-error';

    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(inputError);
    return form;
}

export default function appendForm() {
    const formContainer = document.getElementById('container');
    formContainer.appendChild(createForm('text', 'location-input', 'form-btn'));
}
