import './App.css';
import {Routes, Route} from "react-router-dom"
import About from './About';
import ContactMe from './ContactMe';
import ProjectsOverviewPage from './ProjectsOverviePage';
import PageNotFound from './PageNotFound';
import Navbar from './NavLink';
import Footer from './Footer';

function App() {
  return (
    <div>

    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/ContactMe" element={<ContactMe />}/>
      <Route path="/Projects" element={<ProjectsOverviewPage />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>

    <Footer />

    </div>

  );
}

export default App;
