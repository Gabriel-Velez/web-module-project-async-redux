import React from "react";
// import { connect } from "react-redux";
import styled from "styled-components";

/* background-color: ${(props) => randomProperty(props.color.vibrant)}; */
const StyledActivity = styled.div`
  margin: 50px 0;
  .sub {
    color: ${(props) => props.theme.colors.grey};
    margin: 0;
  }
  .head {
    text-decoration: underline;
  }
`;

// function Form(props) {
export default function Form(props) {
  return (
    <StyledActivity>
      <h2 className='sub'>Try this!</h2>
      <h1 className='head'>Activty goes here</h1>
    </StyledActivity>
  );
}
// const mapStateToProps = (state) => {
//   return {
//   };
// };

// export default connect(mapStateToProps, actions)(Form);
