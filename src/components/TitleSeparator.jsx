export default function TitleSeparator ({title}) {
    return <>
        <div className=" rounded-xl w-full flex justify-center items-center p-6 bg-blue-200">
            <p className="text-xl font-bold">{title}</p>
        </div>
    </>
}