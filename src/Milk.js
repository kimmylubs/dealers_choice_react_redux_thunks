import React from "react";
import { connect } from "react-redux";
import { createMilk } from "./store";

const adj = ["Soy", "Low-Fat", "Rice", "Coconut", "Cashew"];

const Milk = ({ milks, createMilk }) => {
  return (
    <div>
      <h4> 🥛 Milk Options 🥛</h4>
      <button id="CreateButton" onClick={() => createMilk(adj[Math.floor(Math.random() * adj.length)])}>
        Create Milk
      </button>
      <ul>
        {milks.map((milk) => {
          return <li key={milk.id}>{milk.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMilk: (name) => {
      dispatch(createMilk(name));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Milk);
