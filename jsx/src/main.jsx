
// 1) Import the React and ReactDom libraries
// import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const rootElement = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(rootElement);

// 4) Create a component
function App() {
  

  return <div style={{display: "flex", flexDirection: "column", gap:"20px"}}>
    {/* In JSX, the 'class' attribute is written as 'className' because 'class' is a reserve word in JavaScript */}
    <h1 className="main-title">JSX Rules</h1>

    {/* All props names follow camelCase */}
    <textarea name="text" autoFocus={true}></textarea>

    {/* In JSX Attributes meant to be numbers should be provide as numbers with curly braces */}
    <input type="number" maxLength={5} />

    {/* In JSX boolean 'true' can be written with just property name. 'False' should be written with curly braces */}
    <input spellCheck/>
  </div>
}

// 5) Show the component on the screen
root.render(<App/>);