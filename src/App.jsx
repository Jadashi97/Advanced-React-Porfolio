import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import DessertList from './MullaList';
import MullaList from './MullaList';
import RegistrationForm from './components/RegistrationForm';

const mullas = [
  {
    name: "bamiya",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "weka",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "pondu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "keimot",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>List of Mama's Mula</h2>
      {/* <MullaList data={mullas}/> */}
      {<RegistrationForm/>}
    </div>
  )
}

export default App
