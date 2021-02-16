import React from 'react';
import Dashboard from './Containers/Dashboard';
import { AppContextProvider } from './Context/AppContext';

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <Dashboard />
      </ AppContextProvider>
    </div>
  );
}

export default App;