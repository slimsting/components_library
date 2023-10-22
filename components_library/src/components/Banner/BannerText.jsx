import React from "react";
import { TypeContext } from "./Banner";
const BannerText = ({ children }) => {
  const type = React.useContext(TypeContext);
  let allClasses= null;

  switch (type) {
    case "success":
      allClasses = "text-md text-green-600 max-w-3xl ml-9";
      break;
    case "warning":
      allClasses = "text-md text-yellow-600 max-w-3xl ml-9 ";
      break;
    case "error":
      allClasses = "text-md text-red-600 max-w-3xl ml-9";
      break;
    case "neutral":
      allClasses = "text-md text-blue-600 max-w-3xl ml-9";
      break;
  }
  return <p className={allClasses}>{children}</p>;
};

export default BannerText;
