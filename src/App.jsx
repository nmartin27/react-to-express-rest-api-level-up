import { useEffect, useState } from "react";

import "./App.css";

// const cors = require('cors')

const App = () => {
  const [yogurts, setYogurts] = useState([]);
  const fetchYogurts = async () => {
    try {
      let response = await fetch(`http://localhost:3000/yogurts`);
      let yogurtData = await response.json();
      console.log(yogurtData);
      
      setYogurts(yogurtData);
    } catch (error) {
      console.error("Error in Fetching:", error);
    }
  };
  useEffect(() => {
    fetchYogurts();
  }, []);

  return (
    <>
      <h1>Yogurt</h1>
      <div>
        {yogurts.map((yogurt, index) => (
          <div key={index}>
            <h3>{yogurt.name}</h3>
            <p>Flavor: {yogurt.flavor}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
