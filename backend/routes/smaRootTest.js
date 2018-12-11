const SmartHomeRoot = require('./smaRoot');
const SmartHomeHome = require('./smaHome')
//import {SmartHomeRoot, SmartHomeHome} from './smaRoot' 

let smah = new SmartHomeRoot('name', "id1", 11)

console.log(smah);

let sma2 = new SmartHomeHome('house');

console.log(sma2);