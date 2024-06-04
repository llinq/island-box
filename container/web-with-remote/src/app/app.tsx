import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const User = React.lazy(() => import('user/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web-with-remote" />} />

        <Route path="/user" element={<User />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
