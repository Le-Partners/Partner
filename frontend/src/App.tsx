import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import { relative } from 'path';


function App() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  return (
    <React.Fragment>
      <div ref={navbarRef}>
        <NavBar />
      </div>
      <div style={{ marginTop: `${navbarHeight+75}px` }}>
        <Routes>
        <Route
          path="/home"
          element={
            <Layout>
              <NavBar />
            </Layout>
          }
        />
          <Route path='/' element={<Landing />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
