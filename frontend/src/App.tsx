import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout';
import Update from './components/Update';
import FindPartner from './components/findPartner';
import Feed from './components/feed';
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
      <div style={{ marginTop: `${navbarHeight + 75}px` }}>
        <Routes>
        
          <Route
            path="/home"
            element={
              <Layout navbarOffset={navbarHeight + 75}>
              <Feed /> {/* Add the Feed component here */}
              </Layout>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Update"
            element={
              <Layout navbarOffset={navbarHeight + 75}>
                <Update />
              </Layout>
            }
          />

          <Route
            path="/FindPartner"
            element={
              <Layout navbarOffset={navbarHeight + 75}>
                <FindPartner />
              </Layout>
            }
          />
          
          <Route path="/Profile" element={<Layout navbarOffset={navbarHeight + 75}><Profile /></Layout>} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
