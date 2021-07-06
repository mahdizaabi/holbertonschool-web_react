import React from 'react';
import PropTypes from 'prop-types'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <tr>
            {isHeader && !textSecondCell && <th colSpan = "2">{textFirstCell}</th>}
            {isHeader && textSecondCell && (<><th>{textFirstCell} </th><th>{textSecondCell}</th></>)}
            {!isHeader && (<> <td>{textFirstCell} </td><td>{textSecondCell}</td> </>)}
        </tr>
    )
}

CourseListRow.prototype = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export { CourseListRow };