import React from "react";
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
        background-color: ${(props) => props.theme.colors.vibrant.candyPink};
      }
    }
  }
`;

// function Form(props) {
export default function Form(props) {
  const selectCurrentButton = (e) => {
    const parentElem = e.target.parentElement;
    parentElem.childNodes.forEach((child) => {
      child.classList.add("disabled");
      child.classList.remove("active");
    });
    e.target.classList.remove("disabled");
    e.target.classList.add("active");
  };
  return (
    <StyledActivityForm>
      <h3>Type</h3>
      <div className='row type'>
        <button className='active' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faGraduationCap} /> Educational
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faComments} /> Social
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faCouch} /> Relaxing
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faUtensils} /> Cooking
        </button>
      </div>
      <h3>Number of Participants</h3>
      <div className='row participants'>
        <button className='active' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faUser} /> Solo
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faUserGroup} /> Duo
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faUsers} /> Group
        </button>
      </div>
      <h3>Price</h3>
      <div className='row price'>
        <button className='active' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faDice} /> Random
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faCoins} /> Cheap
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faMoneyBills} /> Affordable
        </button>
        <button className='disabled' onClick={selectCurrentButton}>
          <FontAwesomeIcon icon={faSackDollar} /> Expensive
        </button>
      </div>

      <button id='submit'>Gimme somthing todo!</button>
    </StyledActivityForm>
  );
}
// const mapStateToProps = (state) => {
//   return {
//   };
// };

// export default connect(mapStateToProps, actions)(Form);
