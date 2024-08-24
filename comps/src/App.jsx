import Button from "./Button";
import {GoBell, GoCheckCircleFill , GoCodeOfConduct  } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("clicked!!!");
  }

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}> <GoBell/>Click Me!</Button>
      </div>
      <div>
        <Button secondary className="mb-5 mt-5"><GoCheckCircleFill /> Buy Now</Button>
      </div>
      <div>
        <Button success outline> <GoCodeOfConduct /> See Deal!</Button>
      </div>
      <div>
        <Button warning rounded>Hide Ads</Button>
      </div>
      <div>
        <Button danger rounded>Close</Button>
      </div>
    </div>
  )
}

export default App
