import { NavLink } from "react-router"

export default function EmployeesAside () {
    return <>
        <aside className="min-w-[300px] p-[3em] flex justify-end">
            <div className="flex flex-col gap-5">
                <NavLink className="hover:underline" to="">How to use HR Net</NavLink>
                <ul className="flex flex-col gap-1">
                    <h2>Manage employees</h2>
                    <li><NavLink className="hover:underline" to="employees-list">View employees list</NavLink></li>
                    <li><NavLink className="hover:underline" to="new-employee">Add new employee</NavLink></li>
                </ul>
            </div>
        </aside>
    </>
}