import { Link } from "react-router";

import PrettyTable from "pretty-table-ds";

import { data, config} from "./data/docTablesData"

export default function EmployeesHome () {



    return <>
        <div className="max-w-[850px]">
            <div className="flex flex-col gap-4 mb-8">
                <h1 className="text-3xl">HR Net documentation</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl">1. Employees list</h2>
                <h3 className="text-md">1.1 View the employees list</h3>
                <p>
                    The HR Net allows company HR staff to <Link to="/employees/employees-list" className="text-blue-500" >access the full employees list</Link>.
                    First ordered from the most recent add employee, the employees list can also be sorted by ascending or descending order.
                </p>
                <h3 className="text-md">1.2. Sort employees</h3>
                <p>
                    To sort employees, start by <Link to="/employees/employees-list" className="text-blue-500" >visiting the employees list page</Link>, then click on the data type you wish to sort.
                    For instance, if you want to sort employees by <em>Last Name</em>, click on the table <span className="doc-object text-nowrap">Last Name</span> cell.
                    It will automatically sort the employees by ascending order.
                    <br /><br />
                    To sort by descending order, click again on the current sorted data type and see the table showing the results displayed by descending order.
                    Finally, you can also click on the <span className="doc-object text-nowrap">Order : <em>order</em></span> indicator to switch from ascending to descending order.
                    To do so, make sure to select a sorting data type before. If not, the table won't sort any data since it doesn't know on what data it needs to sort the data.
                </p>
                <h3 className="text-md">1.3. View more employees</h3>
                <p>
                    To help you with your work, you can choose to display more employees per page by selecting the number of entries to display.
                    To do it, just click the <span className="doc-object text-nowrap">Show XX entries</span> and select how much employees you would like to view at the same time.
                </p>
                <h3 className="text-md">1.4. Navigate through employees pages</h3>
                <p>
                    HR Net <em>View employees</em> module allows you to navigate through employees page by
                    clicking the <span className="button text-nowrap">Prev</span> and <span className="button text-nowrap">Next</span> buttons at the bottom of the table.
                    As the table navigates through pages, the current page number is display between 
                    the <span className="button text-nowrap">Prev</span> and <span className="button text-nowrap">Next</span> buttons on
                    a <span className="doc-object text-nowrap">Page XX</span> indicator.
                </p>
                <br />
                <div className="p-6 border-1 bg-blue-50 border-blue-100 rounded-lg relative">
                    <p className="px-4 py-1 text-white absolute top-[-10px] left-[-5px] text-xs bg-blue-400 rounded-2xl">Try yourself</p>
                    <p>Use the following table to see how it works.</p>
                </div>
                <div className="px-6 py-2 border-1 border-blue-200 rounded-lg relative">
                    <PrettyTable data={data} config={config} />
                </div>
            </div>
            <br /><br />
            <div>
                <h2 className="text-2xl">2. Add a new employee</h2>
                <p> 
                    To add a new employee to the company database, <Link to="/employees/employees-list" className="text-blue-500" >access the Add new employee page</Link> and
                    fill the form with the employee related data. As soon as all fields are filled, click on the <span className="button text-nowrap">Add new eployee</span> button.
                    A success message should show up !
                    If some data does not match the required type, a message will let you know how to process to make it work.
                </p>
            </div>
            <div className="my-8">
                <h2 className="text-2xl">Dev documentation</h2>
                <p> 
                    This web site has been build using ReactJS and PrettyTableDS library to enhance employees list view.
                    If you plan to modify this code for further improvment, read the knwoledge base 
                    on the official <Link to="/employees/dev-doc" className="text-blue-500" >HR Net documentation</Link> and 
                    the <Link to="/employees/dev-doc" className="text-blue-500" >Pretty Table DS official documentation</Link>.
                    Ressources : <br /><br />
                    <Link to="/documentation" className="underline" > HR Net documentation</Link> <span className="doc-object text-nowrap">internal link</span> <br /><br />
                    <Link to="/" className="underline" >Pretty Table DS official documentation</Link> <span className="doc-object text-nowrap">external link</span>
                </p>
            </div>
        </div>
    </>
}