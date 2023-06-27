import './style.css';
import { getData, getForecast } from './data/get-data';
import appendForm from './form/create-form';
import sendUserInput from './form/request-data';
import { createCardContainer } from './interface/weatherLocation-card';
import validateForm from './form/form-validation';

createCardContainer();
getData('new york');
getForecast('new york');
appendForm();
validateForm();
sendUserInput();
