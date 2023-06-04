/* eslint-disable no-use-before-define */
/* eslint-disable indent */

export default function processAllTemparatureData(location) {
    processTempatureCelcius(location);
    processTempatureFahrenheit(location);
    processFeelslikeCelcius(location);
    processFeelslikeFahrenheit(location);
    processHumitidy(location);
    processWindKilometers(location);
    processWindMiles(location);
    processCondition(location);
}

function processTempatureCelcius(location) {
    console.log(location.current.temp_c);
}

function processTempatureFahrenheit(location) {
    console.log(location.current.temp_f);
}

function processFeelslikeCelcius(location) {
    console.log(location.current.feelslike_c);
}
function processFeelslikeFahrenheit(location) {
    console.log(location.current.feelslike_f);
}

function processHumitidy(location) {
    console.log(location.current.humidity);
}

function processWindKilometers(location) {
    console.log(location.current.wind_kph);
}

function processWindMiles(location) {
    console.log(location.current.wind_mph);
}

function processCondition(location) {
    console.log(location.current.condition.text);
}
