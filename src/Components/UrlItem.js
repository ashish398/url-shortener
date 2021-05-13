import React from "react";

const UrlItem = (props) => {
  return (
    <li key={props.id}>
      <span>{props.long_url}</span>
      <span>
        <a href={`${props.long_url}`}> {props.id} </a>
      </span>
    </li>
  );
};

export default UrlItem;
