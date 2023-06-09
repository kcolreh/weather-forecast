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
    const newCardCountry = createParagraph('paragraph-country', 'paragraph-country');
    const newCardTime = createParagraph('paragraph-time', 'paragraph-time');
    const newCardRegion = createParagraph('paragraph-region', 'paragraph-region');
    const newCardTimeZone = createParagraph('paragraph-timeZone', 'paragraph-timeZone');

    cardContainer.appendChild(newCard);
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardCountry);
    newCard.appendChild(newCardTime);
    newCard.appendChild(newCardRegion);
    newCard.appendChild(newCardTimeZone);
}

export function loadLocationCardData(weatherData) {
    const weatherTitle = document.getElementById('weather-title');
    const weatherCountry = document.getElementById('paragraph-country');
    const weatherTime = document.getElementById('paragraph-time');
    const weatherRegion = document.getElementById('paragraph-region');
    const weatherTimeZone = document.getElementById('paragraph-timeZone');

    weatherTitle.innerHTML = weatherData.city;
    weatherCountry.innerHTML = weatherData.country;
    weatherTime.innerHTML = weatherData.time;
    weatherRegion.innerHTML = weatherData.region;
    weatherTimeZone.innerHTML = weatherData.timeZone;
}
