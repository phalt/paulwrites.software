import logo from './logo.jpeg';
import './App.css';
import ghLogo from 'super-tiny-icons/images/svg/github.svg'
import twLogo from 'super-tiny-icons/images/svg/twitter.svg'
const projects = [
  {
    name: "CLIENTELE", 
    url: "https://github.com/phalt/clientele", 
    description: <>
      <p>LOVEABLE PYTHON API CLIENTS FROM OPENAPI SCHEMAS</p>
    </>
},
  {name: "REACT-FLASK", 
  url: "https://github.com/phalt/react-flask", 
  description: <>
    <p>FULLY TYPED FLASK AND REACT APPLICATIONS</p>
  </>
},
]

const Blink = props => <span className='blinking-text'>{props.content}</span>

const ProjectBanner = ({name, url, image, description}) =>
    <div className='projectBanner'>
    <a className="App-link" href={url}><h4>{name}</h4></a>
      {description}
    </div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        AN INFINITELY PROTEAN MACHINE <p>$ <Blink content={"_"} /></p>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>CODE</h4>
          {projects.map(p => <ProjectBanner key={p.name} {...p} />)}
        <h4>CONTENT</h4>
        <p><a className='App-link' href="https://apireviews.substack.com/">API REVIEWS</a></p>
        <h4>CONNECT</h4>
        <a
          className="App-link pt"
          href="https://github.com/phalt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="small-square" src={ghLogo} alt="github" />
        </a>
        <a
          className="App-link pt"
          href="https://twitter.com/proteanmachine"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="small-square" src={twLogo} alt="twitter" />
        </a>
      </header>
      <p>"Paul writes software", "Infinitely Protean Machine", and all related projects is copyright Paul Hallett 2023</p>
    </div>
  );
}

export default App;
