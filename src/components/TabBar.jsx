function TabBar({tabNames, activeTab, onChange}){
    return(
        <div className="w-full flex">
            {tabNames.map(tabName => (
                <button className={`p-2 text-2xl cursor-pointer select-none hover:bg-hover ${activeTab === tabName ? 'bg-icon text-fg-secondary' : ''}`} 
                    key={tabName} 
                    onClick={() => onChange(tabName)}>{tabName}
                </button>))}
        </div>
    )
}

export default TabBar