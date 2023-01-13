import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>kou-port</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href='home' className='mr-5 hover:text-blue-400 duration'>Home</a>
          <a href='About' className='mr-5 hover:text-blue-400 duration'>About</a>
          <a href='Skills'  className='mr-5 hover:text-blue-400 duration'>Skills</a>
          <a href='Blog'  className='mr-5 hover:text-blue-400 duration'>Blog</a>
        </nav>
      </div>
    </header>
    <section>
      <div>
        <div>
          <h1>
            Hi<br/>im,kou<br/>test<br/>
          </h1>
          <p></p>
          <button></button>
        </div>
        <div></div>
      </div>
    </section>
    </>
  )
}
export default App
