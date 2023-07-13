import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
// Your code is going to go here
// always capitalize components
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

// We have a function but we aren't using it. Lets use it here.
// We essentially created a class but haven't instantiated it
const container = document.getElementById("root");
const root = createRoot(container); // Rendering to the DOM
root.render(<App />); // Notice: We are using create element again here
// We are creating components...made up of other components
