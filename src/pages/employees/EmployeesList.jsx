import PrettyTable from "../../plugins/prettyTable/PrettyTable";

const employees = [
    {
        firstName: 'Lorène',
        lastName: 'Génot',
        startDate: '26/02/2025',
        department: 'Marketing',
        dateOfBirth: '10/06/1989',
        street: '5 rue de la Paix',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001' 
    },
    {
        firstName: 'Clémentine',
        lastName: 'Henry',
        startDate: '12/02/2025',
        department: 'HR',
        dateOfBirth: '10/06/1994',
        street: '3 rue des Lilas',
        city: 'Lyon',
        state: 'Rhône-Alpes',
        zipCode: '69002' 
    },
    {
        firstName: 'Florian',
        lastName: 'Chevaux',
        startDate: '15/03/2025',
        department: 'Engineering',
        dateOfBirth: '15/05/1987',
        street: '12 avenue des Champs-Élysées',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75008' 
    },
    {
        firstName: 'Basile',
        lastName: 'Dos Santos',
        startDate: '01/04/2025',
        department: 'Tech',
        dateOfBirth: '28/03/1995',
        street: '9 rue du Bac',
        city: 'Marseille',
        state: 'Provence-Alpes-Côte d\'Azur',
        zipCode: '13001' 
    },
    {
        firstName: 'Inès',
        lastName: 'Lemoine',
        startDate: '10/04/2025',
        department: 'Finance',
        dateOfBirth: '22/11/1990',
        street: '2 rue des Roses',
        city: 'Toulouse',
        state: 'Occitanie',
        zipCode: '31000' 
    },
    {
        firstName: 'Thomas',
        lastName: 'Martin',
        startDate: '05/02/2025',
        department: 'Customer Service',
        dateOfBirth: '17/07/1984',
        street: '7 boulevard Saint-Germain',
        city: 'Bordeaux',
        state: 'Nouvelle-Aquitaine',
        zipCode: '33000' 
    },
    {
        firstName: 'Marie',
        lastName: 'Dupont',
        startDate: '20/03/2025',
        department: 'Operations',
        dateOfBirth: '30/09/1992',
        street: '10 rue de la Liberté',
        city: 'Nice',
        state: 'Provence-Alpes-Côte d\'Azur',
        zipCode: '06000' 
    },
    {
        firstName: 'Paul',
        lastName: 'Dubois',
        startDate: '25/01/2025',
        department: 'Legal',
        dateOfBirth: '03/04/1990',
        street: '15 rue de la République',
        city: 'Nantes',
        state: 'Pays de la Loire',
        zipCode: '44000' 
    },
    {
        firstName: 'Sophie',
        lastName: 'Lemoine',
        startDate: '08/02/2025',
        department: 'Marketing',
        dateOfBirth: '20/06/1985',
        street: '14 rue du Moulin',
        city: 'Lille',
        state: 'Hauts-de-France',
        zipCode: '59000' 
    },
    {
        firstName: 'Victor',
        lastName: 'Faure',
        startDate: '10/05/2025',
        department: 'Sales',
        dateOfBirth: '12/12/1991',
        street: '6 avenue Montaigne',
        city: 'Strasbourg',
        state: 'Grand Est',
        zipCode: '67000' 
    },
    {
        firstName: 'Lucie',
        lastName: 'Chopin',
        startDate: '18/03/2025',
        department: 'Development',
        dateOfBirth: '19/02/1996',
        street: '21 rue de la Gare',
        city: 'Grenoble',
        state: 'Auvergne-Rhône-Alpes',
        zipCode: '38000' 
    },
    {
        firstName: 'Antoine',
        lastName: 'Lemoine',
        startDate: '10/06/2025',
        department: 'Engineering',
        dateOfBirth: '01/09/1990',
        street: '13 rue des Vins',
        city: 'Caen',
        state: 'Normandie',
        zipCode: '14000' 
    },
    {
        firstName: 'Hélène',
        lastName: 'Vasseur',
        startDate: '15/07/2025',
        department: 'Product',
        dateOfBirth: '24/05/1988',
        street: '4 avenue du Parc',
        city: 'Rouen',
        state: 'Normandie',
        zipCode: '76000' 
    },
    {
        firstName: 'Julien',
        lastName: 'Marty',
        startDate: '02/09/2025',
        department: 'Operations',
        dateOfBirth: '18/04/1987',
        street: '16 rue des Noyers',
        city: 'Lyon',
        state: 'Rhône-Alpes',
        zipCode: '69007' 
    },
    {
        firstName: 'Camille',
        lastName: 'Delmas',
        startDate: '01/11/2025',
        department: 'Tech',
        dateOfBirth: '07/07/1993',
        street: '1 rue de la Pomme',
        city: 'Brest',
        state: 'Bretagne',
        zipCode: '29200' 
    },
    {
        firstName: 'Lucas',
        lastName: 'Perrot',
        startDate: '10/08/2025',
        department: 'Marketing',
        dateOfBirth: '30/01/1995',
        street: '3 rue du Soleil',
        city: 'Toulouse',
        state: 'Occitanie',
        zipCode: '31000' 
    },
    {
        firstName: 'Emilie',
        lastName: 'Germain',
        startDate: '20/09/2025',
        department: 'Customer Service',
        dateOfBirth: '02/08/1992',
        street: '8 rue des Acacias',
        city: 'Lille',
        state: 'Hauts-de-France',
        zipCode: '59000' 
    }
]

const data = {
    data: employees,
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

const config = {
    darkTheme: false,
    accentColor: "#50a2ff",
    useAccentColor: true,
    showSearchBar: true,
    searchBarToLeft: false,
    dataName: "Employee",
    showDataName: true
}

export default function EmployeesList () {
    
    return <>
    <div className="w-full">
        <h1 className="text-sm">All employees</h1>
        <PrettyTable data={data} config={config} />
    </div>
    </>
}