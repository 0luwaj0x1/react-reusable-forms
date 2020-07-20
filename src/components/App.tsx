import React from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="container">
      <RegistrationForm />
      <ContactForm />
    </div>
  );
}

export default App;
