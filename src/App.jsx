import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [myJSON, setMyJSON] = useState(JSON.parse(sessionStorage.getItem("Data")) || []);


  //Ett sätt att synka localStorage med state är att använda en useEffect

  //Varje gång myJSON ändrar värde, uppdaterar vi även localStorage
  useEffect(() => {
    console.log("Sparar värdet i storage...")
    
    localStorage.setItem("Data", JSON.stringify(myJSON))
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

  //Sparar i localStorage - behövs inte pga vår useEffect
  // localStorage.setItem("Data",JSON.stringify(newData))
  setMyJSON(newData);
  }

  const addData = () => {
    let newData = {name: "Victoria", age: 77};

    let updatedData = [...myJSON, newData]
    setMyJSON(updatedData);

    //Sparar i localStorage - behövs inte pga vår useEffect

    // localStorage.setItem("Data",JSON.stringify(updatedData));
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
