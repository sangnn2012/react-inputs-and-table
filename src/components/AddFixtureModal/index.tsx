import { Modal, Button } from "react-bootstrap";
import TextInput from "components/TextInput";
import DropdownInput from "components/DropdownInput";
import CheckboxInput from "components/CheckboxInput";
import NumberInput from "components/NumberInput";
import IconButton from "components/IconButton";
import AddFixtureList from "components/AddFixtureList";
import "./AddFixtureModal.scss";
import { useState } from "react";
import plusIcon from "../../assets/images/plus-solid.svg";
import Fixture from 'models/Fixture.model'
import Pagination from 'models/Pagination.model'
interface AddFixtureModalProps {
  show: boolean,
  onHide: () => void
}



function AddFixtureModal(props: AddFixtureModalProps) {
  const loadTypes = ["0-10V (Fluorescent Ballast)", "0-10 (LED Driver)", "Ceiling Fan", "ELV/LED", "Fluorescent (2-wire)", "Incandescent", "MLV"];

  const [fixtureName, setFixtureName] = useState<string>("");
  const [loadType, setLoadType] = useState<string>("");
  const [isDim, setIsDim] = useState<boolean>(false);
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);
  const [fixtureWatts, setFixtureWatts] = useState<number>(0);
  const [fixtureType, setFixtureType] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [modelNumber, setModelNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [dataState, setDataState] = useState<Pagination>({
    take: 10,
    skip: 0,
  });

  function dataStateChange(event: { dataState: Pagination }) {
    setDataState(event.dataState);
  }
  function dataReceived(fixtures: Fixture[]) {
    setFixtures(fixtures);
  }
  function handleFixtureNameChange(newFixtureName: string) {
    console.log(newFixtureName);
    setFixtureName(newFixtureName);
  }
  function handleLoadTypeSelect(newLoadType: string) {
    console.log({ newLoadType });
    setLoadType(newLoadType);
  }
  function handleDimChange(newDimValue: boolean) {
    console.log({ newDimValue });
    setIsDim(newDimValue);
  }
  function handleLowerLimit(newLowerLimit: number) {
    console.log({ newLowerLimit });
    setLowerLimit(newLowerLimit);
  }
  function handleUpperLimit(newUpperLimit: number) {
    console.log({ newUpperLimit });
    setUpperLimit(newUpperLimit);
  }
  function handleFixtureWatts(newFixtureWatts: number) {
    console.log({ newFixtureWatts });
    setFixtureWatts(newFixtureWatts);
  }
  function handleFixtureTypeChange(newFixtureType: string) {
    console.log({ newFixtureType });
    setFixtureType(newFixtureType);
  }
  function handleManufacturerChange(newManufacturer: string) {
    console.log({ newManufacturer });
    setManufacturer(newManufacturer);
  }
  function handleModelNumberChange(newModelNumber: string) {
    console.log({ newModelNumber });
    setModelNumber(newModelNumber);
  }
  function handleDescriptionChange(newDescription: string) {
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
