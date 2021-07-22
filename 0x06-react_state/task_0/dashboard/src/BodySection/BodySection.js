import React from 'react';

const marginLeftStyle = {
	marginLeft: '2rem'
}

const BodySection = ({ title, children }) => {
	return (
		<div className='bodySection'>
			<h2 style={marginLeftStyle}>{title}</h2>
			{children}
		</div>
	)
}

export default BodySection
