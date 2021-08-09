import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import PropTypes from "prop-types";
import BaseInput from "components/BaseInput";
import downCaret from "../../assets/images/caret-down-solid.svg";
import upCaret from "../../assets/images/caret-up-solid.svg";

import "./NumberInput.scss";

NumberInput.propTypes = {};
NumberInput.defaultProps = {
  currentQuantity: 0,
};
function NumberInput(props) {
  const { label, isRequired, currentQuantity, onQuantityChange } = props;
  function handleQuantityInput(event) {
    if (onQuantityChange) {
      onQuantityChange(event.target.value);
    }
  }
  function handleQuantityChange(operator) {
    if (onQuantityChange) {
      switch (operator) {
        case "up":
          onQuantityChange(currentQuantity + 1);
          break;
        case "down":
          onQuantityChange(currentQuantity - 1);
          break;
        default:
          break;
      }
    }
  }
  return (
    <div className="number-input">
      <BaseInput label={label} isRequired={isRequired}>
        <InputGroup>
          <FormControl value={currentQuantity} aria-label="Add new Load here" aria-describedby="basic-addon2" onChange={(event) => handleQuantityInput(event)} />
          <div className="caret-wrapper">
            <Button className="caret-button caret-button-up" variant="primary" onClick={() => handleQuantityChange("up")}>
              <img className="up-caret" src={upCaret} alt="up-caret icon" />
            </Button>

            <Button className="caret-button caret-button-down" variant="primary" onClick={() => handleQuantityChange("down")}>
              <img className="down-caret" src={downCaret} alt="down-caret icon" />
            </Button>
          </div>
        </InputGroup>
      </BaseInput>
    </div>
  );
}

export default NumberInput;
