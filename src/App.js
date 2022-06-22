import './App.css';
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import TechStack from "./components/TechStack/TechStack"
// import Experience from "./components/Experience/Experience"
import Project from "./components/Projects/Project"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <TechStack />
      <Project />
      {/* <Experience /> */}
      
      <Footer />
      </div>

  );
}

export default App;
