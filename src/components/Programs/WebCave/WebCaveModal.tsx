import { useContext } from 'react';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { StoreContext } from '../../../store';
import {EPrograms} from "../../../store/types.ts";
import { WebCave } from "@acid-info/webcave-react"

import BackgroundTexture from "../../../assets/webcave/background.png"
import BlockThumbsTexture from "../../../assets/webcave/blockthumbs.png"
import PlayerTexture from "../../../assets/webcave/player.png"
import TerrainTexture from "../../../assets/webcave/terrain.png"
import { TexturePack } from '@acid-info/webcave-react/src'

export const TEXTURE_PACK: TexturePack = {
  terrain: TerrainTexture,
  player: PlayerTexture,
  backgroundImage: BackgroundTexture,
  blockThumbsImage: BlockThumbsTexture
}

export const WebCaveModal = () => {
  const [state, dispatch] = useContext<any>(StoreContext);

  const _handleClose = () => {
    dispatch({ type: 'SET_OPEN_PROGRAM', payload: {program: EPrograms.WEB_CAVE, state: false}});
    dispatch({ type: 'SET_VISIBLE_PROGRAM', payload: {program: EPrograms.WEB_CAVE, state: false}});
  };

  const _handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: EPrograms.WEB_CAVE });
  };

  if (!state.openPrograms[EPrograms.WEB_CAVE]) {
    return null;
  }

  return (
    <Window
      onClick={_handleClick}
      style={{
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
        <div>
          <WebCave
            chunkSize={8}
            worldSize={64}
            worldSeed="cyprien"
            texturePack={TEXTURE_PACK}
            height={'500px'}
            width={'800px'}
          />
        </div>
      </WindowContent>
    </Window>
  );
};
