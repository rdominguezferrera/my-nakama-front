import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/index'
import React from 'react'


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
