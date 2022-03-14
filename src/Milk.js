import React from "react";
import { connect } from "react-redux";

const Milk = ({ milks }) => {
  return (
    <div>
        Milk Options
      <ul>
        {milks.map((milk) => {
          return <li key={milk.id}>{milk.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default connect(state => state)(Milk);