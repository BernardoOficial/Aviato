import React, { useState } from 'react';
import VariantSelector from './VariantSelector';

const Product = ({
	addVariantToCart,
	client,
	product
}) => {

	let defaultOptionValues = {};
    product.options.forEach((selector) => {
    	defaultOptionValues[selector.name] = selector.values[0].value;
    });

	const [selectedOptions] = useState(defaultOptionValues);
	const [selectedVariant, setSelectedVariant] = useState();
	const [selectedVariantImage, setSelectedVariantImage] = useState();
	const [selectedVariantQuantity, setSelectedVariantQuantity] = useState(0);

	// CODIGO PARA FILTRAR UMA IMAGEM ESPECIFICA
	// const findImage = (images, variantId) => {
	// 	const primary = images[0];

	// 	const image = images.filter(function (image) {
	// 		return image.variant_ids.includes(variantId);
	// 	})[0];

	// 	return (image || primary).src;
	// }

	const handleOptionChange = (event) => {
		const target = event.target
		selectedOptions[target.name] = target.value;

		const newSelectedVariant = client.product.helpers.variantForOptions(product, selectedOptions)

		setSelectedVariant(newSelectedVariant)
		setSelectedVariantImage(newSelectedVariant.attrs.image)
	}

	const handleQuantityChange = (event) => {
		setSelectedVariantQuantity(event.target.value);
	}

	let variantImage = selectedVariantImage || product.images[0]
    let variant = selectedVariant || product.variants[0]
    let variantQuantity = selectedVariantQuantity || 1
    let variantSelectors = product.options.map((option) => {
		return (
			<VariantSelector
				handleOptionChange={handleOptionChange}
				key={option.id.toString()}
				option={option}
			/>
		);
    });

	return (
		<div className="list-products__item">

			{product.images.length ? <img className="list-products__item-image" src={variantImage.src} alt={`${product.title} product shot`}/> : null}
			
			<h5 className="list-products__item-title">{product.title[0].toUpperCase()}{product.title.slice(1).toLowerCase()}</h5>
			
			<span className="list-products__item-price Product__price">R$ {variant.price}</span>
			
			{/* {variantSelectors} */}
			
			{/* <label className="Product__option">
				Quantidade
				<input min="1" type="number" defaultValue={variantQuantity} onChange={handleQuantityChange}></input>
			</label> */}
			
			<button className="default-button default-button--extend" onClick={() => addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
      </div>
	);
}

export default Product;
