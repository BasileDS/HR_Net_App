import { NavLink } from "react-router"

export default function EmployeeNav () {
    return <>
        <div className="flex flex-col gap-5">
            <NavLink className="hover:underline" to="/employees">How to use HR Net</NavLink>
            <ul className="flex flex-col gap-1">
                <h2>Manage employees</h2>
                <li><NavLink className="hover:underline" to="/employees/employees-list">View employees list</NavLink></li>
                <li><NavLink className="hover:underline" to="/employees/new-employee">Add new employee</NavLink></li>
            </ul>
        </div>
    </>
}