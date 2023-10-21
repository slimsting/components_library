import React from "react";

const Testimonial = ({ children }) => {
  return (
    <div className="m-4 mt-12 p-8 bg-blue-700 rounded-xl firstB:max-w-[540px]">
      {children}
    </div>
  );
};

export default Testimonial;
