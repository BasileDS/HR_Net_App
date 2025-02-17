import { NavLink } from "react-router"
import EmployeeDropdownMenu from "./EmployeeDropdownMenu"

export default function MainNav () {
    return <>
      <nav>
        <ul className="flex gap-x-4">
            <li className="menu-nav-link"><NavLink to="/">Home</NavLink></li>
            <li className="menu-nav-link"><NavLink to="/employees/how-to-use-hrnet">Employee</NavLink></li>
            <li className="menu-nav-link"><NavLink to="/documentation">Dev</NavLink></li>
            <EmployeeDropdownMenu />
        </ul>
      </nav>
    </>
}