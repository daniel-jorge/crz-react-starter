import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Providers from './Providers';
import * as serviceWorker from './serviceWorker';

console.info('App name:', process.env.REACT_APP_WEBSITE_NAME);
console.info('App version:', process.env.REACT_APP_VERSION);

ReactDOM.render(<Providers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
