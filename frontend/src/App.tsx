import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import {Routes, Route} from 'react-router-dom'

import Landing from './Components/Landing'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path = '/' element={<Landing/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
