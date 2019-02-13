import React from 'react';

import './App.css';
import Logo from './components/Logo';
import { useIntl } from './intl';

const App: React.FunctionComponent = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {formatMessage({ id: 'app.learnMore' })}
        </a>
      </header>
    </div>
  );
};

export default App;
