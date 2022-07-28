import logo from './logo.svg';
//import './App.css';
import './index.css';
import { useState, useEffect } from 'react';

function RegistrationForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted,setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleFirstNameInputChange = ({target}) => setFirstName(target.value);
    const handleLastNameInputChange = ({target}) => setLastName(target.value);
    const handleEmailInputChange = ({target}) => setEmail(target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName && lastName && email) {
            setValid(true);
        }
        setSubmitted(true);
    }


  return (
    <div className="form-container">Registration Form
      <form className="registration-form" onSubmit={handleSubmit}>
      {submitted && valid ? <div className="success-message" >Success! Thank you for registering</div> : null}
        <input className="form-field"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameInputChange}/>
        {submitted && !firstName ? <span>Please enter a first name</span> : null }
        <input className="form-field"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameInputChange}/>
        {submitted && !lastName ? <span>Please enter a last name</span> : null}
        <input className="form-field"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailInputChange}/>
        {submitted && !email ? <span>Please enter an email address</span> : null}
        <button className="form-field" type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
