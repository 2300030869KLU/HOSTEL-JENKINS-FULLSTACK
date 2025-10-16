import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter } from 'react-router-dom'
import HostelNavBar from './hostel/HostelNavBar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <HostelNavBar/>
      </BrowserRouter>
    </div>
  )
}

export default App
