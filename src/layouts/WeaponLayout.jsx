import { useState } from "react"
import BrandPanel from "../components/BrandPanel"
import ModifierCard from "../features/weapon/ModifierCard"
import SlotCard from "../features/weapon/SlotCard"
import { weapon } from "../data/WeaponData"
import { modifiersData } from "../data/ModifierData"
import WeaponCard from "../features/weapon/weaponCard"
function WeaponLayout() {
    const [weaponData, setWeaponData] = useState(weapon)
    const [modsData, setModsData] = useState(modifiersData)

    const onClickMod = () => {

    }
    return(
        <div className='flex flex-col gap-20 p-2'>
            <div className='w-200 h-150'>
                <BrandPanel>
                    <h2 className="text-center text-3xl">{weaponData.name}</h2>
                    <div className="w-full h-full relative grid grid-cols-4 grid-rows-2 gap-1">
                        <img className="absolute w-full h-full flex flex-col justify-center items-center p-10" src="gun.svg" alt="" />
                        <SlotCard src={'gun.svg'} />
                        <SlotCard title={'Место под ствол'} src={'gun barrel.svg'} />
                        <div>
                            <SlotCard title={'Место под прицел'} src={'zoom.svg'} />
                            <ModifierCard modifier={ modsData[0] }/>
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
            <div className='w-50 h-65' onClick={onClickMod}>
                {/* <ModifierCard modifier={ modsData[0] }/> */}
                <WeaponCard weapon={ weaponData } />
            </div>
        </div>
    )
}

export default WeaponLayout