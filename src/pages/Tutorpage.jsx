import React, { useState, useEffect } from "react";
import axios from "axios";

const TutorPage = () => {
  const [tutors, setTutors] = useState([]); // Holds the list of tutors
  const [filters, setFilters] = useState({
    subject: "",
    price: "",
    ratings: "",
  }); // Filters for fetching tutors
  const [error, setError] = useState(null); // For error handling

  // Fetch tutors with filters
  const fetchTutors = async () => {
    try {
      setError(null); // Clear errors before fetching
      const { data } = await axios.get("https://guvi-backend-8.onrender.com/api/tutors/", {
        params: filters, // Pass filters as query params
      });
      setTutors(data.tutors);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch tutors.");
    }
  };

  // Handle updating availability
  const updateAvailability = async (id, newAvailability) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/tutors/${id}/availability`,
        { availability: newAvailability }
      );
      // Update the tutor in the list with the new availability
      setTutors((prevTutors) =>
        prevTutors.map((tutor) =>
          tutor._id === id ? { ...tutor, availability: data.tutor.availability } : tutor
        )
      );
    } catch (err) {
      alert("Failed to update availability.");
    }
  };

  // Fetch tutors when component mounts or filters change
  useEffect(() => {
    fetchTutors();
  }, [filters]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tutors</h1>

      {/* Filters */}
      <div className="mb-6">
        <label className="block mb-2">Subject</label>
        <input
          type="text"
          placeholder="Enter subject..."
          className="input input-bordered w-full mb-4"
          value={filters.subject}
          onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
        />
        <label className="block mb-2">Maximum Price</label>
        <input
          type="number"
          placeholder="Enter max price..."
          className="input input-bordered w-full mb-4"
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        />
        <label className="block mb-2">Minimum Ratings</label>
        <input
          type="number"
          placeholder="Enter min ratings..."
          className="input input-bordered w-full mb-4"
          value={filters.ratings}
          onChange={(e) => setFilters({ ...filters, ratings: e.target.value })}
        />
        <button
          onClick={fetchTutors}
          className="btn btn-primary"
        >
          Apply Filters
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Tutors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutors.map((tutor) => (
          <div key={tutor._id} className="card shadow-md p-4">
            <h2 className="text-xl font-bold">{tutor.name}</h2>
            <p>Subject: {tutor.subject}</p>
            <p>Price: ${tutor.price}</p>
            <p>Ratings: {tutor.ratings}⭐</p>
            <p>Availability: {tutor.availability ? "Available" : "Unavailable"}</p>
            <button
              onClick={() => updateAvailability(tutor._id, !tutor.availability)}
              className="btn btn-secondary mt-4"
            >
              Toggle Availability
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorPage;
