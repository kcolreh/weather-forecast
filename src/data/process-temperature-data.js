/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import { loadTemperatureCardData } from '../interface/weatherTemperature-card';

export default function processAllTemparatureData(location) {
    const temperatureObj = {
        tempatureCelcius: processTempatureCelcius(location),
        tempatureFahrenheit: processTempatureFahrenheit(location),
        feelslikeCelcius: processFeelslikeCelcius(location),
        feelslikeFahrenheit: processFeelslikeFahrenheit(location),
        humitidy: processHumitidy(location),
        windKilometers: processWindKilometers(location),
        windMiles: processWindMiles(location),
        condition: processCondition(location),
    };
    loadTemperatureCardData(temperatureObj);
    console.log(temperatureObj);
}

function processTempatureCelcius(location) {
    return location.current.temp_c;
}

function processTempatureFahrenheit(location) {
    return location.current.temp_f;
}

function processFeelslikeCelcius(location) {
    return location.current.feelslike_c;
}
function processFeelslikeFahrenheit(location) {
    return location.current.feelslike_f;
}

function processHumitidy(location) {
    return location.current.humidity;
}

function processWindKilometers(location) {
    return location.current.wind_kph;
}

function processWindMiles(location) {
    return location.current.wind_mph;
}

function processCondition(location) {
    return location.current.condition.text;
}
