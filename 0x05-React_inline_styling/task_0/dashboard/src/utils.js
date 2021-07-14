
import PropTypes from 'prop-types';


export const getFullYear = () => new Date().getFullYear();
export const getFooterCopy = (isIndex) => isIndex ? "Holberton School" : "Holberton School main dashboard";
export const getLatestNotification = () => { return { __html: '<strong>Urgent requirement</strong> - complete by EOD' } };

export const CourseShape = PropTypes.shape({

    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired

})

export const NotificationItemShape = PropTypes.shape({

    id: PropTypes.number.isRequired,
    html:PropTypes.object,
    type : PropTypes.string.isRequired,
    value : PropTypes.string

})





