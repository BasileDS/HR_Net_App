import { Link } from "react-router";

export default function EmployeesHome () {
    return <>
        <div className="max-w-[850px]">
            <h1 className="text-sm">Company employees management</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, nihil culpa recusandae quod nisi labore reprehenderit quidem beatae amet quis, commodi distinctio sunt molestiae. Modi labore excepturi nostrum qui doloribus?</p>
            <h2 className="text-sm">How to consult the lsit of employees</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, nihil culpa recusandae quod nisi labore reprehenderit quidem beatae amet quis, commodi distinctio sunt molestiae. Modi labore excepturi nostrum qui doloribus?</p>
            <Link to="/employees/employees-list">Consult employees list</Link>
            <h2 className="text-sm">Add a new employee to employees list</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, nihil culpa recusandae quod nisi labore reprehenderit quidem beatae amet quis, commodi distinctio sunt molestiae. Modi labore excepturi nostrum qui doloribus?</p>
            <Link to="/employees/employees-list">Add new employee</Link>
        </div>
    </>
}