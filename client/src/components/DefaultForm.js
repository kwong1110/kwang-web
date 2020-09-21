import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  text-align: center;
  margin: 2rem;
`;

function DefaultForm({ children, onSubmit = null, ...rest }) {
  return (
    <StyledForm onSubmit={onSubmit} {...rest}>
      {children}
    </StyledForm>
  );
}

export default DefaultForm;
