import { useState } from "react"
import { NavLink } from "react-router"

import burger from "../assets/burger-menu.svg"

export default function EmployeeDropdownMenu () {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleMenuClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return <>
        <img src={burger} alt="mobile menu icon" onClick={handleMenuClick} className="w-[30px] dropdown-icon" />
        {
            isDropdownOpen &&
                <div className="dropdown-nav gap-4 p-8 bg-white rounded-[3px] absolute left-0 top-15 w-full shadow-lg z-999 flex flex-col">
                    <NavLink onClick={handleMenuClick} to="/">Home</NavLink>
                    <NavLink onClick={handleMenuClick} to="/employees/how-to-use-hrnet">How to use HR Net</NavLink>
                    <NavLink onClick={handleMenuClick} to="/employees/employees-list">View employees list</NavLink>
                    <NavLink onClick={handleMenuClick} to="/employees/new-employee">Add new employee</NavLink>
                </div>
        }
    </>
}