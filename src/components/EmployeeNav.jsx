import { NavLink } from "react-router"

export default function EmployeeNav () {
    return <>
        <div className="flex flex-col gap-5">
            <h2>Manage employees</h2>
            <ul className="flex flex-col gap-1">
                <li><NavLink className="hover:underline" to="/employees/how-to-use-hrnet">How to use HR Net</NavLink></li>
                <li><NavLink className="hover:underline" to="/employees/employees-list">View employees list</NavLink></li>
                <li><NavLink className="hover:underline" to="/employees/new-employee">Add new employee</NavLink></li>
            </ul>
        </div>
    </>
}