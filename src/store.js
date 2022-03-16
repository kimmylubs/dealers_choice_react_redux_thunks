import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// ACTION TYPES
const LOAD_TEAS = "LOAD_TEAS";
const LOAD_TOPPINGS = "LOAD_TOPPINGS";
const LOAD_MILKS = "LOAD_MILKS";
const SET_VIEW = "SET_VIEW";
const CREATE_TEA = "CREATE_TEA";
const CREATE_TOPPING = "CREATE_TOPPING";
const CREATE_MILK = "CREATE_MILK";
const DELETE_TEA = "DELETE_TEA";
const DELETE_TOPPING = "DELETE_TOPPING";
const DELETE_MILK = "DELETE_MILK;";

// ACTION CREATORS
const loadTeas = (teas) => ({ type: LOAD_TEAS, teas });
const loadToppings = (toppings) => ({ type: LOAD_TOPPINGS, toppings });
const loadMilks = (milks) => ({ type: LOAD_MILKS, milks });
const setView = (view) => ({ type: SET_VIEW, view });
const _createTea = (tea) => ({ type: CREATE_TEA, tea });
const _createTopping = (topping) => ({ type: CREATE_TOPPING, topping });
const _createMilk = (milk) => ({ type: CREATE_MILK, milk });
const _deleteTea = (tea) => ({ type: DELETE_TEA, tea });

// FUNCTIONS (read with applyMiddleWare and redux-thunk)

const createTea = (name) => {
  return async (dispatch) => {
    const tea = (await axios.post("/api/teas", { name })).data;
    dispatch(_createTea(tea));
  };
};

const createTopping = (name) => {
  return async (dispatch) => {
    const topping = (await axios.post("/api/toppings", { name })).data;
    dispatch(_createTopping(topping));
  };
};

const createMilk = (name) => {
  return async (dispatch) => {
    const milk = (await axios.post("/api/milks", { name })).data;
    dispatch(_createMilk(milk));
  };
};

const deleteTea = (tea) => {
  return async (dispatch) => {
    await axios.delete(`/api/teas/${tea.id}`);
    dispatch({ type: "DESTROY_TEA", tea });
  };
};
// COMBINE REDUCERS

const teaReducer = (state = [], action) => {
  console.log(action);
  if (action.type === LOAD_TEAS) {
    state = action.teas;
  }
  if (action.type === CREATE_TEA) {
    state = [...state, action.tea];
  }
  if (action.type === "DESTROY_TEA") {
    const teas = state.filter((tea) => tea.id !== action.tea.id);
    return teas;
  }
  return state;
};

const toppingReducer = (state = [], action) => {
  if (action.type === LOAD_TOPPINGS) {
    state = action.toppings;
  }
  if (action.type === CREATE_TOPPING) {
    state = [...state, action.topping];
  }
  return state;
};

const milkReducer = (state = [], action) => {
  if (action.type === LOAD_MILKS) {
    state = action.milks;
  }
  if (action.type === CREATE_MILK) {
    state = [...state, action.milk];
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
  view: viewReducer,
});

// CREATE STORE

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export {
  loadTeas,
  loadToppings,
  loadMilks,
  setView,
  createTea,
  createTopping,
  createMilk,
  deleteTea,
};
