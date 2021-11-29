// import logo from './logo.svg';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import Navibar from './Pages/Navibar/Navibar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <Home></Home>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
