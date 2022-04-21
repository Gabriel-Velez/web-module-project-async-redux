import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../state/action-creators";
const StyledActivity = styled.div`
  margin: 50px 0;
  .sub {
    color: ${(props) => props.theme.colors.grey};
    margin: 0;
  }
  .head {
    text-decoration: underline;
  }
  .error {
    color: ${(props) => props.theme.colors.vibrant.clarent};
  }
`;

function Activity(props) {
  const { activity, error, fetchRandomActivityFromApi } = props;

  useEffect(() => {
    fetchRandomActivityFromApi();
  }, []);
  return (
    <StyledActivity>
      <h2 className='sub'>Try this:</h2>
      <h1 className='head' id='activity'>
        {activity}
      </h1>
      <div className='error'>{error}</div>
    </StyledActivity>
  );
}
const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    error: state.error,
  };
};

export default connect(mapStateToProps, actions)(Activity);
