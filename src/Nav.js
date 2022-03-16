import React from "react";
import { connect } from "react-redux";

const Nav = ({ teas, toppings, milks }) => {
  return (
    <div>
      <nav>
        <a href="#teas">Pick A Tea!</a> 
        <a href="#toppings">Pick Toppings! </a>
        <a href="#milks">Pick A Milk!</a>
      </nav>
    </div>
  );
};

export default connect((state) => state)(Nav);
// connect should get passed to store
// ths allows us to map props
// "state => state" is equivalent to a function getting a state and returning the state
