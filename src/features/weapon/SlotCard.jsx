import { sizes } from "./SlotCard.styles"

function SlotCard({ title, src, sizeIcon='medium' }){
    return(
        <div className="w-full h-full relative bg-blue-50 border-2 border-blue-900 rounded-lg opacity-95">
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <img className={`${sizes[sizeIcon]}`} src={src} alt="картинка модификатора" />
                <div className="top-1 text-center text-lg">{title}</div>
            </div>
        </div>
    )
}

export default SlotCard