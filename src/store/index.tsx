import { createContext, useReducer } from 'react';
import {AppState} from "./types.ts";

const initialState: AppState = {
  menu: false,
  aboutModal: false,
  activeModal: '',
  hideAboutModalButton: true,
  tab: 0,
};

export const StoreContext = createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload,
      };
    case 'SET_ABOUT_MODAL':
      action.payload && setBodyOverflow('hidden');
      return {
        ...state,
        aboutModal: action.payload,
      };
    case 'SET_TAB':
      return {
        ...state,
        tab: action.payload,
      };
    case 'SET_ACTIVE_MODAL':
      return {
        ...state,
        activeModal: action.payload,
      };
    case 'SET_HIDE_ABOUT_MODAL_BUTTON':
      action.payload && setBodyOverflow('visible');
      return {
        ...state,
        hideAboutModalButton: action.payload,
      };
    default:
      return state;
  }
}

function setBodyOverflow(property) {
  document.body.style.overflow = property;
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
