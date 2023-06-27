const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),   
    ]);
};

// Your code is going to go here
// always capitalize components
const App = () => {
    return React.createElement(
        "div",
        {}, // whatever atributes that we are handing out. 
        [
            React.createElement("h1", {}, "Adopt Me!"),
            // Information flowing from App to the Pet component, through properties
            React.createElement(Pet, {
                animal: "Dog",
                name: "Luna",
                breed: "Havanese"
            }),
            React.createElement(Pet, {
                animal: "Bird",
                name: "Pepper",
                breed: "Cockatiel"
            }),
            React.createElement(Pet, {
                animal: "Cay",
                name: "Doink",
                breed: "Mixed"
            }),

        ]
    )
};

// We have a function but we aren't using it. Lets use it here.
// We essentially created a class but haven't instantiated it
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Rendering to the DOM
root.render(React.createElement(App)); // Notice: We are using create element again here
// We are creating components...made up of other components

