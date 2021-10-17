import React, { useEffect, useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';

const App = ({ client }) => {

	const [isCartOpen, setIsCartOpen] = useState(false);
	const [checkout, setCheckout] = useState({ lineItems: [] });
	const [products, setProducts] = useState([]);
	const [shop, setShop] = useState({});

	useEffect(() => {

		client.checkout.create()
			.then(response => {
				setCheckout({
					...response
				})
			})	

		client.product.fetchAll()
			.then(response => {
				setProducts([
					...response
				])
			})
		
		client.shop.fetchInfo()
			.then(response => {
				setShop({
					...response
				})
			})

	}, [])

	const addVariantToCart = (variantId, quantity) => {
		setIsCartOpen(true);

		const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
		const checkoutId = checkout.id;

		return client.checkout.addLineItems(checkoutId, lineItemsToAdd)
			.then(response => {
				setCheckout({
					...response
				})
			})
	}

	const updateQuantityInCart = (lineItemId, quantity) => {

		const checkoutId = checkout.id;
		const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

		return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate)
			.then(response => {
				setCheckout({
					...response
				});
			});
	}

	const removeLineItemInCart = (lineItemId) => {
		const checkoutId = checkout.id;

		return client.checkout.removeLineItems(checkoutId, [lineItemId])
			.then(response => {
				setCheckout({
					...response
				});
			});
	}
	
	const handleCartClose = () => {
		setIsCartOpen(!isCartOpen);
	}

	return (
		<div className="App">
			<header className="App__header">
				{!isCartOpen &&
					<div className="App__view-cart-wrapper">
					<button
						className="App__view-cart"
						onClick={() => setIsCartOpen(true)}
					>
						Cart
					</button>
					</div>
				}
				<div className="App__title">
					<h1>{shop.name}: React Example</h1>
					<h2>{shop.description}</h2>
				</div>
			</header>
			
			<Products
				products={products}
				client={client}
				addVariantToCart={addVariantToCart}
			/>

			<Cart
				checkout={checkout}
				isCartOpen={isCartOpen}
				handleCartClose={handleCartClose}
				updateQuantityInCart={updateQuantityInCart}
				removeLineItemInCart={removeLineItemInCart}
			/>
		</div>
	);
}

export default App;