import { NavLink } from "react-router"
import EmployeesAside from "../../components/EmployeesAside"

export default function Documentation () {

    return <>

        <div className="flex w-full">
            <EmployeesAside />
            <div className="flex w-full justify-center p-[3em] overflow-hidden">
                <div className="flex flex-col gap-5 w-full items-center">
                    <div className="max-w-[850px]">
                        <div className="flex flex-col gap-4 mb-8">
                            <h1 className="text-3xl">HR Net dev mode</h1>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                Welcome to the <em>HR Net</em> official documentation. Here we stand to gather all information dealing 
                                with the HR Net App and HR Net further developpments. If you are new to it, read carefully this page before using the app.
                            </p>
                            <h2 className="text-2xl">HR Net architecture</h2>
                            <div className="flex gap-7">
                                <div className="flex flex-col gap-4">
                                    <p>
                                        The HR Net app is build using <em>ReactJS</em>, <em>React Router</em> and developped using ViteJS.
                                    </p>
                                    <p>
                                        A custom <em>PrettyTableDS</em> library available on the NPM has been created and is been used to
                                        enhance employees data presentation for Human Ressources services.
                                    </p>
                                    <p>
                                        Its structure follows the React basics recommandation, using specific folders for pages, components and assets.
                                        The <em>App.jsx</em> file allows us to configure the <em>React Router</em> while the <em>Main.jsx</em> file
                                        displays the app on page <em>body</em>
                                    </p>
                                    <p>
                                        At this stage of the App developpment, which is pretty early, the structure is not
                                        fixed and can still change based on next developpment steps.
                                    </p>
                                </div>
                                <div className="border mt-[10px] ml-[10px] border-stone-400 rounded-lg px-7 py-5 pt-8 relative min-w-[250px]">
                                    <p className="bg-blue-400 text-white rounded-lg text-xs px-2 py-1 absolute top-[-10px] left-[-10px]">HR Net App Structure</p>
                                    <p className="mb-2"><span className="doc-pres-folder ">HR Net App</span></p>
                                    <p className="mb-2">_ <span className="doc-pres-folder ">src</span></p>
                                    <p className="mb-2">_ _ <span className="doc-pres-folder ">assets</span></p>
                                    <p className="mb-2">_ _ _ <span className="text-[10px] ">assets.svg</span></p>
                                    <p>_ _ <span className="doc-pres-folder ">components</span></p>
                                    <p className="mb-2">_ _ _ <span className="text-[10px] ">Component.jsx</span></p>
                                    <p>_ _ <span className="doc-pres-folder ">pages</span></p>
                                    <p className="mb-2">_ _ _ <span className="text-[10px] ">Page.jsx</span></p>
                                    <p>_ _ <span className="text-[10px] ">App.jsx</span></p>
                                    <p>_ _ <span className="text-[10px] ">App.css</span></p>
                                    <p>_ _ <span className="text-[10px] ">Main.jsx</span></p>
                                    <p>_ _ <span className="text-[10px] ">Main.css</span></p>
                                    <p>_ _ <span className="text-[10px] ">index.html</span></p>
                                </div>
                            </div>
                            <h2 className="text-2xl">HR Net features</h2>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-md">Home page</h2>
                                <p>
                                    The HR Net app provides a very simple home page that gives access to all main pages and modules of the app.
                                </p>
                                <p>
                                    Thus, you can navigate to <em>Employees List</em> to see all company employees, add a <em>new employee</em>,
                                    or get on the <em>How to use HR Neet</em> to know more on how to wowrk with this solution.
                                </p>
                                <h2 className="text-md">New employee</h2>
                                <p>
                                    On the new employee page, HR services are able to fil a basic HTML form with a form validation provided by
                                    browser if available on user browser. On form submit, a modal component is rendered to inform the user that 
                                    the employee has been successfully created. Two buttons are displayed under the message to <em>add new employe</em> or
                                    <em>view all employees</em>.
                                </p>
                            </div><br />
                            <p> 
                                <strong>Other ressources : </strong><br /><br />
                                <span className="doc-object text-nowrap">external span</span> <NavLink to="https://github.com/BasileDS/Pretty-Table/blob/main/README.md" className="underline" >Pretty Table DS official documentation</NavLink> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}