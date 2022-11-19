import React from "react";

export const LinkButton = ({ isLink = false, text }) => {
  if (isLink) {
    return (
      <div>
        <p>link button</p>
      </div>
    );
  } else return <button>{text}</button>;
};
