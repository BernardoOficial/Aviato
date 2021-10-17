import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensHome from './Home';
import ScreensProduct from './Product';
import ScreensCollection from './Collection';
import ScreensCollections from './Collections';
import ScreensCart from './Cart';

const ScreensRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/">
				<ScreensHome />
			</Route>
			<Route exact path="/product/:productName">
				<ScreensProduct />
			</Route>
			<Route exact path="/collection/:collectionName">
				<ScreensCollection />
			</Route>
			<Route exact path="/collections">
				<ScreensCollections />
			</Route>
			<Route exact path="/cart">
				<ScreensCart />
			</Route>

			{/* <Route path="/user/:id" component={ScreensUserForm} /> */}
		</Switch>
	</Router>
);

export default ScreensRouter;
