import React, { useEffect, useRef } from "react";

const ProgressBar = ({ label, percentage, delay }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;
    progress.style.width = "0%";
    const timer = setTimeout(() => {
      progress.style.width = `${percentage}%`;
    }, delay * 500);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-4 w-[90%] sm:w-[75%] sm:ml-0 ml-3 overflow-hidden">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2 dark:bg-gray-700">
        <div
          ref={progressRef}
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: "0%", transition: "width 4s ease" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
