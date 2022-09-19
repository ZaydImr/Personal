import Home from './components/Home';
import About from './components/About'
import Experience from './components/Experience';
import Education from './components/Education';
import NotFinished from './components/NotFinished';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <NotFinished />
      <Contact ContactUsEmail='elimrani.z@gmail.com' ContactUsPhoneNumber='6 18 05 39 29' />
    </>
  );
}

export default App;
