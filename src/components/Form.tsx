import React, { Children, cloneElement } from "react";
import { Button } from "./elements/index";
import { useInputs } from "../hooks/index";
import { validators, getFormData } from "../utlis/index";

type Props = {
  style?: React.CSSProperties;
  onSubmit: (formData: {}, error: {}) => void;
};

export const Form: React.FC<Props> = ({ children, onSubmit, style = {} }) => {
  //TODO find the right type of the child element and replace with any.
  const inputs = Children.toArray(children)
    .filter((child: any) => child.type !== Button)
    .map((input: any) => input.props);

  const [updatedInputs, inputReset] = useInputs(inputs);

  const errors = validators(updatedInputs);
  
  const updatedChildren = Children.map(children, (child: any, i: number) =>
    cloneElement(child, { key: i, ...updatedInputs[i] })
  );

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const formData = getFormData(updatedInputs);
    onSubmit(formData, errors);
    if (!Object.values(errors).length) inputReset();
    
  };

  return (
    <form style={style} onSubmit={handleSubmit}>
      {updatedChildren}
    </form>
  );
};

export default Form;
