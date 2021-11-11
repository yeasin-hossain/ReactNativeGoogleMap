import React from 'react';
import { TestProvider } from './src/context';
import Pages from './src/pages';

const App = () => {
  return (
    <TestProvider>
      <Pages />
    </TestProvider>
  );
};

export default App;
