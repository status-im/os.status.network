import React from "react";

import { Howl } from "howler";
import StatrupWav from "../../assets/startup-sound.wav"

const StartupSound = () => {
  const refSound = React.useRef(undefined);

  React.useEffect(() => {
    refSound.current = new Howl({
      src: [StatrupWav],
      volume: 0.5,
      onend: () => {
        refSound.current = null;
      },
    });
    refSound.current.once("load", function () {
      // @ts-expect-error This
      this.play();
    });
  }, []);

  return null;
}

export default StartupSound;