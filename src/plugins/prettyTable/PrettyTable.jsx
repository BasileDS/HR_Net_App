/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
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
    const [ascending, setAscending] = useState(true)
    const [entriesNb, setEntriesNb] = useState(null)
    const [entriesNbToDisplay, setEntriesNbToDisplay] = useState(5)
    const [reset, setReset] = useState(false)
    const [sortingType, setSortingType] = useState(null)
    const [employeesList, setEmployeesList] = useState(data.employees)
    // let prevSortingType = sortingType
    
    // type: string: the clicked cell data type. Ex: FirstName
    const handleTableClick = (type, e) => {
        setSortingType(type)

        const cellClicked = e.target
        const cellAriaSort = cellClicked.getAttribute("aria-sort")
        const isCellActive = cellAriaSort === "none" ? false : true        
        isCellActive ? toggleActiveFilter(cellClicked) : changeFilterType(cellClicked)
    }
    
    const toggleActiveFilter = (cell) => {
        const isAscending = cell.getAttribute("aria-sort")
        if (isAscending === "ascending") {
            setAscending(false)
            cell.setAttribute("aria-sort", "descending")
        } else {
            setAscending(true)
            cell.setAttribute("aria-sort", "ascending")
        }
    }
    
    const changeFilterType = (cell) => {
        setAscending(true)
        const allCells = document.querySelectorAll(".pretty-thead-cells")
        allCells.forEach(th => {
            th.classList.remove("active")
            th.setAttribute("aria-sort", "none")
        })
        cell.setAttribute("aria-sort", "ascending")
        cell.classList.add("active")
    }

    const handleEntriesNbChange = (e) => {
        const selectValue = e.target.value
        setEntriesNbToDisplay(selectValue)
    }

    useEffect(() => {
        const employeesCopy = [...employeesList]
        const sortByType = employeesCopy.sort(( a, b ) => {
            const A = a[sortingType]
            const B = b[sortingType]
    
            if ( A > B ){
                return 1
            }
            if ( A < B ){
                return -1
            }
            return 0
        } )
        const sortedEmployees = ascending ? sortByType : sortByType.reverse()
        const sortedEmployeesToDisplay = sortedEmployees.slice(0, entriesNbToDisplay)
        setEntriesNb(sortedEmployees.length)
    }, [sortingType, ascending, entriesNbToDisplay])
    
    const randomId = getRandomId(10)
    return <>
        {
            <div id={`pt-filters-${randomId}`} className="pt-active-filters">
                <p className="pt-filters-order">Order:<span className="pt-filters-value pt-filters-order-value">{ascending ? "ascending" : "descending"}</span></p>
                <p className="pt-filters-order">Total entries:<span className="pt-filters-value">{entriesNb}</span></p>
                <p className="pt-filters-order">
                    Showing
                    <select id="entries-to-display" defaultValue={entriesNbToDisplay} onChange={ (e) => handleEntriesNbChange(e)} className="pt-filters-value">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    entries
                </p>
            </div>
        }
        <div className="pretty-table-container">
            <table className="pretty-table" id={`ptable-${randomId}`}>
                <thead className="pretty-thead">
                    <tr className="pretty-thead-row">
                        {
                            data.columns.map( (col, i) => {
                                const key = `ptable-col-${col.data}-${i}`
                                return <th 
                                        className={`pretty-thead-cells ${col.data}`}
                                        id={`pt-${col.data}`}
                                        scope="col"
                                        key={key}
                                        aria-sort="none"
                                        onClick={(e) => handleTableClick(col.data, e)}>
                                            {col.title}
                                        </th>
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
                                            return <td
                                                    className={`pretty-tbody-cells ${employee.key}`}
                                                    key={`ptable-emp-td-${id}-${i}`}>
                                                        {employee.value}
                                                    </td>
                                        })
                                    }
                                </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    </>
}
