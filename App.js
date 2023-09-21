import React from "react";

import ReactDOM from "react-dom/client";

const title = <h1>This is htitle</h1>;

//React  Componenet

const HeadingComponent = () => {
  return (
    <div id="constainer">
      {title}
      <h1>This is the heading</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
