import React, { useState } from "react";

/**
 * This file is a temporary place to test code. 
 * Nothing here is permanent—just use it to experiment.
 */

const Playground: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Sandbox Playground</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};


const FetchExample: React.FC = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const res = await fetch("/api/mock");
    const json = await res.json();
    setData(json.message);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <p>{data}</p>
    </div>
  );
};

export  { Playground, FetchExample} ;