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
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default TextArea;