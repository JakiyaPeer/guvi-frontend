import { useState, useEffect } from "react";
import axios from "../utils/api";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get("/lesson/lessons");
        setLessons(response.data);
      } catch (err) {
        console.error("Error fetching lessons:", err);
      }
    };

    fetchLessons();
    console.log("its working");
    
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-bold">Your Lessons</h1>
      <div className="mt-4">
        {lessons.length === 0 ? (
          <p>No lessons found.</p>
        ) : (
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Tutor</th>
                <th className="border border-gray-300 p-2">Student</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson._id}>
                  <td className="border border-gray-300 p-2">{lesson.tutorId.name}</td>
                  <td className="border border-gray-300 p-2">{lesson.studentId.name}</td>
                  <td className="border border-gray-300 p-2">{new Date(lesson.date).toLocaleString()}</td>
                  <td className="border border-gray-300 p-2">{lesson.status}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => updateStatus(lesson._id, "completed")}
                    >
                      Complete
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => updateStatus(lesson._id, "canceled")}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const updateStatus = async (lessonId, status) => {
  try {
    await axios.put(`/lessons/${lessonId}`, { status });
    alert(`Lesson marked as ${status}`);
    window.location.reload(); // Refresh lessons
  } catch (err) {
    console.error("Error updating status:", err);
    alert("Failed to update lesson status.");
  }
};


export default Lesson;