import BrandPanel from "../../components/BrandPanel"
import { sizes } from "./Enums.styles"

function ModifierCard({ modifier, sizeIcon='medium' }){
    return(
        <BrandPanel>
            <div className="w-full h-full relative rounded-lg opacity-95">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <h3 className="top-1 text-center text-2xl">{modifier.name}</h3>
                    <div className="flex w-full mb-2">
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 mr-1"></div>
                        <img className={`${sizes[sizeIcon]}`} src={modifier.src} alt="картинка модификатора" />
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 ml-1"></div>
                    </div>
                    <p className="text-center">{modifier.description}</p>
                </div>
            </div>
        </BrandPanel>
    )
}

export default ModifierCard