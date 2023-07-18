import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import React from 'react'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Main from '../Layout/indexmain'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Profile from '../Pages/Profile/Profile'
import SelectGame from '../Pages/SelectGame/SelectGame'
import ViewPlayers from '../Pages/ViewPlayers/ViewPlayers'
import Message from '../Pages/Message/Message'
import Root from '../Layout/indexsignupandlogin'


const security = () => {

    
      if (!localStorage.getItem("token")) {
        return redirect("/")  
        
      
    }   else {
        return null;
      }
    
}



const router = createBrowserRouter([
  {
    // LOGIN AND SIGN UP

    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },

  // MAIN
  {
    path: '/dashboard',
    element: <Main />,
    loader: () => security(),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/category/:category',
        element: <SelectGame />,
      },
      {
        path: '/dashboard/game/:game',
        element: <ViewPlayers />,
      },
    ],
  },
  {
    path: '/profile',
    element: <Main />,
    loader: () => security(),
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/invitation',
    element: <Main />,
    loader: () => security(),
    children: [
      {
        path: '/invitation',
        element: <Message />,
      },
    ],
  },
])

export default router




    