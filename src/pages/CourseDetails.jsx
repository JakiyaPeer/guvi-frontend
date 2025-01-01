// client/src/pages/CourseDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`)
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, [id]);

    if (!course) return <p>Loading...</p>;

    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Content:</strong> {course.content}</p>
            <p><strong>Tutor:</strong> {course.tutor.name}</p>
            <p>{course.tutor.bio}</p>
        </div>
    );
}

export default CourseDetail;
