const logger = (store) => (next) => (action) => {
    //store.dispatch prev reference is ---> next
    //action is function reference provided as input to --> next
  console.log("logger initial", store.getState());
  next(action);
  console.log("logger later store", store.getState());
};
export default logger;
