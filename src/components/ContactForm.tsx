import React, {useState} from "react";
import Form from "./Form";
import { Input, Textarea, Button } from "./elements/index";
import Result from './Result'

const ContactForm = () => {

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleContactForm = (
    formData: { [key: string]: string },
    errors: { [key: string]: string }
  ) => {
    setData(formData);
    setErrors(errors);
  };
  return (
    <div className="contact-form">
      <h4>Contact Form</h4>
      
      <Form onSubmit={handleContactForm}>
        <Input name="firstname" label="firstname" placeholder="firstname" isRequired />
        <Input name="lastname" label="lastname" placeholder="lastname" isRequired />
        <Textarea name="message" label="message" placeholder="send us a message" cols={30} rows={5} isRequired />
        <Button style={ { width: 'auto'} } text="Send us a Message" />
      </Form>

      <Result data={data} errors={errors} />
    </div>
  );
};

export default ContactForm