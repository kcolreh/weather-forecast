/* eslint-disable indent */
// weather api key = c9b11d828e584e6d948132325233005

import processAllLocationData from './process-location&time-data';
import processAllTemparatureData from './process-temperature-data';

export async function getData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9b11d828e584e6d948132325233005&q=${location}`, { mode: 'cors' });
        const weatherData = await response.json();
        processAllLocationData(weatherData);
        processAllTemparatureData(weatherData);
    } catch (error) {
        console.log(error);
        alert('enter a valid country');
    }
}

export async function getForecast(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c9b11d828e584e6d948132325233005&q=${location}`, { mode: 'cors' });
        const weatherData = await response.json();
        processAllLocationData(weatherData);
        processAllTemparatureData(weatherData);
        console.log(weatherData);
    } catch (error) {
        console.log(error);
        alert('enter a valid country');
    }
}
