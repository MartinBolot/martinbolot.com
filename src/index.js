import jsonData from '../data/data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const englishLanguage = (window.location.href.indexOf('en') !== -1);
ReactDOM.render(<App data={ englishLanguage ? jsonData.en : jsonData.fr} language={ englishLanguage ? 'en' : 'fr'}/>, document.getElementById('root'));
