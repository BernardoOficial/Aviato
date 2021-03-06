import React from 'react';

const LineItem = ({
	updateQuantityInCart,
	removeLineItemInCart,
	line_item
}) => {

	const decrementQuantity = (lineItemId) => {
		const updatedQuantity = line_item.quantity - 1
		updateQuantityInCart(lineItemId, updatedQuantity);
	}

	const incrementQuantity = (lineItemId) => {
		const updatedQuantity = line_item.quantity + 1
		updateQuantityInCart(lineItemId, updatedQuantity);
	}

	return (
		<li className="Line-item">

			<div className="Line-item__img">
			{line_item.variant.image ? <img src={line_item.variant.image.src} alt={`${line_item.title} product shot`}/> : null}
			</div>

			<div className="Line-item__content">

				<div className="Line-item__content-row">
					<div className="Line-item__variant-title">
						{line_item.variant.title}
					</div>
					<span className="Line-item__title">
						{line_item.title}
					</span>
				</div>

				<div className="Line-item__content-row">
					<div className="Line-item__quantity-container">
						<button className="Line-item__quantity-update" onClick={() => decrementQuantity(line_item.id)}>-</button>
						<span className="Line-item__quantity">{line_item.quantity}</span>
						<button className="Line-item__quantity-update" onClick={() => incrementQuantity(line_item.id)}>+</button>
					</div>
					<span className="Line-item__price">
						$ { (line_item.quantity * line_item.variant.price).toFixed(2) }
					</span>
					<button className="Line-item__remove" onClick={()=> removeLineItemInCart(line_item.id)}>×</button>
				</div>

			</div>
      </li>
	);
}

export default LineItem;
