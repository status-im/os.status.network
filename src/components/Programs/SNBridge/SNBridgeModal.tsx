import {EPrograms} from "../../../store/types.ts";
import ProgramModal from "../../ProgramModal/ProgramModal.tsx";

export const SNBridgeModal = () => {
  return (
    <ProgramModal
      program={EPrograms.SN_BRIDGE}
      programLabel={"SN Bridge"}
    >
      <iframe
        src="https://bridge.status.network"
        height="600"
        width="1000"
        style={{
          filter: "grayscale(100%) contrast(200%) brightness(80%)"
        }}
      />
    </ProgramModal>
  )
};
