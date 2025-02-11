import { Outlet } from "react-router"
import EmployeesAside from "../../components/EmployeesAside"

export default function Employees () {
    return <>
        <div className="flex w-full">
            <EmployeesAside />
            <div className="flex w-full justify-center p-[3em] overflow-hidden">
                <div className="flex flex-col gap-5 w-full items-center">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
}