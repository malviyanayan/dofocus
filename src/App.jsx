import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import Streak from './components/Streak';
import ToDo from './components/ToDo';
import Help from './components/Help';
import Login from './components/login_registor/Login';
import Registor from './components/login_registor/Registor';
import { Signin } from './components/login_registor/Signin';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/streak" element={<Streak />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Registor />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<div className="text-center mt-5"><h2>404 Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
