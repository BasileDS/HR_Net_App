import { useState } from "react"
import getRandomId from "./utils/randomId"
import { useEffect } from "react"

import "./pretty-table.css"

// Format data from simple object to array of objects for each row
function formatEmployees(employee) {
    const key = Object.keys(employee)
    const value = Object.values(employee)
    const employeeData = []
    for (let i = 0; i < value.length; i++) {
        const data = { key: key[i], value: value[i] }
        employeeData.push(data)
    }
    return employeeData
}

/** React component : returns the pretty table based on data object */
export default function PrettyTable ({data}) {
    const [ascendent, setAscendent] = useState(true)
    const [sortingType, setSortingType] = useState(null)
    const [employeesList, setEmployeesList] = useState(data.employees)
    let prevSortingType = sortingType
    
    const handleTableClick = (type) => {
        sortTable(type)
        activateSortingStyle(type)
    }

    const sortTable = (type) => {
        prevSortingType = type
        setSortingType(type)
        prevSortingType === sortingType ? setAscendent(!ascendent) : setAscendent(true)
    }

    const activateSortingStyle = (type) => {
        const allCells = document.querySelectorAll(".pretty-thead-cells")
        allCells.forEach(cell => {
            cell.classList.remove("active")
            cell.setAttribute("aria-sort", "none")
        })

        const activeCell = document.querySelector(`#pt-${type}`)
        activeCell.classList.add("active")
        const ascending = ascendent ? "ascending" : "descending"
        activeCell.setAttribute("aria-sort", ascending)
    }

    const sortData = (a, b) => {
        const A = a[sortingType]
        const B = b[sortingType]

        if ( A > B ){
            return 1
        }
        if ( A < B ){
            return -1
        }
        return 0
    }
    
    useEffect(() => {
        const employeesCopy = [...employeesList]
        const sorteByType = employeesCopy.sort(( a, b ) => sortData(a, b) )
        const sortedEmployees = ascendent ? sorteByType : sorteByType.reverse()
        setEmployeesList(sortedEmployees)
    }, [ascendent])
    
    const randomId = getRandomId(10)
    return <>
        <table className="pretty-table" id={`ptable-${randomId}`}>
            <thead className="pretty-thead">
                <tr className="pretty-thead-row">
                    {
                        data.columns.map( (col, i) => {
                            const key = `ptable-col-${col.data}-${i}`
                            return <th className="pretty-thead-cells" id={`pt-${col.data}`} scope="col" key={key} onClick={() => handleTableClick(col.data)}>{col.title}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody className="pretty-tbody" id={`ptbody-${randomId}`}>
                    {
                        employeesList.map((employee, i) => {
                            // Format employee object to return an array of object (ex: [{firstName: Tom}, {}, ... ]
                            const employeeData = formatEmployees(employee)
                            return (
                                <tr className="pretty-tbody-rows" id={`ptable-${randomId}-${i}`} key={`ptable-emp-tr-${employee[0]}-${i}`}>
                                    {
                                        employeeData.map((employee, i) => {
                                            const id = employee.value.trim().toLowerCase().replace(/\s/g,"").split("/").join("")
                                            return <td className="pretty-tbody-cells" key={`ptable-emp-td-${id}-${i}`}>{employee.value}</td>
                                        })
                                    }
                                </tr>
                                )
                            })
                    }
                </tbody>
        </table>
    </>

}
