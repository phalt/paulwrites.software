import logo from './logo.jpeg';
import './App.css';

const projects = [
  {name: "Beckett Framework", 
  url: "https://github.com/beckett-software/beckett-framework", 
  image: "https://github.com/beckett-software/beckett-framework/blob/main/docs/banner.jpg?raw=true",
  description: <>
    <p>A full stack application server in Python and TypeScript, with strongly-linked types between frontend and backend.</p>
    <p>Beckett framework boosts productivity by auto-generating Types, React pages, API clients, and more.</p>
  </>
},
]

const ProjectBanner = ({name, url, image, description}) =>
    <div className='projectBanner'>
    <a href={url}><h4>{name}</h4></a>
      <img src={image} alt={name} />
      {description}
    </div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Beckett software
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Projects</h4>
          {projects.map(p => <ProjectBanner {...p} />)}
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
