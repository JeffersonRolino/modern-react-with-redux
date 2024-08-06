function App() {
  // JSX RULE: In JSX, inline styles are provided as objects
  return <div style={{display: "flex", flexDirection: "column", gap:"20px"}}>
    {/* JSX RULE: In JSX, the 'class' attribute is written as 'className' because 'class' is a reserve word in JavaScript */}
    <h1 className="main-title">JSX Rules</h1>

    {/* JSX RULE: All props names follow camelCase */}
    <textarea name="text" autoFocus={true}></textarea>

    {/* JSX RULE: In JSX Attributes meant to be numbers should be provide as numbers with curly braces */}
    <input type="number" maxLength={5} />

    {/* JSX RULE: In JSX boolean 'true' can be written with just property name. 'False' should be written with curly braces */}
    <input spellCheck/>
  </div>
}

export default App;