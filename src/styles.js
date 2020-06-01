//Styles
import styled from "styled-components";
//Material-UI
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import "typeface-roboto";

export const StyledLocationSuggestions = styled.div`
  background-color: #fff;
  padding: 12px 16px;
  color: #3f51b5;
  &:hover {
    background-color: #3f51b5;
    cursor: pointer;
    color: #fff;
  }
`;

export const StyledLocationList = styled.div`
  min-width: 350px;
  max-width: 350px;
  width: 50%;
  margin: 0 auto;
`;

export const DisplayBox = styled.div`
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Screen = styled.div``;

export const StyledLocationInputField = styled(TextField)`
  width: 350px;
  label.focused {
    color: #3f51b5;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border: 2px solid #3f51b5;
    }
    &:hover fieldset {
      border-color: #3f51b5;
    }
    &.Mui-focused fieldset {
      border-color: #3f51b5;
      color: #3f51b5;
    }
  }
`;

export const StyledInputDiv = styled.div`
  margin: 15px;
`;

export const StyledFormControl = styled(FormControl)`
  width: 250px;
  margin: 15px;
`;

export const ResponseText = styled.h2`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1.3rem;
  width: 70%;
  margin: 0 auto;
  color: #3f51b5;
  margin-top: 15px;
`;

export const HeadingText = styled.h1`
  font-family: Roboto;
  font-weight: 600;
  font-size: 2rem;
  width: 95%;
  max-width: 380px;
  margin: 0 auto;
  margin-bottom: 15px;
  color: #3f51b5;
`;

export const SmallerHeadingText = styled.h3`
  font-family: Roboto;
  font-weight: 400;
  font-size: 1rem;
  width: 95%;
  max-width: 380px;
  margin: 0 auto;
  color: #3f51b5;
`;
