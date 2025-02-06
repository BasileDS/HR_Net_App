export default function NewEmployee () {
    return <>
        <div className="flex justify-center">
            <form action="GET" className="flex flex-col w-md">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
            </form>
        </div>
    </>
}