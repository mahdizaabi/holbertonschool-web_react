import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({

    bodySectionWithMarginontainer: {
        margiBottom: "40px"
    }
});
const rowTh = StyleSheet.create({

    rowTh: {
        borderLeft: " 0px solid rgb(221, 221, 221)",
        textAlign: "center"

    }
});
const rowTd = StyleSheet.create({

    rowTd: {
        textAlign: "left",
        borderBottom: "2px solid rgb(221, 221, 221)",
        borderLeft: "2px solid rgb(221, 221, 221)",
    }
});




const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const rowColor = isHeader ? '#deb5b545' : '#f5f5f5ab';
    const style = { "backgroundColor": `${rowColor}` }
    return (
        <tr className="row" style={style}>{isHeader && !textSecondCell && <th colSpan="2" className={css(rowTh.rowTh)}>{textFirstCell}</th>}
            {isHeader && textSecondCell && (<><th className={css(rowTd.rowTd)}>{textFirstCell}</th><th className={css(rowTd.rowTd)}>{textSecondCell}</th></>)}
            {!isHeader && (<> <td className={css(rowTd.rowTd)}>{textFirstCell}</td><td className={css(rowTd.rowTd)}>{textSecondCell}</td> </>)}</tr>
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