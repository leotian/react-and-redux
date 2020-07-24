import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

// 产生并派发action对象的函数——action构造函数
export const increment = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  });
};

export const decrement = (counterCaption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};
