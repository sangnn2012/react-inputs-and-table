import { useState } from "react";
import DropdownInput from "components/DropdownInput";
import AddLoadInput from "components/AddLoadInput";
import TextInput from "components/TextInput";
import NumberInput from "components/NumberInput";
import CheckboxInput from "components/CheckboxInput";
import IconButton from "components/IconButton";
import AddFixtureModal from 'components/AddFixtureModal';
import plusIcon from '../../assets/images/plus-solid.svg';
import contactIcon from '../../assets/images/address-book-solid.svg';
import "./Inputs.scss";

interface InputsProps {
  onSubmitForm: Function
}

function Inputs(props: InputsProps) {
  const { onSubmitForm } = props;


  const roomNames = ["Kitchen", "Basement", "Bedroom 1", "Equipment Room", "Kids Room", "Master Bath 1", "Kitchen", "Basement", "Bedroom 1", "Equipment Room", "Kids Room", "Master Bath 1"];
  const fixtureTypes = ["Type 1", "Type 2", "Type 3", "Type 4", "Type 5"];
  const loadTypes = ["0-10V (Fluorescent Ballast)", "0-10 (LED Driver)", "Ceiling Fan", "ELV/LED", "Fluorescent (2-wire)", "Incandescent", "MLV"];
  const [modalShow, setModalShow] = useState<boolean>(false);

  const [roomName, setRoomName] = useState<string>("");
  const [loadName, setLoadName] = useState<string>("");
  const [circuit, setCircuit] = useState<string>("");
  const [fixtureType, setFixtureType] = useState<string>("");
  const [loadType, setLoadType] = useState<string>("");
  const [fixtureQuantity, setFixtureQuantity] = useState<number>(0);
  const [fixtureWatts, setFixtureWatts] = useState<number>(0);
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);
  const [isDim, setIsDim] = useState<boolean>(false);

  function handleSelectRoom(roomChosen: string) {
    console.log({ roomChosen });
    setRoomName(roomChosen);
  }
  function handleLoadNameChange(newLoadName: string) {
    console.log({ newLoadName });
    setLoadName(newLoadName);
  }
  function handleCircuitChange(newCircuit: string) {
    console.log({ newCircuit });
    setCircuit(newCircuit);
  }
  function handleFixtureTypeSelect(newFixtureType: string) {
    console.log({ newFixtureType });
    setFixtureType(newFixtureType);
  }
  function handleLoadTypeSelect(newLoadType: string) {
    console.log({ newLoadType });
    setLoadType(newLoadType);
  }
  function handelFixtureQuantity(newFixtureQuantity: number) {
    console.log({ newFixtureQuantity });
    setFixtureQuantity(newFixtureQuantity);
  }
  function handleFixtureWatts(newFixtureWatts: number) {
    console.log({ newFixtureWatts })
    setFixtureWatts(newFixtureWatts);
  }
  function handleDimChange(newDimValue: boolean) {
    console.log({ newDimValue })
    setIsDim(newDimValue);
  }
  function handleLowerLimit(newLowerLimit: number) {
    console.log({ newLowerLimit })
    setLowerLimit(newLowerLimit);
  }
  function handleUpperLimit(newUpperLimit: number) {
    console.log({ newUpperLimit })
    setUpperLimit(newUpperLimit);
  }

  function handleFormSubmit() {
    console.log("Submit to API");
  }

  function clearState() {
    setRoomName('');
    setLoadName('');
    setCircuit('');
    setFixtureType('');
    setLoadType('');
    setFixtureQuantity(0);
    setFixtureWatts(0);
    setLowerLimit(0);
    setUpperLimit(0);
    setIsDim(false);
  }

  function handleAdd() {
    console.log("Add");
    const data = {
      RoomName: roomName,
      LoadName: loadName,
      CircuitNumber: circuit,
      FixtureType: fixtureType,
      LoadType: loadType,
      FixtureQuantity: fixtureQuantity,
      FixtureWatts: fixtureWatts,
      IsDim: isDim,
      LowerLimit: lowerLimit,
      UpperLimit: upperLimit,
    }
    if(onSubmitForm) {
      onSubmitForm(data);
      clearState();
    }
  }
  function handOpenFixtureLibrary() {
    setModalShow(true);
  }
  return (
    <div className="inputs">
      <h2>Inputs</h2>
      <div className="input-fields">
        <DropdownInput label={"Room Name:"} placeholder={"Room Name..."} isRequired={true} currentItem={roomName} options={roomNames} onItemChosen={handleSelectRoom} />
        <AddLoadInput label={"Add Load:"} isRequired={true} onInputChange={handleLoadNameChange} onSubmit={handleFormSubmit} />
        <TextInput label={"Circuit #"} placeholder={"Circuit #"} isRequired={false} currentValue={circuit} onInputChange={handleCircuitChange} />
        <DropdownInput label={"Fixture Type:"} placeholder={"Fixture Type"} isRequired={false} currentItem={fixtureType} options={fixtureTypes} onItemChosen={handleFixtureTypeSelect} />
        <DropdownInput label={"Load Type:"} placeholder={"Load Type"} isRequired={true} currentItem={loadType} options={loadTypes} onItemChosen={handleLoadTypeSelect} />
        <NumberInput label={"Fixture Qty:"} isRequired={true} currentQuantity={fixtureQuantity} onQuantityChange={handelFixtureQuantity} />
        <NumberInput label={"Fixture Watts:"} isRequired={true} currentQuantity={fixtureWatts} onQuantityChange={handleFixtureWatts} />
        <CheckboxInput label={"Dim"} isRequired={false} isVal={isDim} onInputToggle={handleDimChange}></CheckboxInput>
        <NumberInput label={"Lower Limit(%)"} isRequired={false} currentQuantity={lowerLimit} onQuantityChange={handleLowerLimit} />
        <NumberInput label={"Upper Limit(%)"} isRequired={false} currentQuantity={upperLimit} onQuantityChange={handleUpperLimit} />

        <IconButton label={"Add"} iconSrc={plusIcon} theme={'primary'} onButtonClick={handleAdd} />
        <IconButton label={"Fixture Library"} iconSrc={contactIcon} theme={'success'} onButtonClick={handOpenFixtureLibrary} />
      </div>

      <AddFixtureModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Inputs;
