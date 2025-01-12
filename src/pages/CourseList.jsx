import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PaymentPage from './PayementPage';

function CourseList() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://guvi-backend-8.onrender.com/api/course/')
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));
    }, []);

    const handlePayment = (courseId, price) => {
        navigate(`/Payement`, { state: { courseId, price } });
    };
    const handleButtonClick = () => {
        // This will navigate to the /new-page route when the button is clicked
        +navigate('/PayementPage-'); 
      };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
            <ul>
                {courses?.map((course) => (
                    <li key={course._id} className="mb-6">
                        <h2 className="text-xl font-semibold">{course.title}</h2>
                        <p>{course.description}</p>
                        <p><strong>Price:</strong> ${course.price}</p>
                        <p><strong>Tutor:</strong> {course.tutor}</p>
                        <Link to={`/course/${course._id}`} className="text-blue-500">View Details</Link>
                        <button
                            onClick={() => handlePayment(course._id, course.price)}
                            className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Proceed to Payment
                        </button>
                       
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;