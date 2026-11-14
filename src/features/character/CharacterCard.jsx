import CharacterAvatar from "./CharacterAvatar"
import Panel from "../../components/Panel"
import RoundedInput from "../../components/RoundedInput"
import { characterData } from "../../data/CharacterData"
import { useState } from "react"
import AbilityScore from "./AbilityScore"
import BrandPanel from "../../components/BrandPanel"
function CharacterCard(){
    const [character, setCharacter] = useState(characterData)

    const updateField = (field, value) => {
        setCharacter(prev => ( {...prev, field: value}))
    }

    return(
        <BrandPanel>
            <div className='w-120 h-fit'>
                <header className='text-5xl text-center mb-2'>Крыса</header>
                <div className='grid grid-cols-2 gap-2'>
                    <CharacterAvatar src={'rat.png'}/>
                    <div className='grid grid-rows-2 gap-2'>
                        <Panel title={'Уворот и защита'}>
                            <div className='grid grid-cols-2 gap-1 p-1'>
                                <RoundedInput label={'Уворот'} value={character.dodge} onChange={ (value)=> updateField('dodge', value) }/>
                                <RoundedInput label={'Класс защиты'} value={character.armor}  onChange={ (value)=> updateField('armor', value) }/>
                            </div>
                        </Panel>
                        <Panel title={'Здоровье'}>
                            <div className='flex gap-1 p-1'>
                                <RoundedInput label={'Текущие хиты'} value={character.hpCurrent}  onChange={ (value)=> updateField('hpCurrent', value) }/>
                                <div>
                                    <RoundedInput label={'Временные'} value={character.hpTemp}  onChange={ (value)=> updateField('hpTemp', value) }/>
                                    <RoundedInput label={'Макс хиты'} value={character.hpMax}  onChange={ (value)=> updateField('hpMax', value) }/>
                                </div>
                            </div>
                        </Panel>
                    </div>
                
                    <div className="flex flex-col gap-2">
                        <h2 className='h-full text-2xl text-center bg-blue-900 text-white p-1 select-none rounded-tr-lg rounded-tl-lg pb-1.5'>Характеристики</h2>
                        <div className='grid grid-cols-2 gap-1'>
                            <AbilityScore title={'Бонус мастерства'} score={character.proficiency}/>
                            <AbilityScore title={'Скорость'} score={character.speed}/>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-2 gap-1'>
                            <AbilityScore title={'Сила'} score={character.strength}/>
                            <AbilityScore title={'Ловкость'} score={character.agility}/>
                            <AbilityScore title={'Телосложение'} score={character.constitution}/>
                            <AbilityScore title={'Мудрость'} score={character.wisdom}/>
                            <AbilityScore title={'Харизма'} score={character.charisma}/>
                            <AbilityScore title={'Интеллект'} score={character.intelligence}/>
                        </div>
                    </div>
                
                    <Panel title={'Модули и умения'}>
                        <div className="p-2">
                            <h3 className="text-center text-2xl">Модули</h3>
                            <ul className="list-['-']">
                                {character.modules.map((module) => <li key={module}>{module}</li>)}
                            </ul>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-2xl">Умения</h3>
                            <ul className="list-['-']">
                                {character.skills.map((skill) => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    </Panel>
                </div>
            </div>
        </BrandPanel>
    )
}

export default CharacterCard