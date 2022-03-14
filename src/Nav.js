import React from "react";
import { connect } from "react-redux";

const Nav = ({ teas, toppings, milks }) => {
  return (
    <nav>
      <a href="#teas">Teas ({teas.length})</a>
      <a href="#toppings">Toppings ({toppings.length}) </a>
      <a href="#milks">Milks ({milks.length}) </a>
    </nav>
  );
};

export default connect((state) => state)(Nav);
// connect should get passed to store
// ths allows us to map props
// "state => state" is equivalent to a function getting a state and returning the state
