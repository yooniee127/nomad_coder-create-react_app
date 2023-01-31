// import Button from "./Button";
// import styles from "./App.module.css"
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0)
  const onClick = () => setValue((prev) => prev + 1);
  
  console.log("I run all the time.");
  useEffect(() => {
    console.log("I run only once OR Call the API")
  }, []);
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
  </div>
  );
}
export default App;
