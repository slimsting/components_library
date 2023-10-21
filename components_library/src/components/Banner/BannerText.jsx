import React from "react";
import { TypeContext } from "./Banner";
const BannerText = ({ children }) => {
  const type = React.useContext(TypeContext);
  let allClasses= null;

  switch (type) {
    case "success":
      allClasses = "text-sm text-green-600 max-w-3xl ml-9";
      break;
    case "warning":
      allClasses = "text-sm text-yellow-600 max-w-3xl ml-9";
      break;
    case "error":
      allClasses = "text-sm text-red-600 max-w-3xl ml-9";
      break;
    case "neutral":
      allClasses = "text-sm text-blue-600 max-w-3xl ml-9";
      break;
  }
  return <p className={allClasses}>{children}</p>;
};

export default BannerText;
