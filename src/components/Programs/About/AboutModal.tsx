import {EPrograms} from "../../../store/types.ts";
import ProgramModal from "../../ProgramModal/ProgramModal.tsx";

export const AboutModal = () => {
  return (
    <ProgramModal
      program={EPrograms.ABOUT}
      programLabel={"About"}
      width={300}
    >
      <p className="h1">Status Network</p>
      <p className="mt2">The gas-less network with sustainable funding for app builders</p>
      <p className="mt2">Launch and scale your social apps and games with truly free transactions.</p>
    </ProgramModal>
  )
};
