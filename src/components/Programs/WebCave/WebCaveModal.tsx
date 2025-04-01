import { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { StoreContext } from '../../../store';
import {EPrograms} from "../../../store/types.ts";

export const WebCaveModal = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_OPEN_PROGRAM', payload: {program: EPrograms.WEB_CAVE, state: false}});
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: EPrograms.WEB_CAVE, state: false}});
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: EPrograms.WEB_CAVE });
  };

  return (
    <Window
      onClick={_handleClick}
      style={{
        width: 300,
        maxWidth: '94%',
        maxHeight: '100%',
        zIndex: state.activeModal === EPrograms.WEB_CAVE ? 2 : 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: state.visiblePrograms[EPrograms.WEB_CAVE] ? 'block' : 'none',
      }}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>WebCave</span>
        <Button onClick={_handleClose}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        test
      </WindowContent>
    </Window>
  );
};
