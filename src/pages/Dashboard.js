// src/pages/Dashboard.js
import React, { useState } from "react";
import FaceCapture from "../components/FaceCapture";

export default function Dashboard() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-green-700">
          Dashboard
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome! Manage attendance, view statistics, and access all your tools
          here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => setShowCamera(!showCamera)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition"
          >
            {showCamera ? "Hide Camera" : "Mark Attendance"}
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded transition">
            View Reports
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition">
            Manage Users
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded transition">
            Settings
          </button>
        </div>
        {showCamera && <FaceCapture />}
      </div>
    </div>
  );
}
