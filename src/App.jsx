import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
// import DessertList from './MullaList';
// import MullaList from './MullaList';
// import RegistrationForm from './components/RegistrationForm';
// import SwitchDetails from './components/SwitchDetails';
import { ThemeProvider } from './ThemeContext';
// import LearnHooks from './components/LearnHooks';
// import SpendgiftCard from './components/SpendgiftCard';
// import UseEffectPrac from './components/UseEffectPrac';
// import TheUseRefHook from './components/TheUseRefHook';
// import CustomHooks from './components/CustomHooks';
// import RadioCompo from './components/RadioCompo';
// import LearnHocRender from './components/LearnHocRender';
import FeedBackForm from './components/FeedBackForm';

// // use this for the the Registration form
// const mullas = [
//   {
//     name: "bamiya",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "weka",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "pondu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "keimot",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];



function App() {
  const [count, setCount] = useState(0)
  
  // handleSubmit for the feedback form
  const handleSubmit = ()=>{
    console.log("Form Submitted!");
  }
  
  
  return (
    <ThemeProvider>
      <div className="App">
        {/* <h2>List of Mama's Mula</h2> */}
        {/* <MullaList data={mullas}/> */}
        {/* {<RegistrationForm/>} */}
        {/* <SwitchDetails/> */}
        {/* <LearnHooks/> */}
        {/* <SpendgiftCard/> */}
        {/* <UseEffectPrac/> */}
        {/* <TheUseRefHook/> */}
        {/* <CustomHooks/> */}
        {/* <RadioCompo/> */}
        {/* <LearnHocRender/> */}
        <FeedBackForm onSubmit={handleSubmit}/>
      </div>
    </ThemeProvider>
  )
}

export default App
