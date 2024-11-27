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
import Settings from './Components/Settings'
import { relative } from 'path';


function App() {
  const navbarRef = useRef<HTMLDivElement>(null);
  return (
    <React.Fragment>
      <div ref={navbarRef}>
        {<NavBar />}
      </div>
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <Protected>
                <Layout>
                  <Feed /> {/* Add the Feed component here */}
                </Layout>
              </Protected>
            }
          />
          <Route
            path="/Tracker"
            element={
              <Layout>
                <Tracker />
              </Layout>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/getUserInfo" element={<Protected><GetUserInfo /></Protected>} />
          {/* TODO change the setting page to route there */}
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/Update"
            element={
              <Protected>
                <Layout>
                  <Update />
                </Layout>
              </Protected>
            }
          />

          <Route
            path="/FindPartner"
            element={
              <Protected>
                <Layout>
                  <FindPartner />
                </Layout>
              </Protected>
            }
          />

          <Route path="/Profile" element={<Protected><Layout><Profile /></Layout></Protected>} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
