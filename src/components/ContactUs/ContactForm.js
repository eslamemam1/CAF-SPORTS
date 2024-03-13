import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center w-[100%] bg-gray-100">
      <div className="bg-white rounded w-[100%] shadow-md p-8 max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:flex-1">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4 md:flex-1">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 focus:outline-none">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
