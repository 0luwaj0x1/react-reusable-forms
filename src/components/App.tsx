import React from 'react';
import './App.css';
import Form from './Form'
import { Input, Button } from './elements/index'

function App() {

  const submisson = (formData: {}, errors: {}) => {
      console.log(formData, errors)
  }


  return (
    <div className="App">
        App
        <Form onSubmit={submisson} >

          <Input name="firstname" label="firstname" isrequired /> 
          <Input name="lastname" label="lastname" /> 
          <Button text="submit" />
        </Form>
    </div>
  );
}

export default App;
