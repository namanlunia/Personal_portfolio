import React from 'react';
import ReactDOM from 'react-dom/client';

// Self-hosted fonts via @fontsource (Inter 400 & 600, JetBrains Mono 500)
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/jetbrains-mono/latin-500.css';

// Styles
import './styles/tokens.css';
import './styles/global.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/cards.css';
import './styles/footer.css';

import { App } from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
