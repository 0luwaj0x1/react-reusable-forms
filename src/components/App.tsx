import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm'
import ContactForm from './ContactForm'

function App() {

  /* const  = (formData: {}, errors: {}) => {
      console.log( errors)
  } */


  return (
    <div className="container">
        <RegistrationForm />
        <ContactForm />
    </div>
  );
}

export default App;
