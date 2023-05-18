import logo from './logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Beckett software
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link pt"
          href="https://github.com/beckett-software"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Github_black.svg" alt="github" />
        </a>
      </header>
    </div>
  );
}

export default App;
