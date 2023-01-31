// import Button from "./Button";
// import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Hello(){
  useEffect(() => {
    console.log("created :)")
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    
    setToDos((currentDos) => [toDo, ...currentDos]);
    setToDo("");
  }
  console.log("toDos",toDos)

  return (
    <div>
      <h1>My To-Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          onChange = {onChange}
          value={toDo}
          placeholder="Whire your to do...!"
        >
        </input>
        <button>Add To Do</button>

      </form>
    </div>
  )
  
}
export default App;
