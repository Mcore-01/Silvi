import BrandPanel from "../../components/BrandPanel"
import { sizes } from "./Enums.styles"

function WeaponCard ({ weapon, sizeIcon='medium' }) {
    return (
        <BrandPanel>
            <article className="w-full h-full relative rounded-lg opacity-95">
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <h3 className="top-1 text-center text-2xl">{weapon.name}</h3>
                    <section className="flex w-full mb-2">
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 mr-1"></div>
                        <img className={`${sizes[sizeIcon]}`} src={ `./weapons/${weapon.src}` } alt="картинка оружия" />
                        <div className="bg-blue-900 w-full h-0.5 self-center m-0.5 ml-1"></div>
                    </section>
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div>{weapon.diceDamage}</div>
                        <div>{weapon.armorPenetration}</div>
                        <div>{weapon.magazineCapacity}</div>
                        <div>{`${weapon.normalDistance}/${weapon.maxDistance}`}</div>
                    </div>
                    <p className="text-center">{weapon.description}</p>
                </div>
            </article>
        </BrandPanel>
    )
}

export default WeaponCard