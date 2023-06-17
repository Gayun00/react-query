import React from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useSearchParams("?mode=play&category=dev");
  console.log(searchParams)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
