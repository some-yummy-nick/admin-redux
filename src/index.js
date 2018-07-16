import React from 'react';
import ReactDOM from 'react-dom';
import './style/reboot.css';
import './style/base.css';
import './style/header.css';
import './style/menu.css';
import MainLayout from './router';
import store from './store/';
import registerServiceWorker from './registerServiceWorker';

const render = () => ReactDOM.render(<MainLayout />, document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
