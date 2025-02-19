import React from "react";
import { Playground, FetchExample } from "../playground";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Sandbox</h1>
      <Playground />
      <FetchExample />
    </div>
  );
};

export default HomePage;
