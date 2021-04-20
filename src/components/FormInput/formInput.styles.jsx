import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -5px;
  font-size: 12px;
  color: ${mainColor};

  @media screen and (max-width: 480px) {
    top: -4px;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 35px 0;

  @media screen and (max-width: 480px) {
    margin: 5px 0;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }

  @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
      padding: 5px 5px 5px 3px;
    }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 5px 5px 5px 2.5px;
    margin: 15px 0;
  }
`;

export const TextAreaContainer = styled.textarea`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    &:focus {
        outline: none;
    }
    &:focus ~ label {
        ${shrinkLabelStyles}
    }

    @media screen and (max-width: 480px) {
      font-size: 16px;
      padding: 7px 7px 7px 3px;
      margin: 15px 0;
    }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    top: 5px;
    left: 3px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;