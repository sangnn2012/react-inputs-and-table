import React from "react";
import PropTypes from "prop-types";
import { Dropdown, ButtonGroup, FormControl } from "react-bootstrap";
import BaseInput from "components/BaseInput/index.jsx";

import "./DropdownInput.scss";
DropdownInput.propTypes = {
  currentItem: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onItemChosen: PropTypes.func,
};

function DropdownInput(props) {
  const { label, placeholder, isRequired, currentItem, options, onItemChosen } = props;
  function handleItemChosen(name) {
    if (onItemChosen) {
      onItemChosen(name);
    }
  }
  function handleInputChange(event) {
    if (onItemChosen) {
      onItemChosen(event.target.value);
    }
  }
  return (
    <div className="dropdown-input">
      {/* <BaseInput label={"Room Name"} isRequired={true}>
        <Form.Select value={currentItem} onChange={(event) => handleItemChosen(event)} placeholder="Select Room..." aria-label="">
          <option value={null}>{null}</option>
          <option>...Add new</option>
          {options.map((name, index) => (
            <option value={name} key={`${name}-${index}`}>
              {name}
            </option>
          ))}
        </Form.Select>
      </BaseInput> */}

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
