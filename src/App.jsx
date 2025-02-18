import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import NewEmployee from './pages/employees/NewEmployee'
import Employees from './pages/employees/Employees'
import EmployeesList from './pages/employees/EmployeesList'
import EmployeesHome from './pages/employees/EmployeesHome'
import Documentation from './pages/doc/Documentation'
import Performances from './pages/doc/Performances'
import Home from './pages/Home'

import Header from './components/Header'
import Footer from './components/Footer'

import store from './app/store'

import './App.css'

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
      },
      {
        path: "/performances",
        element: <Performances />
      }
    ]
  }
])

function Root () {
  return <Outlet />
}

function Router () {
  return <RouterProvider router={router} />
}

function App() {
  return <>
      <Provider store={store}>
        <Router />
      </Provider>
  </>
}

export default App
