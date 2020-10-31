
import './styles.css';
import './ga';
import dotenv from 'dotenv';
import '@fortawesome/fontawesome-free/css/all';
import 'animate.css';

import MyApp from './services/MyApp';


window.onload = () => {
  dotenv.config();
  const myApp = new MyApp();
  myApp.startApp();
};
