import logo from '../../../assets/logo.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './styles.css';

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Hydrion Tools</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="/home" className="nav-link text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="nav-link text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/docs" className="nav-link text-white">
                Docs
              </a>
            </li>
            <li>
              <a href="/discord" className="nav-link text-white">
                Discord
              </a>
            </li>
          </ul>
          <div className="lg:hidden flex-col md:flex justify-end">
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 ease-in-out rounded-full focus:outline-none focus:shadow-outline"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="right-0 fixed bg-neutral-900 z-20 w-full p-12 flex flex-col justify-center lg:hidden items-center">
            <ul>
              <li className="py-4">
                <a href="/home" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="py-4">
                <a href="/projects" className="nav-link text-white">
                  Projects
                </a>
              </li>
              <li className="py-4">
                <a href="/docs" className="nav-link text-white">
                  Docs
                </a>
              </li>
              <li className="py-4">
                <a href="/discord" className="nav-link text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
