import React from "react";
import "./App.css";
import ActivityForm from "./components/activityForm";
import Activity from "./components/activity";
import styled from "styled-components";

const StyledApp = styled.div`
  * {
    font-family: "Kanit", sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: "DM Serif Display", serif;
    color: ${(props) => props.theme.colors.black};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }

  p {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSize.p};
  }

  button {
    padding: 20px;
    border: 0;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.vibrant.clarent};
    transition: transform ${(props) => props.theme.animation.double},
      opacity ${(props) => props.theme.animation.base};
    svg {
      margin-right: 10px;
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: pointer;
  }

  button:hover {
    transform: translateY(-20px);
    opacity: 1;
  }
`;

function App() {
  return (
    <StyledApp className='App'>
      <Activity />
      <ActivityForm />
    </StyledApp>
  );
}

export default App;
