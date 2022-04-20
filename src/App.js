import Home from './components/Home';
import About from './components/About'
import NotFinished from './components/NotFinished';
import Experience from './components/Experience';
import Footer from './components/Footer';
// import app from './firebase/config';

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Experience/>
      <NotFinished/>
      <Footer ContactUsEmail='elimrani.z@gmail.com' ContactUsPhoneNumber='6 18 05 39 29'/>
    </>
  );
}

export default App;
