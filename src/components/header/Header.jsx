import MainNav from "../mainNav/MainNav";

export default function Header () {

    return <>
      <header className="flex place-content-between space-x-4">
        <h1 class="text-xl uppercase">HR Net</h1>
        <MainNav />
      </header>
    </>
}