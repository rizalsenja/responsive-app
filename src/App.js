import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Viewport width:", window.innerWidth);
  }, []);

  return (
    <div className="container">
      <h1>Responsive Layout</h1>
      <p>This layout adapts to 360–390px viewports.</p>
      <div className="card">
        <p>Try this on your Realme GT2 Pro and iPhone 12.</p>
      </div>
    </div>
  );
}

export default App;