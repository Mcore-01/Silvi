import { useState } from "react"
import BrandPanel from "../components/BrandPanel"
import ModifierCard from "../features/weapon/ModifierCard"
import SlotCard from "../features/weapon/SlotCard"
import { weapons } from "../data/WeaponData"
import WeaponCard from "../features/weapon/WeaponCard"
import TabBar from "../components/TabBar"
import SvgIcon from "../components/SvgIcon"
import ModifierTab from "../features/weapon/ModifierTab"
import { SLOTS } from "../data/Slots"
function WeaponLayout() {
    const tabs = SLOTS.map(slot => slot.label)
    tabs.unshift('Оружие')
    const [currentWeapon, setCurrentWeapon] = useState(null)
    const [activeTab, setActiveTab] = useState(tabs[0])
    const [modsList, setModsList] = useState([])

    const bonusToHit = (currentWeapon?.bonusHit ?? 0) + modsList.reduce((sum, mod) => sum + (mod.hit ?? 0), 0)
    const onSelectWeapon = (selectedWeapon) => {
        setCurrentWeapon(selectedWeapon)
        setModsList([])
    }
    
    const onSelectMod = (selectedMod) => {
        const newModList = modsList.filter(mod => mod.type != selectedMod.type)
        newModList.push(selectedMod)
        setModsList(newModList)
    }

    return(
        <div className='flex gap-20 p-2'>
            <div className='w-250 h-190'>
                <BrandPanel>
                    <h2 className="text-center text-3xl">{currentWeapon ? currentWeapon.name : "Лист оружия"}</h2>
                    <div className="w-full h-full relative grid grid-cols-4 grid-rows-2 gap-1">
                        <SvgIcon src={`./gun.svg`} className={`absolute w-full h-full flex flex-col justify-center items-center p-10 bg-icon`} />       
                        <div>
                            {currentWeapon ? <WeaponCard weapon={ currentWeapon } bgColor={"bg-slotcard"}/> : 
                                <SlotCard src={'./gun.svg'} />}
                        </div>
                        {SLOTS.map(slot => {
                            const mod = modsList.find(mod => mod.type === slot.id)
                            return <div key={slot.id}>
                                { mod ? <ModifierCard modifier={ mod } bgColor={"bg-slotcard"}/> : 
                                <SlotCard title={slot.title} src={slot.icon} />}    
                            </div>}
                        )}
                        <div className="flex flex-col justify-center items-center text-lg p-2 row-start-2">
                            <div className="text-center border-b-2 w-full p-4">Итоговый урон: {currentWeapon && `${currentWeapon.diceDamage} + ${currentWeapon.bonusDamage}`}</div>
                            <div className="text-center border-b-2 w-full p-4">Бонус на попадание: {currentWeapon && `${bonusToHit}`}</div>
                        </div>
                    </div>
                </BrandPanel>
            </div>
            <div className="w-250 flex flex-col gap-2">
                <TabBar tabNames={tabs} activeTab={activeTab} onChange={setActiveTab}/>
                {activeTab === 'Оружие' && <div className='flex gap-2 w-200 h-90'>  
                    {weapons.map(w => 
                        (<button key={w.id} 
                            className="min-w-60 min-h-80 cursor-pointer select-none" 
                            onClick={() => onSelectWeapon(w)}><WeaponCard weapon={ w } />
                        </button>))}
                </div>}
                {SLOTS.map(slot => (activeTab === slot.label && <ModifierTab key={slot.id} modType={slot.id} weaponType={currentWeapon ? currentWeapon.type : undefined} onSelectMod={onSelectMod}/>))}
            </div>
        </div>
    )
}

export default WeaponLayout