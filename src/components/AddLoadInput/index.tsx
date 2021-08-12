import { InputGroup, FormControl, Button } from 'react-bootstrap';
import BaseInput from 'components/BaseInput';
import './AddLoadInput.scss';
import plusIcon from '../../assets/images/plus-circle-solid.svg';
import BaseInputModel from 'components/BaseInput/BaseInput.model';
import { ChangeEvent } from 'react';

interface AddLoadInputProps extends BaseInputModel {
    onInputChange: Function,
    onSubmit: Function
}

function AddLoadInput(props: AddLoadInputProps) {
    const { label, isRequired, onInputChange, onSubmit } = props;
    function handleInputChange(event: ChangeEvent<any>) {
        if (onInputChange) {
            onInputChange(event.target.value)
        }
    }
    function handleSubmit() {
        if (onSubmit) {
            onSubmit()
        }
    }
    return (
        <div className="add-load-input">
            <BaseInput label={label} isRequired={isRequired}>
                <InputGroup>
                    <FormControl
                        placeholder="Add new Load here"
                        aria-label="Add new Load here"
                        aria-describedby="basic-addon2"
                        onChange={(event) => handleInputChange(event)}
                    />
                    <Button variant="secondary" id="button-addon2" onClick={handleSubmit}>
                        <img className="plus-icon" src={plusIcon} alt='plus icon'/>
                    </Button>
                </InputGroup>
            </BaseInput>
        </div>
    );
}

export default AddLoadInput;