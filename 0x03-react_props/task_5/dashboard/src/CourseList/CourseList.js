import React from 'react';
import { CourseListRow } from './CourseListRow';
import './CourseList.css'
import PropTypes from 'prop-types';

import { CourseShape } from '../utils';

const CourseList = ({listCourses}) => {
    

    if (listCourses.length === 0) {
        return (
            <table id="CourseList">
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
        <table id="CourseList">
            <thead>
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Available courses"
                />
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                />
            </thead>

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