import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoveMatchProvider } from './context/LoveMatchContext';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoveMatchProvider>
        <App />
      </LoveMatchProvider>
    </BrowserRouter>
  </StrictMode>,
);
