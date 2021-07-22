import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let rowColor = isHeader ? {"backgroundColor":"#deb5b545", "width": "600px"} : {"backgroundColor":"#f5f5f5ab","width": "600px"}
    return (
        <tr className="row" style={rowColor}>
            {isHeader && !textSecondCell && <th colSpan = "2">{textFirstCell}</th>}
            {isHeader && textSecondCell && (<><th>{textFirstCell}</th><th>{textSecondCell}</th></>)}
            {!isHeader && (<> <td>{textFirstCell}</td><td>{textSecondCell}</td> </>)}</tr>
    )
}

CourseListRow.prototype = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string || PropTypes.number
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export { CourseListRow };