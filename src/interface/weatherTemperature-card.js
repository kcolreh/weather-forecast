/* eslint-disable indent */

import { createDiv, createParagraph, createTitle } from './create-dom-elements';

export function createrTemperatureCard() {
    const cardContainer = document.getElementById('card-container');
    const newCard = createDiv('weatherTemperature-card', 'weatherTemperature-card');

    const newCardCondition = createTitle('weather-condition', 'weather-card-condition', 2);
    const infoFeelsContainer = createDiv('info-container-1', 'info-container-1');
    const infoHumitidyContainer = createDiv('info-container-2', 'info-container-2');
    const infoWindContainer = createDiv('info-container-3', 'info-container-3');
    const infoRainContainer = createDiv('info-container-4', 'info-container-4');

    newCard.appendChild(newCardCondition);
    newCard.appendChild(infoFeelsContainer);
    newCard.appendChild(infoHumitidyContainer);
    newCard.appendChild(infoWindContainer);
    newCard.appendChild(infoRainContainer);
    cardContainer.appendChild(newCard);

    const newCardFeelsLikeC = createParagraph('paragraph-feelsLikeC', 'paragraph-feelsLikeC');
    const newCardFeelsPara = createParagraph('info-para-1', 'info-para');
    newCardFeelsPara.innerHTML = 'feels like';
    const newCardFeelsImg = document.createElement('img');
    newCardFeelsImg.src = '../src/images/termometer.svg';
    newCardFeelsImg.classList.add('feels-img');
    const newCardHumitidy = createParagraph('paragraph-humitidy', 'paragraph-humitidy');
    const newCardHumitidyPara = createParagraph('info-para-2', 'info-para');
    newCardHumitidyPara.innerHTML = 'humidity';
    const newCardHumitidyImg = document.createElement('img');
    newCardHumitidyImg.src = '../src/images/humidity.svg';
    newCardHumitidyImg.classList.add('humidity-img');
    const newCardWindK = createParagraph('paragraph-windK', 'paragraph-windK');
    const newCardWindPara = createParagraph('info-para-2', 'info-para');
    newCardWindPara.innerHTML = 'wind speed';
    const newCardWindImg = document.createElement('img');
    newCardWindImg.src = '../src/images/wind.svg';
    newCardWindImg.classList.add('wind-img');

    const newCardRain = createParagraph('paragraph-rain', 'paragraph-rain');
    const newCardRainPara = createParagraph('info-para-2', 'info-para');
    newCardRainPara.innerHTML = 'rain chance';
    const newCardRainImg = document.createElement('img');
    newCardRainImg.src = '../src/images/rain.svg';
    newCardRainImg.classList.add('wind-img');

    infoFeelsContainer.appendChild(newCardFeelsImg);
    infoFeelsContainer.appendChild(newCardFeelsPara);
    infoFeelsContainer.appendChild(newCardFeelsLikeC);

    infoHumitidyContainer.appendChild(newCardHumitidyImg);
    infoHumitidyContainer.appendChild(newCardHumitidyPara);
    infoHumitidyContainer.appendChild(newCardHumitidy);

    infoWindContainer.appendChild(newCardWindImg);
    infoWindContainer.appendChild(newCardWindPara);
    infoWindContainer.appendChild(newCardWindK);

    infoRainContainer.appendChild(newCardRainImg);
    infoRainContainer.appendChild(newCardRainPara);
    infoRainContainer.appendChild(newCardRain);
}

export function loadTemperatureCardData(weatherData) {
    const weatherFeelsLikeC = document.getElementById('paragraph-feelsLikeC');
    const weatherHumitidy = document.getElementById('paragraph-humitidy');
    const weatherWindK = document.getElementById('paragraph-windK');
    const weatherCondition = document.getElementById('weather-condition');
    const weatherRain = document.getElementById('paragraph-rain');

    weatherCondition.innerHTML = `${weatherData.condition}`;
    weatherFeelsLikeC.innerHTML = ` ${weatherData.feelslikeCelcius}c`;
    weatherHumitidy.innerHTML = ` ${weatherData.humitidy}%`;
    weatherWindK.innerHTML = ` ${weatherData.windKilometers}km`;
    weatherRain.innerHTML = ` ${weatherData.rainPrecipitationMm}%`;
}
