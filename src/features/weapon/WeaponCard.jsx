import BrandPanel from "../../components/BrandPanel"
import { sizes } from "./Enums.styles"

function WeaponCard ({ weapon, bgColor, sizeIcon='medium' }) {
    return (
        <BrandPanel bgColor={bgColor}>
            <article className="w-full h-full relative rounded-lg opacity-95">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <h3 className="top-1 text-center text-2xl">{weapon.name}</h3>
                    <section className="flex w-full mb-2">
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 mr-1"></div>
                        <img className={`${sizes[sizeIcon]}`} src={ `./weapons/${weapon.src}` } alt="картинка оружия" />
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 ml-1"></div>
                    </section>
                    <div className="relative grid grid-cols-2 grid-rows-2 gap-px border bg-black text-center text-lg">
                        <div className="bg-white p-1">{weapon.diceDamage}</div>
                        <div className="bg-white p-1">{weapon.armorPenetration}</div>
                        <div className="bg-white p-1">{weapon.magazineCapacity}</div>
                        <div className="bg-white p-1">{`${weapon.normalDistance}/${weapon.maxDistance}`}</div>
                    </div>
                    <p className="text-center text-lg">{weapon.description}</p>
                </div>
            </article>
        </BrandPanel>
    )
}

export default WeaponCard