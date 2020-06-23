import React from 'react';
import {
  GroupContainer,
  FormInputLabel,
  TextAreaContainer
} from './formInput.styles';

const TextArea = ({ label, ...props }) => (
  <GroupContainer>
    <TextAreaContainer {...props} />
    {label ? (
      <FormInputLabel>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default TextArea;