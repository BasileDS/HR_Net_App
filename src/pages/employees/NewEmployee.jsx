import NewEmployeeForm from "../../components/NewEmployeeForm";

export default function NewEmployee () {
    return <>
        <div className="w-[850px]">
            <h1 className="text-sm">Add new employee</h1>
            <NewEmployeeForm />
        </div>
    </>
}