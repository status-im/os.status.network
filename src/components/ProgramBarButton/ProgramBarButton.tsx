import { useContext } from 'react';
import { StoreContext } from '../../store';
import { Button } from 'react95';
import {EPrograms} from "../../store/types.ts";

export type ProgramBarButtonProps = {
  program: EPrograms,
  programLogo: string,
  programLabel: string
}

export const ProgramBarButton: React.FC<ProgramBarButtonProps> = (props) => {
  const {
    program,
    programLogo,
    programLabel
  } = props;

  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClick = () => {
    if (!state.visiblePrograms)
      dispatch({ type: 'SET_ACTIVE_MODAL', payload: program });
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: program, state: !state.visiblePrograms[program]} });
  };

  return state.openPrograms[program] ? (
    <Button
      onClick={_handleClick}
      active={state.visiblePrograms[program]}
      className="bold"
      style={{ marginRight: 3 }}
    >
      <img
        src={programLogo}
        alt={`programLogo-${program}`}
        style={{ marginLeft: -2, marginRight: 5, width: 20 }}
      />
      {programLabel}
    </Button>
  ) : null;
};
