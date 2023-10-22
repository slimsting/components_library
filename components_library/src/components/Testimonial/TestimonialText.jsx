import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialText = ({ children }) => {
  return (
    <>
      <FaQuoteLeft className="text-4xl mt-4" />
      <p className="text-white text-3xl mt-4 leading-relaxed font-semibold">{children}</p>
    </>
  );
};

export default TestimonialText;
