import { modifiers } from "../../data/ModifierData"
import ModifierCard from "./ModifierCard"

function ModifierTab ({modType, onSelectMod}){
    return(
        <div className='flex flex-wrap justify-start gap-2 w-190 h-185 overflow-y-auto scrollbar-thin scrollbar-thumb-hover'>  
            {
                modifiers.filter(m => m.type === modType)
                    .map(m => 
                        (<button key={m.id} className="min-w-60 h-90 cursor-pointer select-none" onClick={() => onSelectMod(m)}>
                            <ModifierCard modifier={ m } />
                        </button>)
                    )
            }
        </div>   
    )
}

export default ModifierTab