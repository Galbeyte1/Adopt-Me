import { createRoot } from "react-dom";
import Pet from "./Pet";

// Your code is going to go here
// always capitalize components
const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="dog" breed="Havanese" />
    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
    <Pet name="Doink" animal="cat" breed="Mixed" />
    <div />
  </div>;
};

// We have a function but we aren't using it. Lets use it here.
// We essentially created a class but haven't instantiated it
const container = document.getElementById("root");
const root = createRoot(container); // Rendering to the DOM
root.render(<App />); // Notice: We are using create element again here
// We are creating components...made up of other components
