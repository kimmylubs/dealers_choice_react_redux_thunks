import React from "react";
import { connect } from "react-redux";

const Tea = ({ teas }) => {
  return (
    <div>
        Tea Options 
      <ul>
        {teas.map((tea) => {
          return <li key={tea.id}>{tea.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default connect(state => state)(Tea);