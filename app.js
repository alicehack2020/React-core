import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="heading">Welcome to Jsx</h1>;

const Title = () => (
  <div>
    <h1 className="demo">demo</h1>
  </div>
);


//component composition
const Component = () => (
  <div>
    <h1>main</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
