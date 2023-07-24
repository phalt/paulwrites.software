import logo from './logo.jpeg';
import './App.css';

const projects = [
  {name: "Clientele", 
  url: "https://github.com/beckett-software/clientele", 
  image: "https://github.com/beckett-software/clientele/blob/main/docs/clientele.jpeg?raw=true",
  description: <>
    <p>Typed API Clients from OpenAPI specs</p>
  </>
},
  {name: "Beckett Framework", 
  url: "https://github.com/beckett-software/beckett-framework", 
  image: "https://github.com/beckett-software/beckett-framework/blob/main/docs/banner.jpg?raw=true",
  description: <>
    <p>The Efficient Framework for Building Type-Safe Python Web Servers and React TypeScript Websites</p>
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
