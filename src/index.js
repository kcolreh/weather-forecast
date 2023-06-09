import './style.css';
import getData from './data/get-data';
import appendForm from './form/create-form';
import sendUserInput from './form/request-data';
import { createCardContainer } from './interface/weatherLocation-card';

createCardContainer();
getData('new york');
appendForm();
sendUserInput();
