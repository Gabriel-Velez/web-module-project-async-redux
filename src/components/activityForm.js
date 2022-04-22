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
  faHandHoldingDollar,
  faHammer,
  faDove,
  faMusic,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledActivityForm = styled.div`
  #submit {
    transition: transform ${(props) => props.theme.animation.base};
    margin-bottom: 50px;
    &:hover,
    &:focus {
      transform: scale(1.125);
    }
  }

  button.disabled {
    opacity: 0.4;
    cursor: pointer;
    transition: transform ${(props) => props.theme.animation.double},
      opacity ${(props) => props.theme.animation.base};
    &:hover,
    &:focus {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  .active {
    cursor: default;
  }

  .attribute {
    color: ${(props) => props.theme.colors.grey};
  }

  .row {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 25px;
    margin: 25px;
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

function Form(props) {
  const { fetchRandomActivityFromApi, fetchSpecificActivityFromApi } = props;

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
    const typeValue = document.querySelector("#type .active").value;
    const participantsValue = document.querySelector("#participants .active").value;
    const priceMax = document.querySelector("#price .active").getAttribute("max");
    const priceMin = document.querySelector("#price .active").getAttribute("min");

    const url = new URL("http://www.boredapi.com/api/activity?");
    if (typeValue) url.searchParams.append("type", typeValue);
    if (participantsValue) url.searchParams.append("participants", participantsValue);
    if (priceMin) url.searchParams.append("minprice", priceMin);
    if (priceMax) url.searchParams.append("maxprice", priceMax);
    fetchSpecificActivityFromApi(url.href);
    window.scrollTo(0, 0);
  };
  return (
    <StyledActivityForm>
      <button id='submit' onClick={handelSubmit}>
        Gimme somthein else
      </button>
      <h3 className='attribute'>Type:</h3>
      <div className='row type' id='type'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        {/*value is "type" for api call*/}
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

        <button className='disabled' onClick={selectCurrentButton} value='diy'>
          <FontAwesomeIcon icon={faHammer} /> DIY
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='charity'>
          <FontAwesomeIcon icon={faDove} /> Charity
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='music'>
          <FontAwesomeIcon icon={faMusic} /> Music
        </button>
        <button className='disabled' onClick={selectCurrentButton} value='busywork'>
          <FontAwesomeIcon icon={faPersonWalking} /> Errands
        </button>
      </div>
      <h3 className='attribute'>Peeps:</h3>
      <div className='row participants' id='participants'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        {/*value is "participants" for api call*/}
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
      <h3 className='attribute'>Price:</h3>
      <div className='row price' id='price'>
        <button className='active' onClick={selectCurrentButton} value={null}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        {/*value is "minprice", "maxprice" for api call*/}
        <button className='disabled' onClick={selectCurrentButton} max={0}>
          <FontAwesomeIcon icon={faHandHoldingDollar} /> Free
        </button>
        <button className='disabled' onClick={selectCurrentButton} min={0.1} max={0.5}>
          <FontAwesomeIcon icon={faCoins} /> Affordable
        </button>
        <button className='disabled' onClick={selectCurrentButton} min={0.5} max={1}>
          <FontAwesomeIcon icon={faMoneyBills} /> Expensive
        </button>
      </div>
    </StyledActivityForm>
  );
}
export default connect((st) => st, actions)(Form);
