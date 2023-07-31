import logo from './logo.jpeg';
import './App.css';

const projects = [
  {name: "Clientele", 
  url: "https://github.com/phalt/clientele", 
  image: "https://github.com/phalt/clientele/blob/main/docs/clientele.jpeg?raw=true",
  description: <>
    <p>Typed API Clients from OpenAPI schemas</p>
  </>
},
  {name: "react-flask", 
  url: "https://github.com/phalt/react-flask", 
  image: "https://github.com/phalt/react-flask/blob/main/docs/banner.jpg?raw=true",
  description: <>
    <p>Fully typed Flask and React applications</p>
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
          Paul writes software
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Projects</h4>
          {projects.map(p => <ProjectBanner {...p} />)}
        <a
          className="App-link pt"
          href="https://github.com/phalt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/9d939e1c5b7ea4a24ac39c3e4631970c0aa1b920/SVG/Black/Github_black.svg" alt="github" />
        </a>
      </header>
      <p>"Paul writes software" and all related projects is copyright Paul Hallett 2023</p>
    </div>
  );
}

export default App;
