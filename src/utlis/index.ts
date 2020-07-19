
import { InputTypes } from '../hooks/index'



export const getFormData = (inputs: InputTypes[]) => 

inputs.reduce((formData, {name, value})  => ({...formData, [name]: value}), {})


export const validators = (inputs: InputTypes[]) => {
  
  const errors: any = {}

   inputs.forEach(input => {
     if(input.isrequired && !input.value) {
       errors[input.name] = `${input.name} is required`
     }
   })
 
    return errors;
 
 }