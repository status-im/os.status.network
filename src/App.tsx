import './App.css';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {AppBar, styleReset, Toolbar} from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Store from './store';

// Components
import {AboutModal} from './components/Programs/About/AboutModal.tsx';
import {Menu} from './components/Menu';
import {WebCaveModal} from "./components/Programs/WebCave/WebCaveModal.tsx";
import {ProgramBarButton} from "./components/ProgramBarButton/ProgramBarButton.tsx";
import {EPrograms} from "./store/types.ts";

// Logos
import ComputerLogo from "./assets/computer.png";
import WebCaveLogo from "./assets/webcave.png";

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
`;

function App() {
  return (
    <Store>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <nav>
          <AppBar style={{ zIndex: 3 }}>
            <Toolbar>
              <Menu />
              <ProgramBarButton
                program={EPrograms.ABOUT}
                programLogo={ComputerLogo}
                programLabel="About"
              />
              <ProgramBarButton
                program={EPrograms.WEB_CAVE}
                programLogo={WebCaveLogo}
                programLabel="WebCave"
              />
            </Toolbar>
          </AppBar>
        </nav>
        <main>
          <div className="container pt4">
            <AboutModal />
            <WebCaveModal />
          </div>
        </main>
      </ThemeProvider>
    </Store>
  );
}

export default App;
