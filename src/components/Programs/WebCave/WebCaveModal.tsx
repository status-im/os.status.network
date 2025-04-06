import React from "react";

import {EPrograms} from "../../../store/types";
import { WebCave, TexturePack } from "@acid-info/webcave-react/src"

import BackgroundTexture from "../../../assets/webcave/background.png"
import BlockThumbsTexture from "../../../assets/webcave/blockthumbs.png"
import PlayerTexture from "../../../assets/webcave/player.png"
import TerrainTexture from "../../../assets/webcave/terrain.png"
import ProgramModal from "../../ProgramModal/ProgramModal";

export const TEXTURE_PACK: TexturePack = {
  terrain: TerrainTexture,
  player: PlayerTexture,
  backgroundImage: BackgroundTexture,
  blockThumbsImage: BlockThumbsTexture
}

export const WebCaveModal = () => {
  return (
    <ProgramModal
      program={EPrograms.WEB_CAVE}
      programLabel={"WebCave"}
    >
      <div>
        <WebCave
          chunkSize={8}
          worldSize={64}
          worldSeed="cyprien-os"
          texturePack={TEXTURE_PACK}
          height={'500px'}
          width={'800px'}
        />
      </div>
    </ProgramModal>
  );
};
