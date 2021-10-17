import React from 'react';

const VariantSelector = ({
	handleOptionChange,
	option
}) => {

	return (
		<select
			className="Product__option"
			name={option.name}
			onChange={handleOptionChange}
		>
			{option.values.map((value) => {
				return (
					<option value={value} key={`${option.id.toString()}-${value}`}>{`${value}`}</option>
				)
			})}
		</select>
	);
}

export default VariantSelector;
