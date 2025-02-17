import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import NewEmployee from './pages/employees/NewEmployee'
import Employees from './pages/employees/Employees'
import EmployeesList from './pages/employees/EmployeesList'
import EmployeesHome from './pages/employees/EmployeesHome'
import Documentation from './pages/doc/documentation'
import Home from './pages/Home'

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
        element: <Outlet />,
        children: [
          {
            path: "/",
            element: <Home />
          }
        ]
      },
      {
        path: "/employees",
        element: <Employees />,
        children: [
          {
            path: "/employees/how-to-use-hrnet",
            element: <EmployeesHome />
          },
          {
            path: "/employees/employees-list",
            element: <EmployeesList />
          },
          {
            path: "/employees/new-employee",
            element: <NewEmployee />
          }
        ]
      },
      {
        path: "/documentation",
        element: <Documentation />
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
