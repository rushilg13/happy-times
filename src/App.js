import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { routes } from './config/routes';

function App() {
  const [mobileClass, setMobileClass] = useState('none');

  const handleToggle = () => {
    if (mobileClass === 'none') {
      setMobileClass('block')
    } else {
      setMobileClass('none')
    }
  }

  return (
    <Router>
      <div className="App">
        <div className='mobile-navbar-container' onClick={handleToggle}>
          <div className='mobile-navbar'>
            <div style={{'display': `${mobileClass}`}}>
              <Navbar />
            </div>
          </div>
        </div>
        <div className='navbar-container'>
          <Navbar />
        </div>

        <div className='container'>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.main />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
