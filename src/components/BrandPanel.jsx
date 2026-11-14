function BrandPanel({children}){
    return(
        <div className="w-fit h-fit relative size-32 border-2 border-blue-900 rounded-lg pb-6 p-1.5">
            <div className="absolute -top-0.5 left-0 bg-white pl-0.5">
                <img className=" w-15" src="favicon.svg" alt="" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5">
                <div className="bg-blue-900 text-white pl-2 pr-2">Сильвиетта</div>
            </div>
            {children}
        </div>
    )
}

export default BrandPanel