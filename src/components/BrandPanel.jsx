function BrandPanel({ children }){
    return(
        <div className="w-full h-full relative border-2 border-blue-900 rounded-b-lg rounded-r-lg pb-2 p-1.5">
            <div className="absolute -top-0.5 left-0 bg-white pl-0.5">
                <img className=" w-15" src="favicon.svg" alt="" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5">
                <div className="bg-blue-900 text-white pl-2 pr-2">Сильвиетта</div>
            </div>
            <div className="flex flex-col h-full w-full pb-4">
                {children}
            </div>
        </div>
    )
}

export default BrandPanel