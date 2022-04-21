import React from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faGraduationCap,
  faComments,
  faCouch,
  faUtensils,
  faUser,
  faUserGroup,
  faUsers,
  faCoins,
  faMoneyBills,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
// import { connect } from "react-redux";
import styled from "styled-components";

/* background-color: ${(props) => randomProperty(props.color.vibrant)}; */
const StyledActivityForm = styled.div`
  #submit {
    transition: transform ${(props) => props.theme.animation.base};
    margin-top: 25px;
  }
  #submit:hover {
    transform: scale(1.125);
  }

  button.disabled {
    opacity: 0.4;
    cursor: pointer;
  }

  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 50px;
    margin: 25px 0;
    &.type {
      button {
        background-color: ${(props) => props.theme.colors.vibrant.blueJeans};
      }
    }
    &.participants {
      button {
        background-color: ${(props) => props.theme.colors.vibrant.coral};
      }
    }
    &.price {
      button {
        background-color: ${(props) => props.theme.colors.vibrant.limeGreen};
      }
    }
  }
`;

// export default function Form(props) {
function Form(props) {
  const { fetchRandomActivityFromApi } = props;

  const selectCurrentButton = (e) => {
    const parentElem = e.target.parentElement;
    parentElem.childNodes.forEach((child) => {
      child.classList.add("disabled");
      child.classList.remove("active");
    });
    e.target.classList.remove("disabled");
    e.target.classList.add("active");
  };

  const handelSubmit = () => {
    fetchRandomActivityFromApi();
  };
  return (
    <StyledActivityForm>
      <h3>Type</h3>
      <div className='row type' id='type'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='education'>
          <FontAwesomeIcon icon={faGraduationCap} /> Educational
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='social'>
          <FontAwesomeIcon icon={faComments} /> Social
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='relaxation'>
          <FontAwesomeIcon icon={faCouch} /> Relaxing
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='cooking'>
          <FontAwesomeIcon icon={faUtensils} /> Cooking
        </button>
      </div>
      <h3>Peeps</h3>
      <div className='row participants' id='participants'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={1}>
          <FontAwesomeIcon icon={faUser} /> Solo
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={2}>
          <FontAwesomeIcon icon={faUserGroup} /> Duo
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={3}>
          <FontAwesomeIcon icon={faUsers} /> Group
        </button>
      </div>
      <h3>Price</h3>
      <div className='row price' id='price'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={[0, 25]}>
          <FontAwesomeIcon icon={faCoins} /> Cheap
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={[25, 50]}>
          <FontAwesomeIcon icon={faMoneyBills} /> Affordable
        </button>
        <button className='disabled' onClick={selectCurrentButton} value={[50, 100]}>
          <FontAwesomeIcon icon={faSackDollar} /> Expensive
        </button>
      </div>

      <button id='submit' onClick={handelSubmit}>
        Gimme somthing todo!
      </button>
    </StyledActivityForm>
  );
}
export default connect((st) => st, actions)(Form);
