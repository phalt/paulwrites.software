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
        <h4>Projects</h4>
        <a href="https://github.com/beckett-software/beckett-framework">
          <img src="https://gh-card.dev/repos/beckett-software/beckett-framework.png" alt="beckett-framework" />
        </a>
        <p><a href="https://beckettsoftware.substack.com/" target="_blank" rel="noopener noreferrer">Articles</a></p>
        <a
          className="App-link pt"
          href="https://github.com/beckett-software"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Github_black.svg" alt="github" />
        </a>
      </header>
      <p>Beckett software and all related projects is copyright Paul Hallett 2023</p>
    </div>
  );
}

export default App;
