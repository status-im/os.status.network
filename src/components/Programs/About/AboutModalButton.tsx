import { useContext } from 'react';
import { StoreContext } from '../../../store';
import { Button } from 'react95';

import ComputerImage from '../../../assets/computer.png';
import {EPrograms} from "../../../store/types.ts";

export const AboutModalButton = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: EPrograms.ABOUT });
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: EPrograms.ABOUT, state: !state.visiblePrograms[EPrograms.ABOUT]} });
  };

  return state.openPrograms[EPrograms.ABOUT] ? (
    <Button
      onClick={_handleClick}
      active={state.visiblePrograms[EPrograms.ABOUT]}
      className="bold"
      style={{ marginRight: 3 }}
    >
      <img
        src={ComputerImage}
        alt="computerLogo"
        style={{ marginLeft: -2, marginRight: 5, width: 20 }}
      />
      About
    </Button>
  ) : null;
};
