/* eslint-disable indent */

function createForm(type, inputId, buttonId) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    input.type = type;
    input.id = inputId;
    button.innerText = 'x';
    button.id = buttonId;

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    return form;
}

export default function appendForm() {
    const formContainer = document.getElementById('container');
    formContainer.appendChild(createForm('text', 'location-input', 'form-btn'));
}
