import { NavLink } from "react-router";

export default function MainNav () {

    return <>
      <nav>
        <ul className="flex gap-x-4">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/employees">Employee</NavLink></li>
        </ul>
      </nav>
    </>
}