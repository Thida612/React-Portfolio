import React from "react";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        <Project image="https://via.placeholder.com/300" altText="Portfolio 1" />
        <Project image="https://via.placeholder.com/300" altText="Portfolio 2" />
        <Project image="https://via.placeholder.com/300" altText="Portfolio 3" />
        <Project image="https://via.placeholder.com/300" altText="Portfolio 4" />
        <Project image="https://via.placeholder.com/300" altText="Portfolio 5" />
      </div>
    </div>
  );
};

export default Portfolio;
