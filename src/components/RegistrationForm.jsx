import React, { useState } from 'react';
import "../App.css";
import { validateEmail } from '../utils';

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
    const [password, setPassword] = useState({
        value: '',
        isTouched: false,
    });

    const getFormValid = ()=> {
        return (
            firstName && 
            validateEmail(email) && 
            password.value.length >= 8 &&
            role !== "role"
        );
    }

    const clearForm = ()=> {
        setFirstName(" ");
        setLastName(" ");
        setEmail(" ");
        setPassword({
            value: ' ',
            isTouched: false,
        })
        e.preventDefault()
        // alert("Account created!")
        // clearForm();
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
                            value={firstName}
                            onChange={(e)=>{
                                setFirstName(e.target.value);
                            }} 
                            placeholder="First name"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Last Name <sup>*</sup>
                        </label>
                        <input 
                            type="text"
                            value={lastName}
                            onChange={(e)=> {
                                setLastName(e.target.value)
                            }} 
                            placeholder="Last name"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Email Address <sup>*</sup>
                        </label>
                        <input 
                            type="text"
                            value={email}
                            onChange={(e)=> {
                                setEmail(e.target.value)
                            }} 
                            placeholder="Email Address"
                        />
                    </div>
                    <div className='Field'>
                        <label>
                            Password <sup>*</sup>
                             </label>
                        <input 
                            type="password"
                            value={password.value}
                            onChange={(e)=> {
                                setPassword({...password, value: e.target.value});
                            }} 
                            onBlur={()=>{
                                setPassword({ ...password, isTouched: true});
                            }}
                            placeholder="Password"
                        />
                        {/* below checks if password is valid and length is above 8 */}
                        {password.isTouched && password.value.length < 8 ? (
                            <PasswordErrorMessage/>
                        ): null}
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

export default RegistrationForm;
