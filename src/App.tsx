import React, { useState } from 'react';
import './App.css';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {AppBar, styleReset, Toolbar, Window, WindowHeader, WindowContent, TextInput, Button} from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Store from './store';

// Programs
import {EPrograms} from "./store/types";
import {AboutModal} from './components/Programs/About/AboutModal';
import {WebCaveModal} from "./components/Programs/WebCave/WebCaveModal";
import {SNBridgeModal} from "./components/Programs/SNBridge/SNBridgeModal";

// Components
import {Menu} from './components/Menu/Menu';
import {ProgramBarButton} from "./components/ProgramBarButton/ProgramBarButton";

// Logos
import ComputerLogo from "./assets/computer.png";
import WebCaveLogo from "./assets/webcave.png";
import BridgeLogo from "./assets/bridge.png";
import IDELogo from './assets/ide.png';
import RakiaLogo from "./assets/rakia.png";
import {RemixModal} from "./components/Programs/Remix/RemixModal";
import DesktopIcons from "./components/DesktopIcons/DesktopIcons";
import StartupSound from "./components/StatrupSound/StartupSound";
import {RakiaSplitModal} from "./components/Programs/RakiaSplit/RakiaSplitModal";


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  #root {
      width: 100%;
      height: 100%;
  }
`;

function App() {
  const [login, setLogin] = useState(false);



  return (
    <Store>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        {
          login ?
            <>
              <nav>
                <AppBar style={{zIndex: 3}}>
                  <Toolbar>
                    <Menu/>
                    <ProgramBarButton
                      program={EPrograms.ABOUT}
                      programLogo={ComputerLogo}
                      programLabel="About"
                    />
                    <ProgramBarButton
                      program={EPrograms.RAKIA}
                      programLogo={RakiaLogo}
                      programLabel="Rakia"
                    />
                    <ProgramBarButton
                      program={EPrograms.WEB_CAVE}
                      programLogo={WebCaveLogo}
                      programLabel="WebCave"
                    />
                    <ProgramBarButton
                      program={EPrograms.SN_BRIDGE}
                      programLogo={BridgeLogo}
                      programLabel="SN Bridge"
                    />
                    <ProgramBarButton
                      program={EPrograms.REMIX}
                      programLogo={IDELogo}
                      programLabel="IDE"
                    />
                  </Toolbar>
                </AppBar>
              </nav>
              <main>
                <div className="pt4 pl2 pr2">
                  <AboutModal/>
                  <RakiaSplitModal/>
                  <WebCaveModal/>
                  <SNBridgeModal/>
                  <RemixModal/>
                  <DesktopIcons/>
                </div>
                <StartupSound/>
              </main>
            </>
            :
            <Window
              style={{
                width: 200,
                height: 200,
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: "flex",
                flexDirection: "column",
              }}
            >
              <WindowHeader className="flex items-center justify-between">
                <span>Status Network OS</span>
              </WindowHeader>
              <WindowContent>
                User: based_gang
                <TextInput placeholder={"Password"}/>
              </WindowContent>
              <Button onClick={() => setLogin(true)}>
                Login
              </Button>
            </Window>
        }
      </ThemeProvider>
    </Store>
  );
}

export default App;
