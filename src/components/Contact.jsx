// Import React and useState hook for managing component state
import React, { useState } from "react";



const Contact = () => {
  // Initialize formData state to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });