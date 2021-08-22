import { ChangeEvent } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import BaseInput from "components/BaseInput";
import BaseInputModel from "components/BaseInput/BaseInput.model";

import downCaret from "../../assets/images/caret-down-solid.svg";
import upCaret from "../../assets/images/caret-up-solid.svg";

import "./NumberInput.scss";

interface NumberInputProps extends BaseInputModel {
  currentQuantity: number;
  onQuantityChange: (input: number) => void;
}

function NumberInput(props: NumberInputProps) {
  const { label, isRequired, currentQuantity, onQuantityChange } = props;
  function handleQuantityInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (onQuantityChange) {
      onQuantityChange(parseInt(event.target.value));
    }
  }
  function handleQuantityChange(operator: string) {
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
