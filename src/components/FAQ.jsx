import { useState } from "react";

export default function Accordion({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-gray-800 shadow-md md:px-12">
        <div className="accordion-item py-4">
          <h2>
            <button
              onClick={() => setIsActive(!isActive)}
              className="accordion-button w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-700 duration-700 focus:outline-none flex justify-between items-center"
            >
              <span className="text-md md:text-lg font-medium text-yellow-500">
                {question}
              </span>
              <svg
                className={`accordion-icon w-5 h-5 transition-transform  ${
                  isActive ? "rotate-180" : "rotate-0"
                } transform text-white duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            className={`bg-gray-900 font-semibold text-lg accordion-content px-6 py-4 ${
              isActive ? "block" : "hidden"
            } `}
          >
            <p className="text-gray-200 text-sm text-justify md:text-lg">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
