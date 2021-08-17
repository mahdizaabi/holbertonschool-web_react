import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markNotificationAsRead }) => {
	return (
		<li className={type === 'default' ? css(styles.defaultNotificationStyle, styles.smallNotificationStyle) : css(styles.urgentNotificationStyle, styles.smallNotificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markNotificationAsRead}>{value}</li>
	)
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	value: PropTypes.string,
	onClick: PropTypes.func
};

NotificationItem.defaultProps = {
	type: 'default',
	onClick: () => {}
};

const styles = StyleSheet.create({
  defaultNotificationStyle: {
		color: 'blue',
	},

  urgentNotificationStyle: {
		color: 'red',
	},

	smallNotificationStyle: {
		'@media (max-width: 900px)': {
			borderBottom: '1px solid black',
			padding: '10px 8px'
    }

	}
})

export default memo(NotificationItem)
