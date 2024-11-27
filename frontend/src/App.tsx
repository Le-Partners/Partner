import React, { useEffect, useRef, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import GetUserInfo from './Components/getUserInfo';
import Protected from './Components/Protected'
import Tracker from './Components/tracker';

import Layout from './Components/layout';
import Update from './Components/Update';
import FindPartner from './Components/findPartner';
import Feed from './Components/feed';
import Landing from './Components/Landing'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import Profile from './Components/Profile'
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
        {/* <NavBar /> */}
      </div>
      <div style={{ marginTop: `${navbarHeight + 75}px` }}>
        <Routes>

          <Route
            path="/home"
            element={
              <Protected>
                <Layout navbarOffset={navbarHeight + 75}>
                <Feed /> {/* Add the Feed component here */}
                </Layout>
              </Protected>
            }
          />
          <Route
            path="/Tracker"
            element={
              <Layout navbarOffset={navbarHeight + 75}>
                <Tracker />
              </Layout>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/getUserInfo" element={<Protected><GetUserInfo /></Protected>} />
          <Route
            path="/Update"
            element={
              <Protected>
                <Layout navbarOffset={navbarHeight + 75}>
                  <Update />
                </Layout>
              </Protected>
            }
          />

          <Route
            path="/FindPartner"
            element={
              <Protected>
                <Layout navbarOffset={navbarHeight + 75}>
                  <FindPartner />
                </Layout>
              </Protected>
            }
          />

          <Route path="/Profile" element={<Protected><Layout navbarOffset={navbarHeight + 75}><Profile /></Layout></Protected>} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
