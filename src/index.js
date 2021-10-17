import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';

import './styles/app.css';
import './styles/default/default.min.css'

const client = Client.buildClient({
	storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESSTOKEN,
	domain: process.env.REACT_APP_STORE_DOMAIN
});

ReactDOM.render(
	<App client={client}/>,
	document.getElementById('root')
);
