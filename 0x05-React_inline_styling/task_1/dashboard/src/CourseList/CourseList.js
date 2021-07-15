import React from 'react';
import { CourseListRow } from './CourseListRow';
import PropTypes from 'prop-types';
import { css, StyleSheet } from "aphrodite";
import { CourseShape } from '../utils';

const styles = StyleSheet.create({

    CourseList: {
        margin: "auto",
        width: "80%",
        padding: "28px 28px"
    }
});

const CourseList = ({ listCourses }) => {


    if (listCourses.length === 0) {
        return (
            <table className={css(styles.CourseList)}>
                <thead>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="No course available yet"
                    />
                </thead>
            </table>
        )
    }

    return (
        <table className={css(styles.CourseList)}>
            <thead><CourseListRow
                isHeader={true}
                textFirstCell="Available courses"
            />
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                /></thead>
            <tbody>
                {listCourses.map(item => {
                    return (<CourseListRow
                        key={item.id}
                        isHeader={false}
                        textFirstCell={item.name}
                        textSecondCell={item.credit}
                    />)
                })}
            </tbody>

        </table>
    )
}

CourseList.prototype = {
    listCourses: PropTypes.arrayOf(CourseShape)
}
CourseList.defaultProps = {
    listCourses: [],
};

export { CourseList };