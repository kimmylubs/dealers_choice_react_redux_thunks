import React from "react";
import { connect } from "react-redux";
import { createTopping } from "./store";

const adj = ["Black Jelly",'White Jelly','Lychee Jelly','Popping Jelly','Brown Boba'] 

const Topping = ({ toppings, createTopping }) => {
  return (
    <div>
      <h4> Topping Options (ﾉ◕ヮ◕)ﾉ*✲ﾟ*｡⋆</h4>
      <button id='CreateButton' onClick={() => createTopping(adj[Math.floor(Math.random() * adj.length)])}>Create Topping </button>
      <ul >
        {toppings.map((topping) => {
          return <li key={topping.id}>{topping.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTopping: (name) => {
      dispatch(createTopping(name));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Topping);
