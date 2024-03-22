import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactPage from './Router/ContactPage.jsx'
import MidSection from './Router/MidSection.jsx'

let router = createBrowserRouter([{
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/',element:<MidSection/>
      },
      {
        path:"/contact-us",element:<ContactPage/>
      }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
