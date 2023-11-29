import { useState, useEffect } from 'react'

import Header from './components/header'
import Content from './components/content/content'
import './App.css'



function App() {
  

  return (
    <>
      <div className="container">
        <Header/>
        <Content/>
      </div>
    </>
  )
}

export default App
