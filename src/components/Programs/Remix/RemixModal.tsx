import {EPrograms} from "../../../store/types.ts";
import ProgramModal from "../../ProgramModal/ProgramModal.tsx";

const REMIX_LINK = "https://remix.ethereum.org/?#code=Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAoKcHJhZ21hIHNvbGlkaXR5IDAuOC40OwoKLyoqCiAqIEB0aXRsZSBXb25kZXJmdWxDb2RlCiAqIEBkZXYgV2VsY29tZSB0byBSZW1peAogKi8KY29udHJhY3QgWW91IHsKCiAgICBhZGRyZXNzIHByaXZhdGUgb3duZXI7CiAgICAKICAgIC8qKgogICAgICogQGRldiBTZXQgY29udHJhY3QgZGVwbG95ZXIgYXMgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYKICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgeW91QW5kWW91cldvbmRlcmZ1bFNlbGYgPSBtc2cuc2VuZGVyOwoKICAgIH0KCiAgICAvKioKICAgICAqIEBkZXYgQ2hhbmdlIG1vb2QKICAgICAqIEBwYXJhbSBuZXdPd25lciBhZGRyZXNzIG9mIG5ldyBvd25lcgogICAgICovCiAgICBmdW5jdGlvbiBjaGFuZ2VNb29kKGFkZHJlc3MgbmV3TW9vZEFkZHIpIHB1YmxpYyB7CiAgICAgICAgb3duZXJNb29kID0gbmV3TW9vZEFkZHI7CiAgICB9Cn0=\n"

export const RemixModal = () => {
  return (
    <ProgramModal
      program={EPrograms.REMIX}
      programLabel={"IDE"}
    >
      <iframe
        src={REMIX_LINK}
        height="600"
        width="1000"
      />
    </ProgramModal>
  )
};
