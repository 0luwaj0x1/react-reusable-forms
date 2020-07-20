import React, { useState } from "react";
import Form from "./Form";
import { Input, Button } from "./elements/index";
import Result from './Result'

const RegistrationForm = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleRegistration = (
    formData: { [key: string]: string },
    errors: { [key: string]: string }
  ) => {
    setData(formData);
    setErrors(errors);
  };

  return (
    <div className="registration-form">
      <h4>Registration Form</h4>
      <Form onSubmit={handleRegistration}>
        <Input name="fullname" label="fullname" isRequired />
        <Input name="username" label="username" />
        <Input name="phone" label="phone" isRequired />
        <Input name="occupation" label="occupation" isRequired />
        <Button text="Sign up" />
      </Form>

      <Result data={data} errors={errors} /> 
    </div>

  );
};

export default RegistrationForm;
