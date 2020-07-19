import React from "react";

type Props = {
  text: string;
  style?: React.CSSProperties;
};

const Button = ({ text, style = {} }: Props) => (
  <button style={style} type="submit">
    {text}
  </button>
);

export default Button