import PrettyTable from "pretty-table-ds"

import ToPageButton from "../../components/ToPageButton"
import { useSelector } from "react-redux"
import { selectEmployeesList } from "../../app/employeesSlice"

export default function EmployeesList () {
    const employees = useSelector(selectEmployeesList)

    /**
     * Object of two entries:
     * 1. data : array of object(s). Data to be displayed on the Pretty Table component
     * 2. columns : array of object(s). Set the title and data id of each Pretty Table component column(s).
     */
    const data = {
        data: [...employees],
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    }

    /**
     * Object of key/value paired entries that sets the Pretty Table component configuration.
     */
    const config = {
        accentColor: "#50a2ff",
        useAccentColor: true,
        showSearchBar: true,
        searchBarToLeft: false
    }

    return <>
        <div className="w-full">
            <h1 className="text-2xl mb-6">All employees</h1>
            <PrettyTable data={data} config={config} />
            <ToPageButton path="/employees/new-employee" text={"Add new employee"} type="outlined" />
        </div>
    </>
}