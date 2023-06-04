/* eslint-disable indent */
// weather api key = c9b11d828e584e6d948132325233005

import processAllLocationData from './process-location&time-data';
import processAllTemparatureData from './process-temperature-data';

export default async function getData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9b11d828e584e6d948132325233005&q=${location}`, { mode: 'cors' });
    const weatherData = await response.json();
    processAllLocationData(weatherData);
    processAllTemparatureData(weatherData);
}
