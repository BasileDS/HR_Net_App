export default function IframeModal ({src, style, title}) {

    return <>
        <div className="w-full">
            <h2 className="text-center mb-4 text-xl">{title && title}</h2>
            <iframe src={src} style={style} ></iframe>
        </div>
    </>
}