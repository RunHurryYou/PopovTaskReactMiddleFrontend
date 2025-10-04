import { useReducer } from 'react';
import type { IUseToggle } from '../../types/hook.types';

const useToggle = <T>(values: T[]):IUseToggle<T> => {
  const initState = {
    values: values,
    value: values[0]
  };

  const reducer = (state: typeof initState, action: { type: string, payload?: T }) => {
    switch (action.type) {
      case 'TOGGLE': {
        if (action.payload) {
          return {
            ...state,
            value: action.payload
          }
        }
        const index = state.values.indexOf(state.value);
        const nextIndex = index === state.values.length - 1 ? 0 : index + 1;
        return {
          ...state,
          value: state.values[nextIndex]
        }
      }
      default: {
        return state;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  const toggle = (value?: T) => {
    if (value) {
      dispatch({ type: 'TOGGLE', payload: value });
    } else {
      dispatch({ type: 'TOGGLE' });
    }
  }

  return [state.value, toggle]
}

export default useToggle