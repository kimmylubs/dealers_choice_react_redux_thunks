import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Provider, connect } from "react-redux";
import store, { loadMilks, loadTeas, loadToppings, setView } from "./store";
import Toppings from "./Toppings";
import Tea from "./Tea";
import Milk from "./Milk";
import Nav from "./Nav";

const App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootstrap: async () => {
        const teas = (await axios.get("/api/teas")).data;
        dispatch(loadTeas(teas));
        const toppings = (await axios.get("/api/toppings")).data;
        dispatch(loadToppings(toppings));
        const milks = (await axios.get("/api/milks")).data;
        dispatch(loadMilks(milks));
      },
      setView: function (view) {
        dispatch(setView(view));
      },
    };
  }
)(
  class App extends Component {
    componentDidMount() {
      this.props.bootstrap();
      window.addEventListener("hashchange", () => {
        this.props.setView(window.location.hash.slice(1));
      });
      this.props.setView(window.location.hash.slice(1));
    }
    render() {
      const { view } = this.props;
      return (
        <div>
          <Nav />
          <br />
            {view === "teas" && <Tea />}
            {view === "toppings" && <Toppings />}
            {view === "milks" && <Milk />}
        </div>
      );
    }
  }
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
