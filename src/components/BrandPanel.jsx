import SvgIcon from "./SvgIcon"

function BrandPanel({ children, bgColor }){
    return(
        <div className={`w-full h-full relative border-2 border-icon rounded-b-lg rounded-r-lg pb-2 p-1.5 ${bgColor}`}>
            <div className={`absolute -top-0.5 left-0 pl-0.5 ${bgColor ? bgColor : 'bg-background'}`}>
                <SvgIcon src={`./brand_mark.svg`} className={`w-15 h-10 bg-icon`} />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-background p-0.5">
                <div className="bg-icon text-fg-secondary pl-2 pr-2">Сильвиэтта</div>
            </div>
            <div className="flex flex-col h-full w-full pb-4">
                {children}
            </div>
        </div>
    )
}

export default BrandPanel