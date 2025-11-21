import React from "react";
import LinkContainer from "./components/LinkContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Favorite Links</h1>
      <LinkContainer />
    </div>
  );
}

export default App;
