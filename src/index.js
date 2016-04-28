import jsonData from '../data/data.json';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App data={jsonData.fr} />, document.getElementById('root'));
