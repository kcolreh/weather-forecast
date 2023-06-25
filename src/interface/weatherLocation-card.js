/* eslint-disable indent */

import { createDiv, createTitle, createParagraph } from './create-dom-elements';
import { createrTemperatureCard } from './weatherTemperature-card';

export function createCardContainer() {
    const mainContainer = document.getElementById('container');
    const cardContainer = createDiv('card-container', 'card-container');
    mainContainer.appendChild(cardContainer);
    // eslint-disable-next-line no-use-before-define
    createrLocationCard();
    createrTemperatureCard();
}

function createrLocationCard() {
    const cardContainer = document.getElementById('card-container');
    const newCard = createDiv('weatherLocation-card', 'weatherLocation-card');
    const newCardTitle = createTitle('weather-title', 'weather-card-title', 2);
    const newCardTime = createParagraph('paragraph-time', 'paragraph-time');
    const newCardTemperatureC = createParagraph('paragraph-temperatureC', 'paragraph-temperatureC');

    // const newCardCountry = createParagraph('paragraph-country', 'paragraph-country');
    // const newCardRegion = createParagraph('paragraph-region', 'paragraph-region');
    // const newCardTimeZone = createParagraph('paragraph-timeZone', 'paragraph-timeZone');

    cardContainer.appendChild(newCard);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardTime);
    newCard.appendChild(newCardTemperatureC);

    // newCard.appendChild(newCardCountry);
    // newCard.appendChild(newCardRegion);
    // newCard.appendChild(newCardTimeZone);
}

export function loadLocationCardData(weatherData) {
    const weatherTitle = document.getElementById('weather-title');
    const weatherTime = document.getElementById('paragraph-time');
    const weatherTemperatureC = document.getElementById('paragraph-temperatureC');

    // const weatherCountry = document.getElementById('paragraph-country');
    // const weatherRegion = document.getElementById('paragraph-region');
    // const weatherTimeZone = document.getElementById('paragraph-timeZone');

    weatherTitle.innerHTML = weatherData.city;
    weatherTemperatureC.innerHTML = `${weatherData.tempatureCelcius}c`;
    weatherTime.innerHTML = weatherData.time;

    // weatherCountry.innerHTML = weatherData.country;
    // weatherRegion.innerHTML = weatherData.region;
    // weatherTimeZone.innerHTML = weatherData.timeZone;
}
