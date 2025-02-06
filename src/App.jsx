import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router'
import NewEmployee from './pages/NewEmployee'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
              <Header />
              <Root />
              <Footer />
            </>,
    children: [
      {
        path: "",
        element: <>
          <Outlet />
        </>
      },
      {
        path: "/new-employee",
        element: <NewEmployee />
      }
    ]
  }
])

function Root () {
  return <Outlet />
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
