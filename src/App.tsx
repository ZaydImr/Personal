import Home from './components/Home';
import About from './components/About'
import Experience from './components/Experiences';
import Educations from './components/Educations';
import NotFinished from './components/NotFinished';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Educations />
      <Certifications />
      <NotFinished />
      <Contact ContactUsEmail='elimrani.z@gmail.com' ContactUsPhoneNumber='6 18 05 39 29' />
    </>
  );
}

export default App;