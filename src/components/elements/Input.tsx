import React from 'react'

type Props = {
  label: string;
  name: string;
  isRequired?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
};


 const Input = ({ label, isRequired = false, name, style = {}, ...rest }: Props) => (
  <>
    {label && <label htmlFor={label}>{label}</label>}
    <input id={label} style={style} {...rest} />
  </>
);

export default Input;