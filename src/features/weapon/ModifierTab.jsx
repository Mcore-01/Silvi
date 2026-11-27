import { modifiers } from "../../data/ModifierData"
import ModifierCard from "./ModifierCard"

function ModifierTab ({modType, onSelectMod, weaponType}){
    let filteredMods = modifiers.filter(m => m.type === modType)
    if (weaponType) 
        filteredMods = filteredMods.filter(m => !m.excludeTypes.find(exType => exType === weaponType))
    return(
        <div className='flex flex-wrap justify-start gap-2 w-190 h-185 overflow-y-auto scrollbar-thin scrollbar-thumb-hover'>  
            {
                filteredMods
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