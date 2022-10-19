import './App.css';
import {Routes, Route} from "react-router-dom"
import About from './About';
import ContactMe from './ContactMe';
import ProjectsOverviewPage from './ProjectsOverviePage';
import PageNotFound from './PageNotFound';
import Navbar from './NavLink';
import Footer from './Footer';
import IndviualProjectPage from './IndviualPorjectPage';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/ContactMe" element={<ContactMe />}/>
      <Route path="/Projects" element={<ProjectsOverviewPage />} />
      <Route path="/RaidAscension" element={<IndviualProjectPage title="Raid Ascsion Tracker" link={"https://bbtrombone01.github.io/Raid_ascenion_pots/"} video={"need to make video"} description={"work in progress"} />} />
      <Route path="/HotOrNot" element={<IndviualProjectPage title={"Hot or Not"} link={"https://bbtrombone01.github.io/hot_or_not/"} video={<div ><iframe src="https://www.loom.com/embed/f9d54b5688f54f2ba9706b3ded1beb4f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="HotOrNotVideo"></iframe></div>} description={"this is a description"} />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
    <Footer />
    </div>

  );
}

export default App;
