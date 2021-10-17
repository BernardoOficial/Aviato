import dotenv from 'dotenv';
dotenv.config();

import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';

// import './styles/app.css';
// import './styles/default/default.min.css';

const config = {
	storefrontAccessToken: process.env.REACT_APP_STORE_FRONT_ACCESSTOKEN,
	domain: process.env.REACT_APP_STORE_DOMAIN
}
const client = Client.buildClient(config);

ReactDOM.render(
	<App client={client} />,
	document.getElementById('root')
);
