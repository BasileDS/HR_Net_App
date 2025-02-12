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
    const [ascending, setAscending] = useState(null)
    const [firstEntry, setFirstEntry] = useState(0)
    const [entriesNb, setEntriesNb] = useState(null)
    const [entriesNbToDisplay, setEntriesNbToDisplay] = useState(5)
    // const [reset, setReset] = useState(false)
    const [sortingType, setSortingType] = useState(null)
    const [employeesList, setEmployeesList] = useState(data.employees)
    const [sortedEmployeesList, setSortedEmployeesList] = useState(employeesList)
    const [filteredEmployeesList, setFilteredEmployeesList] = useState(null)
    
    const randomId = getRandomId(10)
    const activeEntriesNb = entriesNbToDisplay > entriesNb ? entriesNb : entriesNbToDisplay

    // type: string: the clicked cell data type. Ex: FirstName
    const handleTableClick = (type, e) => {
        const nbToDisplaySelect = document.querySelector("#entries-to-display")
        setEntriesNbToDisplay(Number(nbToDisplaySelect.value))
        setFirstEntry(0)
        
        setSortingType(type)

        const orderByFilterButton = document.querySelector("#pt-filters-order-value")
        const filterClicked = e.target

        if (orderByFilterButton === filterClicked) {
            const cellAriaSort = document.querySelector("th.active")
            toggleActiveFilter(cellAriaSort)
        } else {
            const cellAriaSort = filterClicked.getAttribute("aria-sort")
            const isCellActive = cellAriaSort === "none" ? false : true        
            isCellActive ? toggleActiveFilter(filterClicked) : changeFilterType(filterClicked)
        }
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
        const nbToDisplaySelect = document.querySelector("#entries-to-display")
        const showMoreButton = document.querySelector("#pt-show-more-button")

        if (e.target === showMoreButton) {
            nbToDisplaySelect.value = Number(entriesNbToDisplay) + Number(entriesNbToDisplay)
            setEntriesNbToDisplay(Number(nbToDisplaySelect.value))
        } else {
            const selectValue = e.target.value
            setFirstEntry(0)
            setEntriesNbToDisplay(selectValue)
        }
    }

    const handleSearchByFilter = (e) => {
        const searchInputValue = e.target.value.trim()
        const matchingElements = []

        const employeesCopy = [...employeesList]
        employeesCopy.forEach(employee => {
            Object.entries(employee).forEach(entry => {
                entry[1].toLowerCase().includes(searchInputValue.toLowerCase()) && matchingElements.push(employee)
            })
        })

        if (searchInputValue === "") {
            setFilteredEmployeesList(null)
        } else {
            setFilteredEmployeesList(matchingElements)
        }
    }

    const handleNextButton = () => {
        const nbToDisplaySelect = document.querySelector("#entries-to-display")
        setFirstEntry(Number(entriesNbToDisplay))
        setEntriesNbToDisplay(Number(entriesNbToDisplay) + Number(nbToDisplaySelect.value))
    }

    const handlePrevButton = () => {
        const nbToDisplaySelect = document.querySelector("#entries-to-display")
        setFirstEntry(firstEntry - Number(nbToDisplaySelect.value))
        setEntriesNbToDisplay(Number(entriesNbToDisplay) - Number(nbToDisplaySelect.value))
    }
    
    useEffect(() => {
        const employeesCopy = filteredEmployeesList !== null ? filteredEmployeesList : [...employeesList]

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
        const sortedEmployeesToDisplay = sortedEmployees.slice(firstEntry, Number(entriesNbToDisplay))

        setSortedEmployeesList(sortedEmployeesToDisplay)
        setEntriesNb(sortedEmployees.length)

    }, [sortingType, ascending, entriesNbToDisplay, filteredEmployeesList, firstEntry])
    
    return <>
        {
            <div id={`pt-filters-${randomId}`} className="pt-active-filters">
                <p className="pt-filters-order">Order:<span
                    id="pt-filters-order-value"
                    onClick={(e) => handleTableClick(sortingType, e)}
                    className="pt-filters-value pt-filters-order-value">{ascending === null ? "+ recent" : ascending ? "ascending" : "descending"}</span>
                </p>
                <p className="pt-filters-order">Total entries:<span className="pt-filters-value">{entriesNb}</span></p>
                <p className="pt-filters-order">
                    Showing
                    <select 
                    id="entries-to-display" 
                    defaultValue={entriesNbToDisplay} 
                    onChange={(e) => handleEntriesNbChange(e)} 
                    className="pt-filters-value">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    entries
                </p>
                <input 
                    type="search" 
                    id="pt-filters-search" 
                    onChange={(e) => handleSearchByFilter(e)} 
                    className="pt-filters-search" />
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
                        sortedEmployeesList.map((employee, i) => {
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
            <div className="pt-footer">
                <div className="pt-footer-nav">
                    <button
                        onClick={handlePrevButton} 
                        className={
                            firstEntry === 0 ?
                                "pt-footer-button-prev no-action" :
                                "pt-footer-button-prev"
                        }
                    >
                        Prev
                    </button>
                    <button 
                        onClick={handleEntriesNbChange} 
                        id="pt-show-more-button"
                        className={
                            activeEntriesNb === 0 ? 
                            "search-no-match" :
                            activeEntriesNb >= entriesNb ?
                                "no-action" :
                                "pt-footer-button"
                        }
                    >
                        {
                            activeEntriesNb === 0 ? 
                                "No employee matching search" :
                                activeEntriesNb >= entriesNb ?
                                    "Showing all employees" :
                                    "Show more employees"
                        }
                    </button>
                    <button
                        onClick={handleNextButton} 
                        className={
                            Number(activeEntriesNb) === Number(entriesNb) ?
                                "pt-footer-button-next no-action" :
                                firstEntry === 0 ?
                                    "pt-footer-button-next" :
                                    activeEntriesNb === entriesNb ?
                                        "pt-footer-button-next no-action" :
                                        "pt-footer-button-next"
                        }
                    >
                        Next
                    </button>
                    </div>
                <p className="pt-filters-order">
                    Showing {firstEntry} to {activeEntriesNb} from {entriesNb} entries 
                    {
                        filteredEmployeesList !== null ?
                            ` (filtered from ${employeesList.length} total entries)`
                        : ""
                    }
                </p>
            </div>
        </div>
    </>
}