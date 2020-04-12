import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = ({ setSettingsOpen }) => {
  const [clearing, setClearing] = useState(false);
  useEffect(() => setSettingsOpen(true), [setSettingsOpen]);
  const clearSavedData = (event) => {
    event.preventDefault();
    localStorage.clear();
    setClearing(false);
  };
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="option">
        {clearing ? (
          <div className="buttons">
            <button onClick={clearSavedData}>Yes</button>
            <button onClick={() => setClearing(false)}>No</button>
          </div>
        ) : (
          <div className="buttons">
            <button
              className={!localStorage.getItem("todos") && "inactive"}
              onClick={() => localStorage.getItem("todos") && setClearing(true)}
            >
              {localStorage.getItem("todos")
                ? "Clear Saved Data"
                : "No Saved Data"}
            </button>
          </div>
        )}
        <p>
          {clearing
            ? "Are you sure?"
            : localStorage.getItem("todos") &&
              "This will remove all your todos!"}
        </p>
      </div>
    </div>
  );
};

export default Settings;
