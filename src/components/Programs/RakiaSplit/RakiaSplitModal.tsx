import React from "react";
import {EPrograms} from "../../../store/types";
import ProgramModal from "../../ProgramModal/ProgramModal";

export const RakiaSplitModal = () => {
  return (
    <ProgramModal
      program={EPrograms.RAKIA}
      programLabel={"Rakia Split"}
    >
      <iframe
        src="https://rakija-pump.netlify.app/"
        height="600"
        width="1000"
      />
    </ProgramModal>
  )
};
