import React from "react";
import PropTypes from "prop-types";
import BaseInput from "components/BaseInput";
import { InputGroup } from "react-bootstrap";
import './CheckboxInput.scss'
CheckboxInput.propTypes = {};

function CheckboxInput(props) {
  const { label, isRequired, isVal, onInputToggle } = props;
  function handleToggle() {
    if(onInputToggle) {
      const newVal = !isVal;
      onInputToggle(newVal)
    }
  }
  return (
    <div className="checkbox-input">
      <BaseInput label={label} isRequired={isRequired}>
        <InputGroup.Checkbox className="check-box" checked={isVal} aria-label="Checkbox for following text input" onChange={() => handleToggle()}/>
      </BaseInput>
    </div>
  );
}

export default CheckboxInput;
