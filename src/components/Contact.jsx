// Import React and useState hook for managing component state
import React, { useState } from "react";



const Contact = () => {
  // Initialize formData state to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize errors state to store validation error messages
  const [errors, setErrors] = useState({});


  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs and set error messages if validation fails
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    // Handle form submission 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (validate()) { // Validate form inputs
          alert("Message sent successfully!"); // Show success message
          setFormData({ name: "", email: "", message: "" }); // Reset form inputs
          setErrors({}); // Clear error messages
        }
      };
    
      return (
        <div className="contact">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
