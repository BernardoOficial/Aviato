import React from 'react';
import Product from './Product';

import "../styles/list-products/list-products.min.css";

const Products = ({
	products,
	client,
	addVariantToCart
}) => {

	let productsAll = products.map((product) => {
      
		return (
			<Product
				addVariantToCart={addVariantToCart}
				client={client}
				key={product.id.toString()}
				product={product}
			/>
		);
	});

	return (
		<div className="container">
			<div className="wrapper">
				<section className="list-products">
					{productsAll}
				</section>
			</div>
		</div>
	);
}

export default Products;
