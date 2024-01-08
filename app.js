// const heading = React.createElement("h1", { id: "heading" }, "hello world");

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //convet into html and put into dom

//1. build this here--------------------->
// <div id="parent">
//   <div id="child">
//     <h1>hello world 1</h1>
//     <h2>hello world 2</h2>
//   </div>
// </div>;

const parent = React.createElement( 
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world 1"),
    React.createElement("h1", {}, "hello world 2"),
  ])
);

//jsx will help us to make this code to readable code 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
