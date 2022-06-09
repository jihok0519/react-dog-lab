import React from "react";

const Button = (props) => {
    const handleSubmit = () => {
        props.handleSubmitFromApp();
      };
    
      return (
        <button type="button" onClick={handleSubmit}>
          Get random dog!
        </button>
      );
    }

export default Button;