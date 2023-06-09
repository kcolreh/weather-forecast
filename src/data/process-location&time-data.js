/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import { loadLocationCardData } from '../interface/weatherLocation-card';

export default function processAllLocationData(location) {
    const locationObj = {
        region: processRegion(location),
        country: processCounry(location),
        city: processCity(location),
        timeZone: processTimeZone(location),
        time: processLocalTime(location),
        tempatureCelcius: processTempatureCelcius(location),
        tempatureFahrenheit: processTempatureFahrenheit(location),

    };
    loadLocationCardData(locationObj);
    console.log(locationObj);
}

function processCity(location) {
    return location.location.name;
}

function processCounry(location) {
    return location.location.country;
}

function processLocalTime(location) {
    return location.location.localtime;
}

function processRegion(location) {
    return location.location.region;
}

function processTimeZone(location) {
    return location.location.tz_id;
}

function processTempatureCelcius(location) {
    return location.current.temp_c;
}

function processTempatureFahrenheit(location) {
    return location.current.temp_f;
}
