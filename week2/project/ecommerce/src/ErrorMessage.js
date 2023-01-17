import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <p className="errorParagraph">
      <b>{errorMessage}</b>
    </p>
  );
};

export default ErrorMessage;
