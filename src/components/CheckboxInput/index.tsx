import BaseInput from "components/BaseInput";
import BaseInputProps from "components/BaseInput/BaseInput.model"
import { InputGroup } from "react-bootstrap";
import './CheckboxInput.scss'

interface CheckboxInputProps extends BaseInputProps {
  isVal: boolean;
  onInputToggle: (input: boolean) => void;
}

function CheckboxInput(props: CheckboxInputProps) {
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
