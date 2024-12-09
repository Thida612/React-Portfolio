import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume-content">
        <p>
          <strong>Download my resume:</strong> <a href="/path/to/resume.pdf" download>Click here</a>
        </p>
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
  
        </ul>
      </div>
    </div>
  );
};

export default Resume;
