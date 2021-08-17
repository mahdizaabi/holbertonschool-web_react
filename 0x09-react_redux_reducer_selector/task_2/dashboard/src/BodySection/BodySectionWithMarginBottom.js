import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = (props) => {
	return (
		<div className={css(styles.sectionMarginBottom)}>
			<BodySection {...props}/>
		</div>
	)
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element
}

const styles = StyleSheet.create({
  sectionMarginBottom: {
    marginBottom: '40px'
  },
})

export default BodySectionWithMarginBottom
