import "./App.css";
import { useState, useEffect } from "react";

function url(path) {
  //   the path being passed in /api/
  return process.env.NODE_ENV === "development"
    ? `http://localhost:1234${path}`
    : path;
}

function App() {
  const [data, setData] = useState("Hi");
  useEffect(() => {
    setData(data + "!");
    fetch(url(/api/))
      .then((res) => res.json())
      .then((apiData) => setData(apiData.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">API Data returned: {data}</header>
    </div>
  );
}

export default App;
