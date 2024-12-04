import React, { useState } from "react";

const FormComponent = () => {
  // Step 1: Set up state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Step 2: Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 4: Send POST request using Fetch API
      const response = await fetch("https://example.com/api/submit", {
        method: "POST", // Request method
        headers: {
          "Content-Type": "application/json", // Send data as JSON
        },
        body: JSON.stringify(formData), // Send the form data
      });

      // Step 5: Log the response or data to console
      if (response.ok) {
        const data = await response.json(); // Assuming the response is in JSON
        console.log("Success:", data); // Log success response to the console
      } else {
        console.error("Error in request:", response.statusText); // Log error if the request fails
      }
    } catch (error) {
      console.error("Error:", error); // Log error in case of network failure
    }
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
