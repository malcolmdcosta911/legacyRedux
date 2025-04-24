import { createStore } from "redux";
import reducer from "./reducer";
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// const store = createStore(todosReducer);
//https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
  reducer /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
