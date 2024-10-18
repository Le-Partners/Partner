import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

import Landing from './Components/Landing'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path = '/' element={<Landing/>}/>
        <Route path = '/Login' element={<Login/>}/>
        <Route path = '/Signup' element={<Signup/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App;
