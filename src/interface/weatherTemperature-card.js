/* eslint-disable indent */

import { createDiv, createTitle, createParagraph } from './create-dom-elements';

export function createrTemperatureCard() {
    const cardContainer = document.getElementById('card-container');
    const newCard = createDiv('weatherTemperature-card', 'weatherTemperature-card');
    const newCardCondition = createTitle('weather-condition', 'weather-card-condition', 2);
    const newCardFeelsLikeC = createParagraph('paragraph-feelsLikeC', 'paragraph-feelsLikeC');
    const newCardHumitidy = createParagraph('paragraph-humitidy', 'paragraph-humitidy');
    const newCardTemperatureC = createParagraph('paragraph-temperatureC', 'paragraph-temperatureC');
    const newCardWindK = createParagraph('paragraph-windK', 'paragraph-windK');

    cardContainer.appendChild(newCard);
    newCard.appendChild(newCardCondition);
    newCard.appendChild(newCardFeelsLikeC);
    newCard.appendChild(newCardHumitidy);
    newCard.appendChild(newCardTemperatureC);
    newCard.appendChild(newCardWindK);
}

export function loadTemperatureCardData(weatherData) {
    const weatherCondition = document.getElementById('weather-condition');
    const weatherFeelsLikeC = document.getElementById('paragraph-feelsLikeC');
    const weatherHumitidy = document.getElementById('paragraph-humitidy');
    const weatherTemperatureC = document.getElementById('paragraph-temperatureC');
    const weatherWindK = document.getElementById('paragraph-windK');

    weatherCondition.innerHTML = `${weatherData.condition}`;
    weatherFeelsLikeC.innerHTML = `Feels like ${weatherData.feelslikeCelcius}c`;
    weatherHumitidy.innerHTML = `Humitidy ${weatherData.humitidy}`;
    weatherTemperatureC.innerHTML = `${weatherData.tempatureCelcius}c`;
    weatherWindK.innerHTML = `Wind ${weatherData.windKilometers}km`;
}
