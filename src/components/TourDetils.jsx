import React from "react";

// This is necessary to configure the worker for react-pdf

const TourDetils = () => {
  return (
    <div style={{ width: "100%", height: "800px" }}>
      <iframe src="/tour_details.pdf" width="100%" height="100%" style={{ border: "none" }} title="PDF Viewer">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default TourDetils;
