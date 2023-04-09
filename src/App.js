import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import Achievements from './components/Achievement/Achievements';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';



function App() {
  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Achievements />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
