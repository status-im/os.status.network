import React from "react";

import {EPrograms} from "../../../store/types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components";
import { WebCave } from "@acid-info/webcave-react"

import BackgroundTexture from "../../../assets/webcave/background.png"
import BlockThumbsTexture from "../../../assets/webcave/blockthumbs.png"
import PlayerTexture from "../../../assets/webcave/player.png"
import TerrainTexture from "../../../assets/webcave/terrain.png"
import ProgramModal from "../../ProgramModal/ProgramModal";

export const TEXTURE_PACK = {
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
          worldSeed="cyprien"
          texturePack={TEXTURE_PACK}
          height={'500px'}
          width={'800px'}
        />
      </div>
    </ProgramModal>
  );
};
