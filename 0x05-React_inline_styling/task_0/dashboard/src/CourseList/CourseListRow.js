import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let rowColor = isHeader ? {"backgroundColor":"#f5f5f5ab"} : {"backgroundColor":"#deb5b545"}
    return (
        <tr className="row" >
            {isHeader && !textSecondCell && <th syle={rowColor} colSpan = "2">{textFirstCell}</th>}
            {isHeader && textSecondCell && (<><th syle={rowColor}>{textFirstCell}</th><th syle={rowColor}>{textSecondCell}</th></>)}
            {!isHeader && (<> <td style={rowColor}>{textFirstCell}</td><td style={rowColor}>{textSecondCell}</td> </>)}</tr>
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