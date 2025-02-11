import PrettyTable from "../../plugins/prettyTable/PrettyTable";

const employees = [
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Maman',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'Architecture',
        dateOfBirth: '10/06/1994',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '26/02/2025',
        department: 'DevLead',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '12/05/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Maman',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'Architecture',
        dateOfBirth: '10/06/1994',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '26/02/2025',
        department: 'DevLead',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '12/05/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Maman',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'Architecture',
        dateOfBirth: '10/06/1994',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '26/02/2025',
        department: 'DevLead',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '12/05/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Maman',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'Architecture',
        dateOfBirth: '10/06/1994',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '26/02/2025',
        department: 'DevLead',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '12/05/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Maman',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'Architecture',
        dateOfBirth: '10/06/1994',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '26/02/2025',
        department: 'DevLead',
        dateOfBirth: '10/06/1989',
        street: 'No se',
        city: 'Nice',
        state: 'Sud',
        zipCode: '33000' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '12/05/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '5 boulevard Paixhans',
        city: 'Metz',
        state: 'Lorraine',
        zipCode: '57000' 
    }
]

const data = {
    employees: employees,
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

export default function EmployeesList () {
    
    return <>
    <div className="w-full">
        <h1 className="text-sm">All employees</h1>
        <PrettyTable data={data} />
    </div>
    </>
}