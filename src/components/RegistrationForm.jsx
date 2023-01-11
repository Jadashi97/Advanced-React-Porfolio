import React, { useState } from 'react';
import "../App.css";

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

const PasswordErrorMessage = ()=>{
    return(
        <p className='FieldError'>Password should have atleast 8 characters</p>
    );
};

const RegistrationForm = ()=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("role");
    const [Password, setPassword] = useState({
        value: ' ',
        isTouched: false,
    });


    const handleChange =(e) => {
        e.preventDefault()
        console.log("Here we are!!")
    };

    const handleSubmit = ()=> {
        alert("Account Created!");
        clearForm();
    };

    

    return(
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className='Field'>
                        <label>
                            First Name <sup>*</sup>
                        </label>
                        <input 
                            type="text"
                            value={value}
                            onChange={handleChange} 
                            placeholder="First name"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Last Name <sup>*</sup>
                        </label>
                        <input 
                            type="text"
                            value={value}
                            onChange={handleChange} 
                            placeholder="Last name"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Email Address <sup>*</sup>
                        </label>
                        <input 
                            type="text"
                            value={value}
                            onChange={handleChange} 
                            placeholder="Email Address"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Password <sup>*</sup>
                             </label>
                        <input 
                            type="text"
                            value={value}
                            onChange={handleChange} 
                            placeholder="Password"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Role <sup>*</sup>
                        </label>
                        <select>
                            <option value={"role"}>Role</option>
                            <option value={"individual"}>Individual</option>
                            <option value={"business"}>Business</option>
                        </select>
                    </div>
                    <button type='submit' disabled={!getFormValid()}>
                        CREATE ACCOUNT
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default RegistrationForm
