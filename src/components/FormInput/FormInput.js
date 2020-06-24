import React from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './formInput.styles';

const FormInput = ({ label, ...props }) => (
  <GroupContainer>
    <FormInputContainer {...props} />
    {label ? (
      <FormInputLabel>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;