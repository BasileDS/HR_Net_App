import MainNav from "./MainNav";

export default function Header () {

    return <>
      <header className="w-full flex h-15 justify-center items-center bg-neutral-700">
        <div className="px-[3em] w-full flex justify-between">
          <h1 className="text-xl font-semibold uppercase">HR Net</h1>
          <MainNav />
        </div>
      </header>
    </>
}