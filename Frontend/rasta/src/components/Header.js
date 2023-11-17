import React, { useState } from 'react';
import Filters from './Filters';
import DataVisulization from './DataVisulization';
// ... (your existing imports)

// ... (your existing React component)
// ... (your existing React component)
// ... (your existing React component)

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState(null);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    const handleNavItemClick = (item) => {
      setSelectedNavItem(item);
      setSidebarOpen(true);
    };
  
    return (
      <div className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <header>
          <nav>
            <div>
              <ul>
                <li className='logo'><img className='logo' src='Rasta.Ai.png'></img></li>
                <li onClick={() => handleNavItemClick('filter')}><img src='filter.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='Data.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='notes.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='calculator.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='search.png'></img></li>
                <li onClick={() => handleNavItemClick('data')}><img src='bell.png'></img></li>
                {/* Add more items as needed */}
              </ul>
            </div>
            <div className='nav_toggle'>
              <div className="toggle-icon" >
                <span>&#9654;</span>
              </div>
            </div>
          </nav>
        </header>
  
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {selectedNavItem && (
            <div className="sidebar-content">
              {selectedNavItem === 'filter' && <Filters/>}
              {selectedNavItem === 'data' && <DataVisulization/>}
              {/* Add more content for other items as needed */}
            </div>
          )}
  
          <div
            className={`toggle-btn ${isSidebarOpen ? 'right' : 'left'}`}
            onClick={toggleSidebar}
          >
            <span>&#9654;</span>
          </div>
        </aside>
      </div>
    );
};

export default Header;
  
  