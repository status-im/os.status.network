import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset, AppBar, Toolbar } from 'react95';

import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import Store from './store';

// Components
import { AboutModal } from './components/Programs/About/AboutModal.tsx';
import { Menu } from './components/Menu';
import { AboutModalButton } from './components/Programs/About/AboutModalButton.tsx';
import {WebCaveModalButton} from "./components/Programs/WebCave/WebCaveModalButton.tsx";
import {WebCaveModal} from "./components/Programs/WebCave/WebCaveModal.tsx";

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
              <AboutModalButton />
              <WebCaveModalButton />
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
