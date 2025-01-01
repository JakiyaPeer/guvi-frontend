// client/src/pages/CourseList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CourseList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/course/')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return (
        <div>
            <h1>Available Courses</h1>
            <ul>
                {courses?.map((course) => (
                    <li key={course._id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p><strong>Price:</strong> ${course.price}</p>
                        <p><strong>Tutor:</strong> {course.tutor}</p>
                        <Link to={`/course/${course._id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
