/*import { useState } from "react";
import axios from "../utils/api";
import { useNavigate } from "react-router-dom";

const ScheduleLesson = ({ tutorId }) => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSchedule = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/lessons", {
        tutorId,
        studentId: "currentStudentId", // Replace with actual student ID from auth context
        date,
      });
      alert("Lesson scheduled successfully!");
      navigate("/dashboard"); // Redirect to a dashboard or lessons page
    } catch (err) {
      console.error("Error scheduling lesson:", err);
      alert("Failed to schedule the lesson.");
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <form onSubmit={handleSchedule} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Schedule a Lesson</h2>
        <div className="mb-4">
          <label className="block mb-2">Choose a Date</label>
          <input
            type="datetime-local"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Schedule Lesson
        </button>
      </form>
    </div>
  );
};

export default ScheduleLesson;
