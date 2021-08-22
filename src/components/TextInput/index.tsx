import { ChangeEvent } from "react";
import { FormControl } from "react-bootstrap";
import "./TextInput.scss";
import BaseInput from "components/BaseInput";
import BaseInputModel from "components/BaseInput/BaseInput.model";

interface TextInputProps extends BaseInputModel {
  placeholder: string;
  currentValue:  string;
  onInputChange: (input: string) => void;
}

function TextInput(props: TextInputProps) {
  const { label, placeholder, isRequired, currentValue, onInputChange } = props;
  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
