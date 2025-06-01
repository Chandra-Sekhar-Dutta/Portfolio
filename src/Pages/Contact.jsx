import React from 'react';
import Form from '../component/Form';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-purple-800 via-indigo-800 to-black text-white text-center py-12 md:py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-purple-300 decoration-purple-500 underline-offset-4 mb-12">
          Let's Get in Touch.
        </h1>

        <p className='text-2xl font-bold text-center text-purple-300 decoration-purple-500 underline-offset-4 mb-12'>
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact Form */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
