// const heading = React.createElement("h1", { id: "heading" }, "welcome back");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// more complex code
{
  /* <div id="parent">
      <div class="child1">
        <h1>here h1</h1>
        <h2>here h2</h2>
      </div>
    </div>
    <div class="child2">
      <h3>here h3</h3>
      <h4>here h4</h4>
    </div> */
}

const h1 = React.createElement("h1", {}, "here h1");
const h2 = React.createElement("h2", {}, "here h2");

const h3 = React.createElement("h3", {}, "here h3");
const h4 = React.createElement("h4", {}, "here h4");

const child1=React.createElement("div",{},[h1,h2])
const child2=React.createElement("div",{},[h3,h4])


const parent=React.createElement("div",{},[child1,child2])


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)





