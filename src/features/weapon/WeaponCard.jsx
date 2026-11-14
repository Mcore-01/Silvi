import BrandPanel from "../../components/BrandPanel";
import SlotCard from "./SlotCard";

function WeaponCard(){
    return(
        <BrandPanel>
            <h2 className="text-center text-3xl">Лист оружия</h2>
            <div className="w-210 h-150 relative grid grid-cols-4 grid-rows-2 gap-1">
                <img className="absolute w-full h-full flex flex-col justify-center items-center p-10" src="gun.svg" alt="" />
                <SlotCard src={'gun.svg'} />
                <SlotCard title={'Место под ствол'} src={'gun barrel.svg'} />
                <SlotCard title={'Место под прицел'} src={'zoom.svg'} />
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
    )
}

export default WeaponCard