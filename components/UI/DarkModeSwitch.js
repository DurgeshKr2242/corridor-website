import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <button
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <FaMoon className="text-white" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
