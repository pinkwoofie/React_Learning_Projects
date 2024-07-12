import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import Getstarted from './components/Getstarted/Getstarted.jsx'
import Gituser from './components/Gituser/Gituser.jsx'

// const router = createBrowserRouter( [
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//           path: "",
//           element: <Home />
//       },
//       {
//           path: 'about',
//           element: <About />
//       },
//       {
//           path: 'contact',
//           element: <Contact />
//       },
//       {
//           path: 'login',
//           element: <Login />
//       },
//       {
//           path: 'start',
//           element: <Getstarted />
//       },
//       {
//           path: 'gituser/:username',
//           element: <Gituser /> 
//       }
      
//     ]

//   }

// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='start' element={<Getstarted />} />
      <Route path='git/:username' element={<Gituser />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider  router={router}/>
  </React.StrictMode>,
)
