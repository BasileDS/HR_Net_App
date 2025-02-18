import ToPageButton from "../components/ToPageButton"

export default function Home () {
    return <>
        <div className="flex justify-center p-9">
            <div className="max-w-[850px] w-full text-center">
                <h1 className="text-2xl mb-6">HR Net Home Page</h1>
                <h2 className="text-lg">HR Net features</h2>
                <ToPageButton path="/employees/employees-list" text="View employees list" type=""/>
                <ToPageButton path="/employees/new-employee" text="Add new employee" type=""/>
                <h2 className="text-lg mt-5">HR Net doc</h2>
                <ToPageButton path="/employees/how-to-use-hrnet" text="How to use HR Net" type="outlined"/>
                <ToPageButton path="/documentation" text="App documentation" type="outlined"/>
                <h2 className="text-lg mt-5">Pretty Table Doc</h2>
                <ToPageButton path="https://github.com/BasileDS/Pretty-Table/blob/main/README.md" text="Pretty Table documentation" type="outlined"/>
                <ToPageButton path="/performances" text="Pretty Table Performances Comparison" type="outlined"/>
            </div>
        </div>
    </>
}