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

const Teas = ({ teas, create, destroy }) => {
  return (
    <div>
      <h4> 🍵 Tea Options 🍵 </h4>
      <button id='CreateButton' onClick={() => create(adj[Math.floor(Math.random() * adj.length)])}> Create Tea </button>
      <ul >
        {teas.map((tea) => {
          return <li key={tea.id}>{tea.name} 
          <button id='xButton' onClick={()=>destroy(tea)}> x </button></li>;
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    create: (name) => {
      dispatch(createTea(name));
    },
    destroy: (tea) => {
      dispatch(deleteTea(tea));
    }
  };
};

export default connect(mapState, mapDispatchToProps)(Teas);
