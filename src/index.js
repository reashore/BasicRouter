
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import BasicRouter from './Components/BasicRouter';

const reactContainer = document.getElementById('reactContainer');
ReactDOM.render(<BasicRouter />, reactContainer);

registerServiceWorker();
