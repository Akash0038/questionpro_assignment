import React from 'react'
import { Home } from './routes/root'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import { TopStories } from './routes/top-stories'
import logo from "./assets/logo.png"
import { createBrowserRouter, Link, RouterProvider, useNavigate } from 'react-router-dom'
import { PastStories } from './routes/past-stories'
import { Comments } from './routes/comments'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/top-stories",
    element: <TopStories />
  },
  {
    path: "/past-stories",
    element: <PastStories />
  },
  { 
    path: "/comments/:storyId",
    element: <Comments />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavMenu />
    <RouterProvider router={router} />
  </React.StrictMode>,
)


function NavMenu() {

  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <a href='/'>
          <img src={ logo } style={{width: "300px", margin: "5px"}} />
        </a>
      </div>
      <hr style={{
        margin: "10px",
        backgroundColor: "#aeaeae"
      }} />
    </>
  )
}