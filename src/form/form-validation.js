/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */

import getData from '../data/get-data';

export default function validateForm() {
    const form = document.getElementById('form');
    const formBtn = document.getElementById('form-btn');
    const input = document.getElementById('location-input');
    const inputError = document.getElementById('location-input-error');
    const cities = [
        'Kabul', 'Mariehamn', 'Tirana', 'Algiers', 'Pago Pago', 'Andorra la Vella', 'Luanda', 'The Valley', 'Antarctica', "St. John's", 'Buenos Aires', 'Yerevan', 'Oranjestad', 'Canberra', 'Vienna', 'Baku', 'Nassau', 'Manama', 'Dhaka', 'Bridgetown', 'Minsk', 'Brussels', 'Belmopan', 'Porto-Novo', 'Hamilton', 'Thimphu', 'Sucre', 'Kralendijk', 'Sarajevo', 'Gaborone', '', 'Brasilia', 'Diego Garcia', 'Bandar Seri Begawan', 'Sofia', 'Ouagadougou', 'Bujumbura', 'Phnom Penh', 'Yaounde', 'Ottawa', 'Praia', 'George Town', 'Bangui', "N'Djamena", 'Santiago', 'Beijing', 'Flying Fish Cove', 'West Island', 'Bogota', 'Moroni', 'Brazzaville', 'Kinshasa', 'Avarua', 'San Jose', 'Yamoussoukro', 'Zagreb', 'Havana', 'Willemstad', 'Nicosia', 'Prague', 'Copenhagen', 'Djibouti', 'Roseau', 'Santo Domingo', 'Quito', 'Cairo', 'San Salvador', 'Malabo', 'Asmara', 'Tallinn', 'Addis Ababa', 'Stanley', 'Torshavn', 'Suva', 'Helsinki', 'Paris', 'Cayenne', 'Papeete', 'Port-aux-Francais', 'Libreville', 'Banjul', 'Tbilisi', 'Berlin', 'Accra', 'Gibraltar', 'Athens', 'Nuuk', "St. George's", 'Basse-Terre', 'Hagatna', 'Guatemala City', 'St Peter Port', 'Conakry', 'Bissau', 'Georgetown', 'Port-au-Prince', '', 'Vatican City', 'Tegucigalpa', 'Hong Kong', 'Budapest', 'Reykjavik', 'New Delhi', 'Jakarta', 'Tehran', 'Baghdad', 'Dublin', 'Douglas, Isle of Man', 'Jerusalem', 'Rome', 'Kingston', 'Tokyo', 'Saint Helier', 'Amman', 'Astana', 'Nairobi', 'Tarawa', 'Pyongyang', 'Seoul', 'Pristina', 'Kuwait City', 'Bishkek', 'Vientiane', 'Riga', 'Beirut', 'Maseru', 'Monrovia', 'Tripolis', 'Vaduz', 'Vilnius', 'Luxembourg', 'Macao', 'Skopje', 'Antananarivo', 'Lilongwe', 'Kuala Lumpur', 'Male', 'Bamako', 'Valletta', 'Majuro', 'Fort-de-France', 'Nouakchott', 'Port Louis', 'Mamoudzou', 'Mexico City', 'Palikir', 'Chisinau', 'Monaco', 'Ulan Bator', 'Podgorica', 'Plymouth', 'Rabat', 'Maputo', 'Nay Pyi Taw', 'Windhoek', 'Yaren', 'Kathmandu', 'Amsterdam', 'Willemstad', 'Noumea', 'Wellington', 'Managua', 'Niamey', 'Abuja', 'Alofi', 'Kingston', 'Saipan', 'Oslo', 'Muscat', 'Islamabad', 'Melekeok', 'East Jerusalem', 'Panama City', 'Port Moresby', 'Asuncion', 'Lima', 'Manila', 'Adamstown', 'Warsaw', 'Lisbon', 'San Juan', 'Doha', 'Saint-Denis', 'Bucharest', 'Moscow', 'Kigali', 'Gustavia', 'Jamestown', 'Basseterre', 'Castries', 'Marigot', 'Saint-Pierre', 'Kingstown', 'Apia', 'San Marino', 'Sao Tome', 'Riyadh', 'Dakar', 'Belgrade', 'Belgrade', 'Victoria', 'Freetown', 'Singapur', 'Philipsburg', 'Bratislava', 'Ljubljana', 'Honiara', 'Mogadishu', 'Pretoria', 'Grytviken', 'Juba', 'Madrid', 'Colombo', 'Khartoum', 'Paramaribo', 'Longyearbyen', 'Mbabane', 'Stockholm', 'Berne', 'Damascus', 'Taipei', 'Dushanbe', 'Dodoma', 'Bangkok', 'Dili', 'Lome', '', "Nuku'alofa", 'Port of Spain', 'Tunis', 'Ankara', 'Ashgabat', 'Cockburn Town', 'Funafuti', 'Kampala', 'Kiev', 'Abu Dhabi', 'London', 'Washington', '', 'Montevideo', 'Tashkent', 'Port Vila', 'Caracas', 'Hanoi', 'Road Town', 'Charlotte Amalie', 'Mata Utu', 'El-Aaiun', 'Sanaa', 'Lusaka', 'Harare',
    ];

    input.addEventListener('input', () => {
        for (const city of cities) {
            if (city.toLocaleLowerCase() !== input.value) {
                showError();
            } else if (input.value === city.toLowerCase()) {
                inputError.textContent = '';
                inputError.className = 'error';
                break;
            }
        }
    });

    formBtn.addEventListener('click', (event) => {
        console.log(typeof form);
        for (const city of cities) {
            if (city.toLocaleLowerCase() !== input.value) {
                event.preventDefault();
                showError();
            } else if (input.value === city.toLowerCase()) {
                inputError.textContent = '';
                inputError.className = 'error';
                getData(input.value);
                break;
            }
        }
    });
}

function showError() {
    const inputError = document.getElementById('location-input-error');
    inputError.textContent = 'You need to ener a valid capital ciy';
    inputError.className = 'error active';
}
