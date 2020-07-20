import React from "react";

type Props = {
  data: { [key: string]: string };
  errors: { [key: string]: string };
};

const Result = ({ data, errors }: Props) => {
  return (
    <div className="show-result">
      {Object.values(errors).length ? (
        <ul>
          <p> Whoops! 🤬</p>
          {Object.keys(errors).map((key) => (
            <li style={{ color: "red" }} key={key}>
              {errors[key]}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              <strong>{key}</strong>: {data[key]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Result;