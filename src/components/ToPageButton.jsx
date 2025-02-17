/* eslint-disable react/prop-types */
import { NavLink } from "react-router"

export default function ToPageButton ({path, text, type}) {

    return <>
    <div className="flex justify-center my-2" >
        <NavLink
            to={path}
            className={`text-sm px-5 py-1.5 w-fit rounded-2xl cursor-pointer ${type !== "outlined" ? "bg-[#50a2ff] text-white" : "border border-solid border-[#50a2ff] text-[#50a2ff]" }`}>
            {text}
        </NavLink>
    </div>
    </>
}