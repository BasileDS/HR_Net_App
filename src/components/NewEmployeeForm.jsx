export default function NewEmployeeForm () {

    return <>
        <form action="post" className="flex flex-col items-start gap-5 w-full">
            <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Personal information</legend>
                <div className="flex gap-5 w-full">
                    <div className="flex flex-col w-full">
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" placeholder="Basile"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" placeholder="Dos Santos"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input id="birthdate" type="date"/>
                    </div>
                </div>
            </fieldset>
            <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Address</legend>      
                <div className="flex gap-5 w-full">
                    <div className="flex flex-col w-full">
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                    </div>
                    </div>
                <div className="flex gap-5">
                    <div className="flex flex-col w-full">
                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>
                </div>
            </fieldset>
            <fieldset className="flex flex-col gap-5 px-8 py-5 pb-8 bg-white rounded-xl w-full">
                <legend className="text-md font-semibold px-4 py-1 bg-blue-400 text-white rounded-lg">Contract</legend>
                <div className="flex gap-5">    
                    <div className="flex flex-col w-full">
                        <label htmlFor="startDate">Start date</label>
                        <input id="startDate" type="date"/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="startDate">Department</label>
                        <select id="startDate" name="select">
                            <option value="">--Please choose an option--</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </div>
                </div>     
            </fieldset>
        </form>
    </>
}