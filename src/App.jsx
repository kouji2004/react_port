import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row'>
        <a href='#'>kou-port</a>
        <nav>
          <a href='home'>Home</a>
          <a href='About'>About</a>
          <a href='Skills'>Skills</a>
          <a href='Blog'>Blog</a>
        </nav>
      </div>
    </header>
  )
}
export default App
