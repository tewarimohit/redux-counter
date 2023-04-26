import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  decrease(state, action) {
    state.counter = state.counter - state.action;
  },
  toggle(state) {
    state.showCounter = !state.showCounter;
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrease") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
