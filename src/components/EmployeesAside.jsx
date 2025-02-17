import EmployeeNav from "./EmployeeNav"

export default function EmployeesAside () {
    return <>
        <aside className="min-w-[300px] p-[3em] flex justify-end max-md:invisible">
            <EmployeeNav />
        </aside>
    </>
}