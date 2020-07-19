import React from 'react'

type Props = {
  label: string;
  name: string;
  isrequired?: boolean;
  placeholder?: string;
  cols?: number;
  rows?: number;
  style?: React.CSSProperties;
};

const Textarea = ({ label, style = {}, ...rest }: Props) => (
  <>
    {label && <label htmlFor={label}>{label}</label>}
    <textarea id={label} style={style} {...rest}></textarea>
  </>
);

export default Textarea;