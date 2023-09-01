// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
import 'font-awesome/css/font-awesome.min.css';
import './style.css';
import './RespStyle.css';
import Nav from './nav';
import Home from './home';
import About from './about';
import Skills from './skills';
import Services from './services';
import Projects from './project';
import Contact from './contact';
import Footer from './footer';
import Bottom from './bottom';


function App() {
  return (
  <>
  <Nav/>
  <Home/>
  <About/>
  <Skills/>
  <Services/>
  <Projects />
  <Contact/>
  <Footer/>
  <Bottom />
  </>
);
}
export default App;
