import React from "react";

const Testimonial = ({ children }) => {
  return (
    <div className="m-4 mt-12 p-8 bg-blue-500 rounded-xl firstB:max-w-[400px] mx-auto fourthB:max-w-[400px] shadow-xl">
      {children}
    </div>
  );
};

export default Testimonial;
