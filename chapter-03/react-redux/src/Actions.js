import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption) => {
  console.log(counterCaption)
  console.log(counterCaption.target)
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
