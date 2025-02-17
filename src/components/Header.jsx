import { NavLink } from "react-router"
import MainNav from "./MainNav"

export default function Header () {

    return <>
      <header className="w-full flex h-15 justify-center items-center bg-neutral-700">
        <div className="px-[3em] w-full flex justify-between">
          <NavLink to="/"><h1 className="text-xl font-semibold uppercase">HR Net</h1></NavLink>
          <MainNav />
        </div>
      </header>
    </>
}