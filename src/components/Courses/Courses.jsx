import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Courses = ({courseCart, creditHour, TotalAmount}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data=>setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-3">
            {
                courses.map((course, idx)=><Course key={idx} course={course} creditHour={creditHour} courseCart={courseCart} TotalAmount={TotalAmount}></Course>
                )
            }
        </div>
    );
};

Courses.propTypes = {
    courseCart: PropTypes.func,
    creditHour: PropTypes.func,
    TotalAmount: PropTypes.func
}

export default Courses;