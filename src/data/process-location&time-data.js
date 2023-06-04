/* eslint-disable no-use-before-define */
/* eslint-disable indent */

export default function processAllLocationData(location) {
    processCity(location);
    processCounry(location);
    processLocalTime(location);
    processRegion(location);
    processTimeZone(location);
}

function processCity(location) {
    console.log(location.location.name);
}

function processCounry(location) {
    console.log(location.location.country);
}

function processLocalTime(location) {
    console.log(location.location.localtime);
}

function processRegion(location) {
    console.log(location.location.region);
}

function processTimeZone(location) {
    console.log(location.location.tz_id);
}
