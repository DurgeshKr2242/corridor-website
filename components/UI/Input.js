import React, { useState } from "react";

const Input = ({
  isLoading,
  setIsLoading,
  onChnage,
  value,
  label,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Your API call or other async function here
    setTimeout(() => {
      setIsLoading(false);
      setInputValue("");
    }, 2000);
  };

  return (
    <div onSubmit={handleSubmit} className="font-normal">
      <p className={`text-White my-1 text-sm ${isLoading ? "opacity-50" : ""}`}>
        {isLoading ? "Loading..." : "Enter text and press enter"}
      </p>
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Enter text here"
          value={inputValue}
          onChange={handleInputChange}
          disabled={isLoading}
          className={`w-full px-3 py-1 bg-bgBlackSec rounded-standard/4 border placeholder:text-White text-white ${
            isLoading ? "bg-White cursor-not-allowed" : "border-transparent"
          } focus:outline-none focus:ring-2 focus:ring-Blue focus:border-transparent`}
        />
        {isLoading && (
          <div className="absolute inset-y-0 flex items-center pl-3 right-2">
            <svg
              className="w-5 h-5 text-White animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4c2.485 0 4.746-.89 6.5-2.375L20 12zm-6.5-2.375A6.963 6.963 0 0012 10V4c3.042 0 5.824 1.135 7.938 3l-2.647 3z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
