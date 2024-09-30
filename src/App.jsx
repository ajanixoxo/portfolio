import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import Project from './components/Project/project.jsx';
import Intro from './Intro/intro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
          <Route path="intro" element={<Intro />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
