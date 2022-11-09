import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { submission } from './glean/generated/pings';
import { buttonClicked, pageLoaded } from './glean/generated/sample';

function App() {
  useEffect(() => {
    pageLoaded.set();
  }, []);

  const handleButtonClick = () => {
    buttonClicked.add();
  };

  const handleSubmit = () => {
    submission.submit();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <button onClick={handleButtonClick}>Add to count</button>
        <button onClick={handleSubmit}>Submit ping</button>
      </header>
    </div>
  );
}

export default App;
