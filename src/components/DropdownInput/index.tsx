import { ChangeEvent } from "react";
import { Dropdown, ButtonGroup, FormControl } from "react-bootstrap";
import BaseInput from "components/BaseInput";
import BaseInputModel from "components/BaseInput/BaseInput.model";
import "./DropdownInput.scss";

interface DropdownInputProps extends BaseInputModel {
  placeholder: string,
  currentItem: string,
  options: Array<string>,
  onItemChosen: Function
}

function DropdownInput(props: DropdownInputProps) {
  const { label, placeholder, isRequired, currentItem, options, onItemChosen } = props;
  function handleItemChosen(name: string | null) {
    if (onItemChosen) {
      onItemChosen(name);
    }
  }
  function handleInputChange(event: ChangeEvent<any>) {
    if (onItemChosen) {
      onItemChosen(event.target.value);
    }
  }
  return (
    <div className="dropdown-input">
      <BaseInput label={label} isRequired={isRequired}>
        <Dropdown as={ButtonGroup}>
          <FormControl className='dropdown-form' value={currentItem} onChange={(event) => handleInputChange(event)} type="text" placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon1" />
          <Dropdown.Toggle variant="primary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item eventKey={""} onSelect={() => handleItemChosen("")}>
              {"Add new..."}
            </Dropdown.Item>
            {options.map((name, index) => (
              <Dropdown.Item eventKey={name} onSelect={(name) => handleItemChosen(name)} key={`${name}-${index}`}>
                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </BaseInput>
    </div>
  );
}

export default DropdownInput;
