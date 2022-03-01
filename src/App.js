import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Contact from './Pages/ContactMe/Contact';
import HomePage from './Pages/HomePage/HomePage';
import Navibar from './Pages/Navibar/Navibar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navibar></Navibar>
      <hr />
        <Switch>
          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>
          <Route path='/home'>
            <HomePage></HomePage>
          </Route>
          <Route path='/aboutme'>
            <AboutMe></AboutMe>
          </Route>
          <Route path='/projects'>
            <Projects></Projects>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
