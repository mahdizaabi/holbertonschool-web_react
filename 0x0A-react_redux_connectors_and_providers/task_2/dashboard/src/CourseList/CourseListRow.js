import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <tr
      className={
        isHeader ? css(styles.headerRowStyle) : css(styles.defaultRowStyle)
      }
    >
      {isHeader && textSecondCell === null && (
        <th colSpan={2} className={css(styles.thBorderBottom)}>
          {textFirstCell}
        </th>
      )}
      {isHeader && textSecondCell !== null && (
        <>
          <th className={css(styles.textAlignLeft, styles.thBorderBottom)}>
            {textFirstCell}
          </th>
          <th className={css(styles.textAlignLeft, styles.thBorderBottom)}>
            {textSecondCell}
          </th>
        </>
      )}
      {!isHeader && (
        <>
          <td className={isChecked ? css(styles.rowChecked) : "rowNotChecked"}>
            <input
              type="checkbox"
              name="styleCheckbox"
              onChange={() => {setIsChecked(!isChecked)}}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  headerRowStyle: {
    backgroundColor: "#deb5b545",
  },

  defaultRowStyle: {
    backgroundColor: "#f5f5f5ab",
  },

  textAlignLeft: {
    textAlign: "left",
  },

  thBorderBottom: {
    borderBottom: "1px solid grey",
  },

  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

export default CourseListRow;
