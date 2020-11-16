import logo from './Infinity-Arrow.svg';
import Header from './components/Header.jsx';
import Service from './components/Service.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
           <Header className="navbar"/>
      <header className="App-header">
   
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Headliner">Hello, we are DevApp Agency, a digital agency for your technological needs and dreams.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
