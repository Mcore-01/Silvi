import { modifiers } from "../../data/ModifierData"
import ModifierCard from "./ModifierCard"

function ModifierTab ({modType, onSelectMod}){
    return(
        <div className='flex gap-2 w-200 h-90'>  
            {
                modifiers.filter(m => m.type === modType)
                    .map(m => 
                        (<button className="min-w-60 min-h-80 cursor-pointer select-none" onClick={() => onSelectMod(m)}>
                            <ModifierCard modifier={ m } />
                        </button>)
                    )
            }
        </div>   
    )
}

export default ModifierTab