import { useState } from "react"
import BrandPanel from "../components/BrandPanel"
import ModifierCard from "../features/weapon/ModifierCard"
import SlotCard from "../features/weapon/SlotCard"
import { weaponsData } from "../data/WeaponData"
import { modifiersData } from "../data/ModifierData"
import WeaponCard from "../features/weapon/WeaponCard"
import TabBar from "../components/TabBar"
function WeaponLayout() {
    const tabs = ['Оружие', 'Прицел']
    const [weapons, setWeapons] = useState(weaponsData)
    const [mods, setMods] = useState(modifiersData)
    const [currentWeapon, setCurrentWeapon] = useState()
    const [currentZoom, setCurrentZoom] = useState()
    const [activeTab, setActiveTab] = useState(tabs[0])

    const onSelectWeapon = (selectedWeapon) => {
        setCurrentWeapon(selectedWeapon)
    }
    
    const onSelectMod = (selectedMod) => {
        if(selectedMod.type === 'zoom'){
            if(currentZoom)
                setCurrentWeapon(prev => ({...prev, bonusHit: currentWeapon.bonusHit - currentZoom.hit + selectedMod.hit}))
            else
                setCurrentWeapon(prev => ({...prev, bonusHit: currentWeapon.bonusHit + selectedMod.hit}))

            setCurrentZoom(selectedMod)
        }   
    }

    return(
        <div className='flex gap-20 p-2'>
            <div className='w-250 h-190'>
                <BrandPanel>
                    <h2 className="text-center text-3xl">{currentWeapon ? currentWeapon.name : "Лист оружия"}</h2>
                    <div className="w-full h-full relative grid grid-cols-4 grid-rows-2 gap-1">
                        <img className="absolute w-full h-full flex flex-col justify-center items-center p-10" src="gun.svg" alt="" />
                        <div>
                            {currentWeapon ? <WeaponCard weapon={ currentWeapon } bgColor={"bg-blue-50"}/> : <SlotCard src={'gun.svg'} />}
                        </div>
                        <SlotCard title={'Место под ствол'} src={'gun_barrel.svg'} />
                        <div>
                            {currentZoom ? <ModifierCard modifier={ currentZoom } bgColor={"bg-blue-50"}/> : 
                                    <SlotCard title={'Место под прицел'} src={'zoom.svg'} />}
                        </div>
                        <SlotCard title={'Место под: штык ножи, фонарик, коллиматоры, умную камеру и лазерные прицелы'} src={'second_zoom.svg'} sizeIcon="large"/>
                        <div className="flex flex-col justify-center items-center text-lg p-2">
                            <div className="text-center border-b-2 w-full p-4">Итоговый урон: {currentWeapon && `${currentWeapon.diceDamage} + ${currentWeapon.bonusDamage}`}</div>
                            <div className="text-center border-b-2 w-full p-4">Бонус на попадание: {currentWeapon && `${currentWeapon.bonusHit}`}</div>
                        </div>
                        <SlotCard title={'Место под подствольник'} src={'under_barrel.svg'} />
                        <SlotCard title={'Место под магазин'} src={'magazine.svg'} />
                        <SlotCard title={'Место под тип боеприпаса'} src={'bullet.svg'} sizeIcon="small" />
                    </div>
                </BrandPanel>
            </div>
            <div className="w-250 flex flex-col gap-2">
                <TabBar tabNames={tabs} activeTab={activeTab} onChange={setActiveTab}/>
                {activeTab === 'Оружие' && <div className='flex gap-2 w-200 h-90'>  
                    {weapons.map(w => (<div className="min-w-60 min-h-80 cursor-pointer select-none" onClick={() => onSelectWeapon(w)}><WeaponCard weapon={ w } /></div>))}
                    <div onClick={() => setCurrentWeapon(null)}>X</div>
                </div>}
                {activeTab === 'Прицел' && <div className='flex gap-2 w-200 h-90'>  
                    {
                        mods.filter(m => m.type === 'zoom')
                            .map(m => 
                                (<div className="min-w-60 min-h-80 cursor-pointer select-none" onClick={() => onSelectMod(m)}>
                                    <ModifierCard modifier={ m } />
                                </div>)
                            )
                    }
                    <div onClick={() => setCurrentZoom(null)}>X</div>
                </div>}
            </div>
        </div>
    )
}

export default WeaponLayout