import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error for this field as user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xqabzzza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrors({ submit: result?.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const inputFieldProps = {
    className: "w-full px-5 py-3 bg-gray-800/40 backdrop-blur-sm text-gray-100 placeholder-gray-500 rounded-xl border border-gray-700/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/70 hover:border-gray-600/70",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-2xl transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Send me a Message
          </h2>
          <p className="text-gray-400">I'll get back to you as soon as possible</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              {...inputFieldProps}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.name}
              </p>
            )}
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              {...inputFieldProps}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.email}
              </p>
            )}
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              {...inputFieldProps}
            />
            {errors.subject && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.subject}
              </p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project, ideas, or questions..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-5 py-3 bg-gray-800/40 backdrop-blur-sm text-gray-100 placeholder-gray-500 rounded-xl border border-gray-700/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/70 hover:border-gray-600/70 resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span>⚠</span> {errors.message}
              </p>
            )}
          </motion.div>

          {/* Submit Error */}
          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-sm"
            >
              {errors.submit}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span>→</span>
              </>
            )}
          </motion.button>
        </form>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 p-5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 backdrop-blur-sm text-green-300 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-lg font-semibold mb-1">✓ Message sent successfully!</h3>
            <p className="text-green-300/80 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Form;
