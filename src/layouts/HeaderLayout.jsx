import { useEffect, useState } from 'react'
import SvgIcon from '../components/SvgIcon'
function HeaderLayout(){
    const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem('theme') === 'dark')
    
    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    return (
        <header className="flex justify-between">
            <section className="flex gap-10">
                <SvgIcon src={`./brand_mark.svg`} className={`w-20 bg-icon`} />
                <h1 className="text-5xl">Сильвиэтта</h1>
            </section>
            <section className="flex align-middle">
                <button className="text-5xl" onClick={() => setIsDarkTheme(!isDarkTheme)}>
                    {isDarkTheme ? <SvgIcon src={`./icons/sun.svg`} className={`w-20 h-10 bg-icon cursor-pointer`} /> :
                        <SvgIcon src={`./icons/moon.svg`} className={`w-20 h-10 bg-icon cursor-pointer`} />}
                </button>
            </section>
        </header>
    )
}

export default HeaderLayout