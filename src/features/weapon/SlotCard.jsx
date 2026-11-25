import SvgIcon from "../../components/SvgIcon"

function SlotCard({ title, src }){
    return(
        <div className="w-full h-full relative bg-blue-50 border-2 border-blue-900 rounded-lg opacity-95">
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <SvgIcon src={`./${src}`} className={`w-20 h-10 bg-blue-900 dark:bg-amber-600`} />
                <div className="top-1 text-center text-lg">{title}</div>
            </div>
        </div>
    )
}

export default SlotCard