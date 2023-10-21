import React from "react";

const TypeContext = React.createContext();
export { TypeContext };

const Banner = ({ children, type }) => {
  let allClasses = null
  switch (type) {
    case "success":
      allClasses = "bg-green-100 p-4 rounded-md mt-4 mx-4";
      break;
    case "warning":
      allClasses = "bg-yellow-100 p-4 rounded-md mt-4 mx-4";
      break;
    case "error":
      allClasses = "bg-red-100 p-4 rounded-md mt-4 mx-4";
      break;
    case "neutral":
      allClasses = "bg-blue-100 p-4 rounded-md mt-4 mx-4";
      break;
  }
  return (
    <TypeContext.Provider value={type}>
      <div className={allClasses}>{children}</div>
    </TypeContext.Provider>
  );
};

export default Banner;
