import { createRoot } from "react-dom/client";
import SearchParams from "../SearchParams";
// Your code is going to go here
// always capitalize components
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// We have a function but we aren't using it. Lets use it here.
// We essentially created a class but haven't instantiated it
const container = document.getElementById("root");
const root = createRoot(container); // Rendering to the DOM
root.render(<App />); // Notice: We are using create element again here
// We are creating components...made up of other components
