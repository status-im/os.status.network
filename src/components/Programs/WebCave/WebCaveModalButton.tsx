import { useContext } from 'react';
import { StoreContext } from '../../../store';
import { Button } from 'react95';

import WebCaveImage from '../../../assets/webcave.png';
import {EPrograms} from "../../../store/types.ts";

export const WebCaveModalButton = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: EPrograms.WEB_CAVE });
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: EPrograms.WEB_CAVE, state: !state.visiblePrograms[EPrograms.WEB_CAVE]} });
  };

  return state.openPrograms[EPrograms.WEB_CAVE] ? (
    <Button
      onClick={_handleClick}
      active={state.visiblePrograms[EPrograms.WEB_CAVE]}
      className="bold"
      style={{ marginRight: 3 }}
    >
      <img
        src={WebCaveImage}
        alt="webcaveLogo"
        style={{ marginLeft: -2, marginRight: 5, width: 20 }}
      />
      WebCave
    </Button>
  ) : null;
};
