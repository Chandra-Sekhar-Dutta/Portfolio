import React, { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill all the fields');
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xqabzzza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(result?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <section>
      <div className="max-w-xl mx-auto bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-purple-600 transition-all duration-300">
        <h2 className="text-4xl font-bold text-center text-purple-300 mb-8">Contact Form</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 bg-opacity-60 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 bg-opacity-60 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 h-32 bg-gray-900 bg-opacity-60 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-8 p-4 bg-green-700 bg-opacity-80 text-white text-center rounded-xl shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold">Form submitted successfully!</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
