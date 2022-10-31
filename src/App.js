import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Photos from "./components/photos/Photos";
import Projects from "./components/projects/Projects";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className ="sections">
        <Intro />
        <Experience />
        <Projects />
        <Photos />
        <Contact />
      </div>
    </div>
  );
}

export default App;
