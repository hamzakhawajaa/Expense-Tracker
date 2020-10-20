import React from "react";
import "./App.css";
import Dinner from "./dinner.js";
function App() {
  return (
    <div className="App">
      <Dinner dishName="Chicken Karahi" sweetDish="Kheer" />
      <Dinner dishName="Halwa Puri" sweetDish="jaleebi" />
      <Dinner dishName="Haleem" sweetDish="Halwa" />
    </div>
  );
}

export default App;
