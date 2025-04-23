import React from "react";

import {useContext} from 'react';
import {StoreContext} from '../../store';
import {Button, MenuList, MenuListItem, Separator} from 'react95';
import ClickAwayListener from 'react-click-away-listener';

import SnLogo from '../../assets/snlogo.png';
import ComputerImage from '../../assets/computer.png';
import RakiaLogo from "../../assets/rakia.png"
import WebCaveImage from '../../assets/webcave.png';
import BridgeLogo from "../../assets/bridge.png";
import IDELogo from '../../assets/ide.png';

import {EPrograms} from "../../store/types";

export const Menu = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_MENU', payload: !state.menu });
  };

  const _handleClose = () => {
    dispatch({ type: 'SET_MENU', payload: false });
  };

  const _handleListItemClick = (program: EPrograms) => {
    dispatch({ type: 'SET_ACTIVE_PROGRAM', payload: program });
    dispatch({ type: 'SET_OPEN_PROGRAM', payload: {program, state: true} });
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program, state: true} });
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
            <MenuListItem onClick={() => _handleListItemClick(EPrograms.ABOUT)}>
              <img style={{ width: 22, marginRight: 8 }} src={ComputerImage} alt="aboutLogo" />
              <span>About</span>
            </MenuListItem>
            <Separator/>
            <MenuListItem onClick={() => _handleListItemClick(EPrograms.RAKIA)}>
              <img style={{width: 22, marginRight: 8}} src={RakiaLogo} alt="rakiaLogo"/>
              <span>Rakia Split</span>
            </MenuListItem>
            <MenuListItem onClick={() => _handleListItemClick(EPrograms.WEB_CAVE)}>
              <img style={{width: 22, marginRight: 8}} src={WebCaveImage} alt="webcaveLogo"/>
              <span>WebCave</span>
            </MenuListItem>
            <MenuListItem onClick={() => _handleListItemClick(EPrograms.SN_BRIDGE)}>
              <img style={{width: 22, marginRight: 8}} src={BridgeLogo} alt="snBridgeLogo"/>
              <span>SN Bridge</span>
            </MenuListItem>
            <MenuListItem onClick={() => _handleListItemClick(EPrograms.REMIX)}>
              <img style={{width: 22, marginRight: 8}} src={IDELogo} alt="ideLogo"/>
              <span>IDE</span>
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
