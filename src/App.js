import './App.css';
import {Routes, Route} from "react-router-dom"
import About from './About';
import ContactMe from './ContactMe';
import ProjectsOverviewPage from './ProjectsOverviePage';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/ContactMe" element={<ContactMe />}/>
      <Route path="/Projects" element={<ProjectsOverviewPage />} />
    </Routes>

  );
}

export default App;
