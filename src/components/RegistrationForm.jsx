import React, { useState } from 'react'

// uncontrolled inputs
// const Form = () => {
// const inputRef = useRef(null);

// const handleSubmit = ()=> {
//     const inputValue = inputRef.current.value;

// }
//   return (
//     <div>
//       <input ref={inputRef} type="text"/>
//     </div>
//   )
// }

// // controlled componenets
// const Form = ()=>{
//     const [value, setValue] = useState(" ");
    
//     const handleChange = (e)=> {
//         setValue(e.target.value)
//     }

//     return(
//         <form>
//             <input
//             value={value}
//             onChange={handleChange}
//             type="text"
//             />
//         </form>
//     )
// }

const RegistrationForm = ()=> {
    const [value, setValue] =("");

    const handleChange =(e) => {
        e.preventDefault()
        console.log("Here we are!!")
    }

    return(
        <form action="">
            <label htmlFor="firstName">First Name: </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="First name"
            />
            <br />
            <label htmlFor="lastName">Last Name: </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="Last name"
            />
            <br />
            <label htmlFor="email">Email Address: </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="Email Address"
            />
            <br />
            <label htmlFor="Password">Password: </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="Password"
            />
            <br />
            <label htmlFor="Role">Role: </label>
            <input 
                type="text"
                value={value}
                onChange={handleChange} 
                placeholder="Role"
            />
            <br />
            <button>CREATE ACCOUNT</button>
        </form>

    )
}

export default RegistrationForm
