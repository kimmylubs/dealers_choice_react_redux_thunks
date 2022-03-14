import React from "react";
import { connect } from "react-redux";

const Topping = ({ toppings }) => {
  return (
    <div>
        Topping Options
      <ul>
        {toppings.map((topping) => {
          return <li key={topping.id}>{topping.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default connect(state => state)(Topping);