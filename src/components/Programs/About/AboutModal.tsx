import { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { StoreContext } from '../../../store';

export const AboutModal = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_ABOUT_MODAL', payload: false });
    dispatch({ type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true });
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
  };

  return (
    <Window
      onClick={_handleClick}
      style={{
        width: 300,
        maxWidth: '94%',
        maxHeight: '100%',
        zIndex: state.activeModal === 'about' ? 2 : 1,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: state.aboutModal ? 'block' : 'none',
      }}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>About</span>
        <Button onClick={_handleClose}>
          <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p className="h1">Status Network</p>
        <p className="mt2">The gas-less network with sustainable funding for app builders</p>
        <p className="mt2">Launch and scale your social apps and games with truly free transactions.</p>
      </WindowContent>
    </Window>
  );
};
