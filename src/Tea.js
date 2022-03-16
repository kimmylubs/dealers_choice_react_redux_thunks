import React from "react";
import { connect } from "react-redux";
import {createTea, deleteTea} from './store';

const adj = ['Green', 'Black', 'Oolong', 'Lychee', 'Rose', 'White', 'Herbal', 'Yellow', 'Blue', 'Guayusa', 'Puerh', 'Chamomile', 'Ginger', 'Hibisuc', 'Lemon', 'PassionFlower', 'Peppermint', 'Exhiancea', 'Rooibos', 'Rosehip', 'Chai', 'Dandelion', 'ElderBerry'];

// function generator() {
//  return adj[Math.floor(Math.random() * adj.length)];;;
// }

// Tea.generateRandom = function () {
//   const name = generator();
//   return this.create({ name});
// };

const Teas = ({ teas, createTea, deleteTea }) => {
  return (
    <div>
      <h4> 🍵 Tea Options 🍵 </h4>
      <button id='CreateButton' onClick={() => createTea(adj[Math.floor(Math.random() * adj.length)])}> Create Tea </button>
      <ul >
        {teas.map((tea) => {
          return <li key={tea.id}>{tea.name}
          <button onClick={()=>deleteTea(tea)}> x </button></li>;
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    createTea: (name) => {
      dispatch(createTea(name));
    },
    destory: (teas) => {
      dispatch(deleteTea(teas));
    }
  };
};

export default connect(mapState, mapDispatchToProps)(Teas);
