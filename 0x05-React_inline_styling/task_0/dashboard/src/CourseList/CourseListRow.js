import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <tr className="row" style={{"backgroundColor":"#f5f5f5ab"}}>
            {isHeader && !textSecondCell && <th syle={{"backgroundColor":"#deb5b545"}} colSpan = "2">{textFirstCell}</th>}
            {isHeader && textSecondCell && (<><th syle={{"backgroundColor":"#deb5b545"}}>{textFirstCell}</th><th>{textSecondCell}</th></>)}
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