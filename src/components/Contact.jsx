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