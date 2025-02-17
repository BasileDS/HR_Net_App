const employees = [
    {
        "firstName": "Lorène",
        "lastName": "Génot",
        "dateOfBirth": "10/06/1989",
    },
    {
        "firstName": "Clémentine",
        "lastName": "Henry",
        "dateOfBirth": "10/06/1994",
    },
    {
        "firstName": "Florian",
        "lastName": "Chevaux",
        "dateOfBirth": "15/05/1987"
    }
]

export const data = {
    data: employees,
    columns: [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
    ]
}

/**
 * Object of key/value paired entries that sets the Pretty Table component configuration.
 */
export const config = {
    accentColor: "#50a2ff",
    useAccentColor: false,
    showSearchBar: false,
    searchBarToLeft: false
}