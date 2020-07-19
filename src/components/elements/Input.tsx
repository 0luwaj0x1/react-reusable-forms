import React from 'react'

type Props = {
  label: string;
  name: string;
  isrequired?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
};


 const Input = ({ label, name, style = {}, ...rest }: Props) => (
  <>
    {label && <label htmlFor={label}>{label}</label>}
    <input id={label} style={style} {...rest} />
  </>
);

export default Input;