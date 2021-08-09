import React from "react";
import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import "./TextInput.scss";
import BaseInput from "components/BaseInput";
TextInput.propTypes = {};

function TextInput(props) {
  const { label, placeholder, isRequired, currentValue, onInputChange } = props;
  function handleInputChange(event) {
    if (onInputChange) {
      onInputChange(event.target.value);
    }
  }
  return (
    <div className="text-input">
      <BaseInput label={label} isRequired={isRequired}>
        <FormControl placeholder={placeholder} aria-label={label} aria-describedby="basic-addon2" value={currentValue} onChange={(event) => handleInputChange(event)} />
      </BaseInput>
    </div>
  );
}

export default TextInput;
