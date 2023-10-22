import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillWarning } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { BsInfoCircle } from "react-icons/bs";
import { TypeContext } from "./Banner";

const BannerTitle = ({ children }) => {
  const type = React.useContext(TypeContext);
  let allClasses = null;
  let icon = null;
  switch (type) {
    case "success":
      allClasses = "text-2xl text-green-800 flex gap-4 items-center";
      icon = <FaCheckCircle className="text-green-600" />;
      break;

    case "warning":
      allClasses =
        "text-2xl text-yellow-800 flex gap-4 items-center";
      icon = <AiFillWarning className="text-yellow-600" />;
      break;

    case "error":
      allClasses = "text-2xl text-red-800 flex gap-4 items-center";
      icon = <VscError className="text-red-600" />;
      break;

    case "neutral":
      allClasses = "text-2xl text-blue-800 flex gap-4 items-center";
      icon = <BsInfoCircle className="text-blue-600" />;
      break;
  }

  return (
    <h2 className={allClasses}>
      {icon}
      {children}
    </h2>
  );
};

export default BannerTitle;
