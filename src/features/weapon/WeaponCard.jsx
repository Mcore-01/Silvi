import BrandPanel from "../../components/BrandPanel"
import SvgIcon from "../../components/SvgIcon"

function WeaponCard ({ weapon, bgColor }) {
    return (
        <BrandPanel bgColor={bgColor}>
            <article className="w-full h-full relative rounded-lg opacity-95">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <h3 className="top-1 text-center text-2xl">{weapon.name}</h3>
                    <section className="flex w-full mb-2">
                        <div className="bg-icon w-full h-0.5 self-center m-0.5 mr-1"></div>
                        <SvgIcon src={`./weapons/${weapon.src}`} className={`w-20 h-10 bg-icon`} />
                        <div className="bg-icon w-full h-0.5 self-center m-0.5 ml-1"></div>
                    </section>
                    <div className="relative grid grid-cols-2 grid-rows-2 gap-0.5 border border-icon bg-icon text-center text-lg">
                        <div className={`bg-background p-1 ${bgColor}`}>{weapon.diceDamage}</div>
                        <div className={`bg-background p-1 ${bgColor}`}>{weapon.armorPenetration}</div>
                        <div className={`bg-background p-1 ${bgColor}`}>{weapon.magazineCapacity}</div>
                        <div className={`bg-background p-1 ${bgColor}`}>{`${weapon.normalDistance}/${weapon.maxDistance}`}</div>
                    </div>
                    <p className="text-center text-lg">{weapon.description}</p>
                </div>
            </article>
        </BrandPanel>
    )
}

export default WeaponCard