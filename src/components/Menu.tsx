import { useContext } from 'react';
import { StoreContext } from '../store/index.js';
import { Button, MenuList, MenuListItem } from 'react95';
import ClickAwayListener from 'react-click-away-listener';

import SnLogo from '../assets/snlogo.png';
import ComputerImage from '../assets/computer.png';

export const Menu = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_MENU', payload: !state.menu });
  };

  const _handleClose = () => {
    dispatch({ type: 'SET_MENU', payload: false });
  };

  const _handleListItemClick = (name: string) => {
    if (name === 'about') {
      dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
      dispatch({ type: 'SET_ABOUT_MODAL', payload: true });
      dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: false });
    }
  };

  const _handleClickAway = () => {
    if (state.menu) {
      dispatch({ type: 'SET_MENU', payload: false });
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {state.menu ? (
        <ClickAwayListener onClickAway={_handleClickAway}>
          <MenuList style={{ position: 'absolute', left: '0', top: '100%' }} onClick={_handleClose}>
            <MenuListItem onClick={() => _handleListItemClick('about')}>
              <img style={{ width: 22, marginRight: 8 }} src={ComputerImage} alt="aboutLogo" />
              <span>About</span>
            </MenuListItem>
          </MenuList>
        </ClickAwayListener>
      ) : null}
      <Button
        onClick={_handleClick}
        active={state.menu}
        style={{ fontWeight: 'bold', marginRight: 6 }}
      >
        <img
          src={SnLogo}
          alt="winlogo"
          style={{ marginLeft: -2, marginRight: 5, width: 20 }}
        />
        SN-OS
      </Button>
    </div>
  );
};
