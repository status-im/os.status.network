import React from 'react';

import LogosLogo from "../../assets/logos/logos_pixelated.png";
import WakuLogo from "../../assets/logos/waku_pixelated.png";
import CodexLogo from "../../assets/logos/codex_pixelated.png";
import NimbusLogo from "../../assets/logos/nimbus_pixelated.png";
import NomosLogo from "../../assets/logos/nomos_pixelated.png";

import StatusLogo from "../../assets/status/status_pixelated.png"
import KeycardLogo from "../../assets/status/keycard_pixelated.png"
import StatusNetworkLogo from "../../assets/status/sn_pixelated.png"

import styled from "styled-components"

type DesktopIconData = {
  label: string;
  img: string;
  link: string;
}
const logosProgramIcons: DesktopIconData[] = [
  {
    label: "Logos",
    img: LogosLogo,
    link: "https://logos.co/"
  },
  {
    label: "Waku",
    img: WakuLogo,
    link: "https://waku.org/"
  },
  {
    label: "Codex",
    img: CodexLogo,
    link: "https://codex.storage/"
  },
  {
    label: "Nomos",
    img: NomosLogo,
    link: "https://nomos.tech/"
  },
  {
    label: "Nimbus",
    img: NimbusLogo,
    link: "https://nimbus.team/"
  },
]

const statusProgramIcons: DesktopIconData[] = [
  {
    label: "Status",
    img: StatusLogo,
    link: "https://status.app/"
  },
  {
    label: "SN",
    img: StatusNetworkLogo,
    link: "https://status.network/"
  },
  {
    label: "Keycard",
    img: KeycardLogo,
    link: "https://keycard.tech/"
  },
]

const DesktopIcons = () => {

  const renderIcons = () => {
    const icons = [
      ...logosProgramIcons,
      ...statusProgramIcons
    ];

    return icons.map(icon => {
      return (
        <DesktopIcon
          id={icon.label}
          href={icon.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={icon.img}
            alt={icon.label}
            width={32}
            height={32}
          />
          <p>
            {icon.label}
          </p>
        </DesktopIcon>
      )
    })
  }

  return (
    <DesktopContainer>
      {renderIcons()}
    </DesktopContainer>
  )
}

const DesktopContainer = styled.div`
  max-width: 400px;
  max-height: 30px;
  display: flex;
  flex-wrap: wrap;
`

const DesktopIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: pointer;
  color: white;
`

export default DesktopIcons;