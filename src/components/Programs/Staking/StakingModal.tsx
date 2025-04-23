import React from "react";
import {EPrograms} from "../../../store/types";
import ProgramModal from "../../ProgramModal/ProgramModal";

export const StakingModal = () => {
  return (
    <ProgramModal
      program={EPrograms.STAKING}
      programLabel={"SNT Staking"}
    >
      <iframe
        src="https://snt-staking-demo.netlify.app/"
        height="600"
        width="1000"
      />
    </ProgramModal>
  )
};
