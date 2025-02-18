import IframeModal from "../../components/IframeModal"
import TitleSeparator from "../../components/TitleSeparator"

export default function Performances () {

    const newLibPerfSrc = "https://basileds.github.io/HR_Net_App/src/new-table-lib-performance.html"
    const oldLibPerfSrc = "https://basileds.github.io/HR_Net_App/src/old-table-lib-performances.html"
    const newLibPerfSort = "https://basileds.github.io/HR_Net_App/src/new-lib-display-more.html"
    const oldLibPerfSort = "https://basileds.github.io/HR_Net_App/src/old-lib-display-more.html"

    const iframeStyle = {
        width: "100%",
        height: "450px",
        borderRadius: "10px"
    }

    return <>
        <div className="flex w-full justify-center p-[3em] overflow-hidden">
            <div className="flex flex-col gap-5 w-full items-center">
                <div className="flex flex-col gap-4 mb-8">
                    <h1 className="text-3xl">Table Library Performances Comparison</h1>
                </div>
                <TitleSeparator title="Light House loading page performance test" />
                <div className="flex gap-4 w-full justify-center">
                    <IframeModal src={oldLibPerfSrc} style={iframeStyle} title="jQuery Library" />
                    <IframeModal src={newLibPerfSrc} style={iframeStyle} title="React Library" />
                </div>
                <TitleSeparator title="Light House Sorting performance test" />
                <div className="flex gap-4 w-full justify-center">
                    <IframeModal src={oldLibPerfSort} style={iframeStyle} title="jQuery Library" />
                    <IframeModal src={newLibPerfSort} style={iframeStyle} title="React Library" />
                </div>
            </div>
        </div>
    </>
}