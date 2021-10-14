import './App.css';
// import logo from './mia.jpg';
import europa from './220px-Europa-moon-with-margins.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={europa} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.ultimateqa.com"
          target="_blank"
          rel="noopener noreferrer"
          //data-testid="learn-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
