import Home from './app/Home';
import About from './app/About';
import Work from './app/Work';
import Skills from './app/Skills';
import Blog from './app/Blog';
import Contact from './app/Contact';
import Loggedin from './app/Logged in';
// import Single from './app/Single';
import Login from './app/Login';
import Signup from './app/Signup';
import Loginadmin from './app/Loginadmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route exact path='/About' element={<About />}  />
        <Route exact path='/Skills' element={<Skills />}  />
        <Route exact path='/Work' element={<Work />}  />
        <Route exact path='/Contact' element={<Contact />}  />
        <Route exact path='/Signup' element={<Signup />}  />
        <Route exact path='/Login' element={<Login />}  />
        <Route exact path='/Loginadmin' element={<Loginadmin />}  />
        <Route exact path='/Blog' element={<Blog />}  />
        <Route exact path='/Loggedin' element={<Loggedin />}  />
        {/* <Route exact path='/Single' element={<Single />}  /> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
