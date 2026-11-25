function HeaderLayout(){

    return (
        <header className="flex justify-between dark:bg-amber-600">
            <section className="flex gap-10">
                <img className="w-20" src="brand_mark.svg" alt="" />
                <h1 className="text-5xl">Сильвиэтта</h1>
            </section>
            <section className="flex align-middle">
                <button className="text-5xl" onClick={() => document.documentElement.classList.toggle('dark')}>
                    Переключить тему
                </button>
            </section>
        </header>
    )
}

export default HeaderLayout