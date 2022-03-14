import { createStore, combineReducers, applyMiddleware } from "redux";

// ACTION TYPES
const LOAD_TEAS = "LOAD_TEAS";
const LOAD_TOPPINGS = "LOAD_TOPPINGS";
const LOAD_MILKS = "LOAD_MILKS";
const SET_VIEW = "SET_VIEW";

// ACTION CREATORS
const loadTeas = (teas) => {
  return {
    type: LOAD_TEAS,
    teas,
  };
};

const loadToppings = (toppings) => {
  return {
    type: LOAD_TOPPINGS,
    toppings,
  };
};

const loadMilks = (milks) => {
  return {
    type: LOAD_MILKS,
    milks,
  };
};

const setView = (view) => {
  return {
    type: SET_VIEW,
    view,
  };
};

// COMBINE REDUCERS
const teaReducer = (state = [], action) => {
  if (action.type === LOAD_TEAS) {
    state = action.teas;
  }
  return state;
};

const toppingReducer = (state = [], action) => {
  if (action.type === LOAD_TOPPINGS) {
    state = action.toppings;
  }
  return state;
};

const milkReducer = (state = [], action) => {
  if (action.type === LOAD_MILKS) {
    state = action.milks;
  }
  return state;
};

const viewReducer = (state = "teas", action) => {
    if (action.type === SET_VIEW) {
      state = action.view;
    }
    return state;
  };

const reducer = combineReducers({
  teas: teaReducer,
  toppings: toppingReducer,
  milks: milkReducer,
  view: viewReducer
});

// CREATE STORE

const store = createStore(reducer);

export default store;

export { loadTeas, loadToppings, loadMilks, setView };
