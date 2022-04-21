import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../state/action-creators";
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

// export default function Activity(props) {
function Activity(props) {
  const { activity, fetchRandomActivityFromApi } = props;

  useEffect(() => {
    fetchRandomActivityFromApi();
  }, []);
  return (
    <StyledActivity>
      <h2 className='sub'>Try this:</h2>
      <h1 className='head' id='activity'>
        {activity}
      </h1>
    </StyledActivity>
  );
}
const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps, actions)(Activity);
