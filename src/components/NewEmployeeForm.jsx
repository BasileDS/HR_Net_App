// List of USA States added to the form
import states from "../assets/states.json"
import { useState } from "react"
import { NavLink } from "react-router"
import ToPageButton from "./ToPageButton"
import store from "../app/store"
import { addNewEmployee } from "../app/employeesSlice"

export default function NewEmployeeForm () {
    const [modalClosed, setModalClosed] = useState(true)

    /**
     * Simple function that closes the add new employee success modal.
     */
    const closeModal = () =>{
        setModalClosed(true)
    }

    /**
     * Function that is triggered on add new employee form submit by clicking the "add new employee" button.
     * @param {object} e - Event passed as an argument to get the form DOM element and store its inputs values in an object. The "data" object that gets the input values must have the same structure as the one used to display information on the Pretty Table component.
     */
    const handleSubmitForm = (e) => {
        e.preventDefault()
        window.scroll(0, 0)   
        setModalClosed(false)

        const formData = e.target
        const data = {
            firstName: formData.elements.firstName.value,
            lastName: formData.elements.lastName.value,
            startDate: formData.elements.startDate.value,
            department: formData.elements.select.value,
            dateOfBirth: formData.elements.birthdate.value,
            street: formData.elements.street.value,
            city: formData.elements.city.value,
            state: formData.elements.state.value,
            zipCode: formData.elements.zipCode.value
        }
        store.dispatch(addNewEmployee(data))
        e.target.reset()
    }
    
    /**
     * The "modal" object allow us to give quick update to the add new employee success modal.
     */
    const modal = {
        title: "Employee added",
        description: "You juste added a new employee to the database. What do you want to do now ?",
        button1: "Add a new employee",
        buttonUrl1: "/employees/new-employee",
        button2: "See employees list",
        buttonUrl2: "/employees/employees-list"
    }
        
    return <>
            {
                <div className={`${modalClosed && "hidden"} modal overflow-hidden z-999 w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]`}>
                    <div className="bg-white p-8 rounded-md flex flex-col gap-5 text-center">
                        <p className="modal-title text-2xl">
                            {modal.title}
                        </p>
                        <p className="modal-description">
                            {modal.description}
                        </p>
                        <div className="flex gap-3">
                            <button onClick={closeModal}
                                className="text-center text-md text-white font-semibold px-4 py-2 bg-blue-400 text-white rounded-3xl hover:bg-blue-300 w-full cursor-pointer"
                            >
                                {modal.button1}
                            </button>
                            <NavLink
                                to={modal.buttonUrl2} 
                                className="text-center text-md text-white font-semibold px-4 py-2 bg-blue-400 text-white rounded-3xl hover:bg-blue-300 w-full cursor-pointer"
                            >
                                {modal.button2}
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
            <form onSubmit={(e) => handleSubmitForm(e) } action="" method="post" className="flex flex-col items-start gap-5 w-full">
                <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                    <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Personal information</legend>
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text"  />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text"  />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="birthdate">Birthdate</label>
                            <input id="birthdate" type="date"  />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                    <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Address</legend>      
                    <div className="flex gap-5 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text"  />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text"  />
                        </div>
                        </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-full">
                            <label htmlFor="state">State</label>
                            <select name="state" id="state"  >
                                <option value="">Select a state</option>
                                {
                                    states.map(state => {
                                        return <option
                                                key={state.abbreviation}
                                                value={state.abbreviation}
                                            >
                                                {state.name}
                                            </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input id="zipCode" type="number"  />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                    <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Contract</legend>
                    <div className="flex gap-5">    
                        <div className="flex flex-col w-full">
                            <label htmlFor="startDate">Start date</label>
                            <input id="startDate" type="date"  />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="startDate">Department</label>
                            <select id="startDate" name="select"  >
                                <option value="">Select a department</option>
                                <option value="Sales">Sales</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="HumanResources">Human Resources</option>
                                <option value="Legal">Legal</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <div className="flex flex-col items-center w-full">
                    <button type="submit" className="text-sm px-5 py-1.5 bg-[#50a2ff] text-white w-fit rounded-2xl cursor-pointer">Create new employee</button>
                    <ToPageButton path="/employees/employees-list" text={"See employees list"} type="outlined" />
                </div>
            </form>
        </>
}