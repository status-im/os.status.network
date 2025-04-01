import { createContext, useReducer } from 'react';
import {AppState} from "./types.ts";

const initialState: AppState = {
  menu: false,
  visiblePrograms: {},
  openPrograms: {},
  activeProgram: undefined
};

export const StoreContext = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload,
      };
    case 'SET_VISIBLE_PROGRAM': {
      return {
        ...state,
        visiblePrograms: {
          ...state.visiblePrograms,
          [action.payload.program]: action.payload.state
        }
      }
    }
    case 'SET_OPEN_PROGRAM': {
      return {
        ...state,
        openPrograms: {
          ...state.openPrograms,
          [action.payload.program]: action.payload.state
        }
      }
    }
    case 'SET_ACTIVE_PROGRAM': {
      return {
        ...state,
        activeProgram: action.payload
      }
    }
    default:
      return state;
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </StoreContext.Provider>
  )
};

export default Store;
