import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Home />
      <Projects />
      </div>
    </div>
  );
}

export default HomePage;