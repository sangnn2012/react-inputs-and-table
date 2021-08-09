import React from "react";
import { Modal, Button } from "react-bootstrap";
import TextInput from "components/TextInput";
import DropdownInput from "components/DropdownInput";
import CheckboxInput from "components/CheckboxInput";
import NumberInput from "components/NumberInput";
import IconButton from "components/IconButton";
import AddFixtureList from "components/AddFixtureList";
import "./AddFixtureModal.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import plusIcon from "../../assets/images/plus-solid.svg";
AddFixtureModal.propTypes = {};

function AddFixtureModal(props) {
  const loadTypes = ["0-10V (Fluorescent Ballast)", "0-10 (LED Driver)", "Ceiling Fan", "ELV/LED", "Fluorescent (2-wire)", "Incandescent", "MLV"];

  const [fixtureName, setFixtureName] = useState("");
  const [loadType, setLoadType] = useState("");
  const [isDim, setIsDim] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const [fixtureWatts, setFixtureWatts] = useState("");
  const [fixtureType, setFixtureType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [description, setDescription] = useState("");
  const [fixtures, setFixtures] = useState([]);
  const [dataState, setDataState] = useState({
    take: 10,
    skip: 0,
  });

  function dataStateChange(event) {
    setDataState(event.dataState);
  }
  function dataReceived(fixtures) {
    setFixtures(fixtures);
  }
  function handleFixtureNameChange(newFixtureName) {
    console.log(newFixtureName);
    setFixtureName(newFixtureName);
  }
  function handleLoadTypeSelect(newLoadType) {
    console.log({ newLoadType });
    setLoadType(newLoadType);
  }
  function handleDimChange(newDimValue) {
    console.log({ newDimValue });
    setIsDim(newDimValue);
  }
  function handleLowerLimit(newLowerLimit) {
    console.log({ newLowerLimit });
    setLowerLimit(newLowerLimit);
  }
  function handleUpperLimit(newUpperLimit) {
    console.log({ newUpperLimit });
    setUpperLimit(newUpperLimit);
  }
  function handleFixtureWatts(newFixtureWatts) {
    console.log({ newFixtureWatts });
    setFixtureWatts(newFixtureWatts);
  }
  function handleFixtureTypeChange(newFixtureType) {
    console.log({ newFixtureType });
    setFixtureType(newFixtureType);
  }
  function handleManufacturerChange(newManufacturer) {
    console.log({ newManufacturer });
    setManufacturer(newManufacturer);
  }
  function handleModelNumberChange(newModelNumber) {
    console.log({ newModelNumber });
    setModelNumber(newModelNumber);
  }
  function handleDescriptionChange(newDescription) {
    console.log({ newDescription });
    setDescription(newDescription);
  }

  function addFixtureClick() {
    console.log("Add fixture clicked!");
  }
  return (
    <div className="add-fixture-modal">
      <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add to Fixture Library</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-fixture-modal-body">
          <div className="inputs">
            <TextInput label={"Fixture Name"} placeholder={"Add Fixture Name"} isRequired={true} currentValue={fixtureName} onInputChange={handleFixtureNameChange} />
            <DropdownInput label={"Load Type:"} placeholder={"Load Type"} isRequired={true} currentItem={loadType} options={loadTypes} onItemChosen={handleLoadTypeSelect} />
            <CheckboxInput label={"Dim"} isRequired={false} isVal={isDim} onInputToggle={handleDimChange}></CheckboxInput>
            <NumberInput label={"Lower Limit(%)"} isRequired={false} currentQuantity={lowerLimit || 0} onQuantityChange={handleLowerLimit} />
            <NumberInput label={"Upper Limit(%)"} isRequired={false} currentQuantity={upperLimit || 0} onQuantityChange={handleUpperLimit} />
            <NumberInput label={"Fixture Watts:"} isRequired={true} currentQuantity={fixtureWatts || 0} onQuantityChange={handleFixtureWatts} />
            <TextInput label={"Fixture Type"} placeholder={"Add new Fixture Type here"} isRequired={false} currentValue={fixtureType} onInputChange={handleFixtureTypeChange} />
            <TextInput label={"Manufacturer"} placeholder={"Add Manufacturer name here"} isRequired={false} currentValue={manufacturer} onInputChange={handleManufacturerChange} />
            <TextInput label={"Model Number"} placeholder={"Add Model Number here"} isRequired={false} currentValue={modelNumber} onInputChange={handleModelNumberChange} />
            <TextInput label={"Description"} placeholder={"Enter Description"} isRequired={false} currentValue={description} onInputChange={handleDescriptionChange} />
            <IconButton label={"Add Fixture"} iconSrc={plusIcon} theme={"success"} onButtonClick={addFixtureClick} />
          </div>
          <div className="fixture-list">
              <AddFixtureList fixtures={fixtures} dataState={dataState} onDataStateChange={dataStateChange} onDataReceived={dataReceived}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddFixtureModal;
