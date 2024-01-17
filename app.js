import React from "react";
import ReactDOM from "react-dom/client";

//element
const elem = <span> element</span>;
//element
const jsxHeading = <h1 className="heading">Welcome to Jsx{elem}</h1>;

//functional component
const Title = () => (
  <div>
    <h1 className="demo">demo</h1>
  </div>
);

//component composition
const Component = () => (
  <div>
    {jsxHeading}
    <h1>main</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
