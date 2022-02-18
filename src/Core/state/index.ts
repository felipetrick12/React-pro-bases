import { CounterAction } from '../actions';
import { CounterState } from '../interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        prev: 0,
        changes: 0,
      };
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        prev: state.counter,
      };
    default:
      return state;
  }
};
