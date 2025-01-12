import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our Learning Management System, connecting students and tutors for a seamless online learning experience.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide a platform where students can easily find qualified tutors and enhance their learning experience through interactive online lessons.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="text-gray-700">
          We are a dedicated team of educators and technologists committed to making learning accessible to everyone, everywhere.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
