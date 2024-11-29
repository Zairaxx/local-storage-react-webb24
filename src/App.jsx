import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [myJSON, setMyJSON] = useState(JSON.parse(sessionStorage.getItem("Data")) || []);


  useEffect(() => {
    console.log("Sparar värdet i storage...")
    //Spara värdet i localStorage
    sessionStorage.setItem("Data", JSON.stringify(myJSON))
  },[myJSON])

  const saveData = () => {
    let newData = [{
      name:"Harold",
      age:18
    },
    {
      name: "Liza",
      age: 47
    }
  ]

  //Sparas i localStorage
  // sessionStorage.setItem("Data",JSON.stringify(newData))
  //Sparas i state
  setMyJSON(newData);
  }

  const addData = () => {
    let newData = {name: "Victoria", age: 77};

    let updatedData = [...myJSON, newData]
    setMyJSON(updatedData);
    //Spara i localStorage
    // sessionStorage.setItem("Data",JSON.stringify(updatedData));
    //Spara i state
  }

  return (
    <>
      <h1>Local storage in React</h1>
      <button onClick={saveData}>Save data</button>
      <button onClick={addData}>Lägg till</button>
      {myJSON.map(obj => <li>{obj.name} - {obj.age} år</li>)}
    </>
  )
}

export default App
