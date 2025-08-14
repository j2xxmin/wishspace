import React from "react";
import "./ProgressBar.css";

function ProgressBar({ level }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${level*20}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;