import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/TopBar'

function App() {

  // TODO the Profile page should use a username to route
  return (
    <React.Fragment>
      <Routes>
        <Route path = '/' element={<Landing/>}/>
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/Signup' element={<Signup/>}/>
        <Route path = '/Profile' element={<NavBar/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
