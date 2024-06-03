import './main.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { UserPage } from './pages/User';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement, {
  onUncaughtError: (error, errorInfo) => {
    console.warn(error, errorInfo);
    // ... log error report
  },
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo);
    // ... log error report
  }
}
);

root.render(
  <StrictMode>
    <UserPage />
  </StrictMode>
);
