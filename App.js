import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import AuthContextProvider from './src/contexts/AuthContext';

const App = (props) => {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  )
}
export default App;
