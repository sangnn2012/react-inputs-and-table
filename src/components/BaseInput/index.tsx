import BaseInputProps from './BaseInput.model';
import './BaseInput.scss';

function BaseInput(props: BaseInputProps) {
    const { label, isRequired } = props;
    return (
        <div className="base-input">
            <div className="label">
                { label }
                {
                    isRequired && <span className="required">*</span>
                }
            </div>
            <div className="input-component">
                { props.children }
            </div>
        </div>
    );
}

export default BaseInput;