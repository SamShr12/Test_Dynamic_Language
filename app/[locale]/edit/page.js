"use client";
import { useState, useEffect } from "react";

const JsonEditor = () => {
  const [jsonData, setJsonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the JSON data from the public directory
    fetch("/messages/en.json")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/messages/en.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData), // Send the modified JSON data
      });
      console.log(response);
      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{jsonData.Index.title}</h1>
          <h2>{jsonData.Index.subtitle}</h2>
          <input
            type="text"
            value={jsonData.Index.alertMessage}
            onChange={(e) =>
              setJsonData({
                ...jsonData,
                Index: { ...jsonData.Index, alertMessage: e.target.value },
              })
            }
          />
          <button onClick={handleSave}>Save</button>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonEditor;
