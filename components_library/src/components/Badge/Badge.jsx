const Badge = ({ children, variant, color }) => {
  let allClasses = null;
  switch (variant) {
    case "pill":
      switch (color) {
        case "gray":
          allClasses =
            "bg-gray-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-gray-700 h-12 flex items-center justify-center";
          break;
        case "red":
          allClasses =
            "bg-red-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-red-700 h-12 flex items-center justify-center";
          break;
        case "yellow":
          allClasses =
            "bg-yellow-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-yellow-700 h-12 flex items-center justify-center";
          break;
        case "green":
          allClasses =
            "bg-green-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-green-700 h-12 flex items-center justify-center";
          break;
        case "blue":
          allClasses =
            "bg-blue-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-blue-700 h-12 flex items-center justify-center";
          break;
        case "indigo":
          allClasses =
            "bg-indigo-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-indigo-700 h-12 flex items-center justify-center";
          break;
        case "purple":
          allClasses =
            "bg-purple-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-purple-700 h-12 flex items-center justify-center";
          break;

        case "pink":
          allClasses =
            "bg-pink-100 text-2xl text-center w-40 rounded-full m-2 px-2 py-1 font-semi-bold text-pink-700 h-12 flex items-center justify-center";
          break;
      }

      break;
    case "square":
      switch (color) {
        case "gray":
          allClasses =
            "bg-gray-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-gray-700 h-12 flex items-center justify-center";
          break;
        case "red":
          allClasses =
            "bg-red-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-red-700 h-12 flex items-center justify-center";
          break;
        case "yellow":
          allClasses =
            "bg-yellow-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-yellow-700 h-12 flex items-center justify-center";
          break;
        case "green":
          allClasses =
            "bg-green-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-green-700 h-12 flex items-center justify-center";
          break;
        case "blue":
          allClasses =
            "bg-blue-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-blue-700 h-12 flex items-center justify-center";
          break;
        case "indigo":
          allClasses =
            "bg-indigo-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-indigo-700 h-12 flex items-center justify-center";
          break;
        case "purple":
          allClasses =
            "bg-purple-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-purple-700 h-12 flex items-center justify-center";
          break;

        case "pink":
          allClasses =
            "bg-pink-100 text-2xl text-center w-40 rounded-lg m-2 px-2 py-1 font-semi-bold text-pink-700 h-12 flex items-center justify-center";
          break;
      }
  }

  return (
    <>
      <div className={allClasses}>{children}</div>
    </>
  );
};
export default Badge;
