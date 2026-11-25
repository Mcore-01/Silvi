import { useState } from 'react'
import SvgIcon from '../components/SvgIcon'
function HeaderLayout(){
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const handleSwitchTheme = () =>{
        setIsDarkTheme(!isDarkTheme)
        document.documentElement.classList.toggle('dark')
    }
    return (
        <header className="flex justify-between dark:bg-black">
            <section className="flex gap-10">
                <SvgIcon src={`./brand_mark.svg`} className={`w-20 bg-blue-900 cursor-pointer dark:bg-blue-300`} />
                <h1 className="text-5xl dark:text-white">Сильвиэтта</h1>
            </section>
            <section className="flex align-middle">
                <button className="text-5xl" onClick={() => handleSwitchTheme()}>
                    {isDarkTheme ? <SvgIcon src={`./icons/moon.svg`} className={`w-20 h-10 bg-blue-300 cursor-pointer`} /> :
                        <SvgIcon src={`./icons/sun.svg`} className={`w-20 h-10 bg-blue-900 cursor-pointer`} />}
                </button>
            </section>
        </header>
    )
}

export default HeaderLayout