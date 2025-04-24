import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// const store = createStore(todosReducer);
//https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
  reducer /* preloadedState, */,
  //commented window as not  allowed when using applyMiddleware but without it redux dev tools dont work
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&  
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
);

export default store;
