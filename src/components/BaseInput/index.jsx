import React from 'react';
import PropTypes from 'prop-types';
import './BaseInput.scss'
BaseInput.propTypes = {
    label: PropTypes.string,
    isRequired: PropTypes.bool,
};

function BaseInput(props) {
    const { label, isRequired } = props;
    return (
        <div className="base-input">
            {/* if require, * appear */}
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