import './css/style.css';
import './js/app.matchers';
import './js/app.mocking';

// TODO: write your code in app.js

import indicateHealth from './js/app';

const object = { name: 'Маг', health: 60 };
console.log(indicateHealth(object));
