import Button from "./Button"

function App() {
  return (
    <div>
      <div>
        <Button sucess rounded outline>Click Me!</Button>
      </div>
      <div>
        <Button danger outline>Buy Now</Button>
      </div>
      <div>
        <Button secondary outline >See Deal!</Button>
      </div>
      <div>
        <Button secondary rounded>Hide Ads</Button>
      </div>
      <div>
        <Button warning>Close</Button>
      </div>
    </div>
  )
}

export default App
