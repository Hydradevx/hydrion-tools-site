import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Projects from './components/Projects.tsx';

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
