import { useState } from "react"
import BrandPanel from "../components/BrandPanel"
import ModifierCard from "../features/weapon/ModifierCard"
import SlotCard from "../features/weapon/SlotCard"
import { weaponsData } from "../data/WeaponData"
import { modifiersData } from "../data/ModifierData"
import WeaponCard from "../features/weapon/WeaponCard"
import TabBar from "../components/TabBar"
function WeaponLayout() {
    const tabs = ['Weapon', 'Zoom']
    const [weapons, setWeapons] = useState(weaponsData)
    const [mods, setMods] = useState(modifiersData)
    const [currentWeapon, setCurrentWeapon] = useState()
    const [activeTab, setActiveTab] = useState(tabs[0])

    const onSelectWeapon = (selectedWeapon) => {
        setCurrentWeapon(selectedWeapon)
    }
    
    return(
        <div className='flex flex-col gap-20 p-2'>
            <div className='w-250 h-190'>
                <BrandPanel>
                    <h2 className="text-center text-3xl">{currentWeapon ? currentWeapon.name : "Лист оружия"}</h2>
                    <div className="w-full h-full relative grid grid-cols-4 grid-rows-2 gap-1">
                        <img className="absolute w-full h-full flex flex-col justify-center items-center p-10" src="gun.svg" alt="" />
                        <div>
                            {currentWeapon ? <WeaponCard weapon={ currentWeapon } bgColor={"bg-blue-50"}/> : <SlotCard src={'gun.svg'} />}
                        </div>
                        <SlotCard title={'Место под ствол'} src={'gun barrel.svg'} />
                        <div>
                            <SlotCard title={'Место под прицел'} src={'zoom.svg'} />
                            <ModifierCard modifier={ mods[0] }/>
                        </div>
                        <SlotCard title={'Место под: штык ножи, фонарик, коллиматоры, умную камеру и лазерные прицелы'} src={'second zoom.svg'} sizeIcon="large"/>
                        <div className="flex flex-col justify-center items-center text-lg p-2">
                            <div className="text-center border-b-2 w-full p-4">Итоговый урон</div>
                            <div className="text-center border-b-2 w-full p-4">Бонус на попадание</div>
                        </div>
                        <SlotCard title={'Место под подствольник'} src={'under barrel.svg'} />
                        <SlotCard title={'Место под магазин'} src={'magazine.svg'} />
                        <SlotCard title={'Место под тип боеприпаса'} src={'bullet.svg'} sizeIcon="small" />
                    </div>
                </BrandPanel>
            </div>
            <div className="w-250 flex flex-col gap-2">
                <TabBar tabNames={tabs} activeTab={activeTab} onChange={setActiveTab}/>
                {activeTab === 'Weapon' && <div className='flex gap-2 w-200 h-90 overflow-y-auto'>  
                    {weapons.map(w => (<div className="w-full h-full cursor-pointer select-none" onClick={() => onSelectWeapon(w)}><WeaponCard weapon={ w } /></div>))}
                    <div onClick={() => setCurrentWeapon(null)}>X</div>
                </div>}
            </div>
        </div>
    )
}

export default WeaponLayout