import NewEmployeeForm from "../../components/NewEmployeeForm"

export default function NewEmployee () {
    return <>
        <div className="max-w-[850px] w-full">
            <h1 className="text-2xl mb-6">Add new employee</h1>
            <NewEmployeeForm />
        </div>
    </>
}