import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/util/Header'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App