import React, {PropsWithChildren, useContext} from "react";
import {StoreContext} from "../../store";
import {EPrograms} from "../../store/types.ts";
import {Button, Window, WindowContent, WindowHeader} from "react95";

export type ProgramModalProps = {
  program: EPrograms,
  programLabel: string,
  width?: number
}

const ProgramModal: React.FC<PropsWithChildren<ProgramModalProps>> = (props) => {
  const {
    program,
    programLabel,
    width
  } = props;

  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_OPEN_PROGRAM', payload: {program: program, state: false}});
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: program, state: false}});
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: program });
  };

  if (!state.openPrograms[program]) {
    return null;
  }

  return (
    <Window
      onClick={_handleClick}
      style={{
        width,
        maxWidth: '94%',
        maxHeight: '100%',
        zIndex: state.activeModal === program ? 2 : 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: state.visiblePrograms[program] ? 'block' : 'none',
      }}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>{programLabel}</span>
        <Button onClick={_handleClose}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        {props.children}
      </WindowContent>
    </Window>
  );
}

export default ProgramModal;