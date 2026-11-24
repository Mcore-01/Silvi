function Modal({children, onConfirm, onClose}){
    const handleConfirmClick = (e) => {
        e.stopPropagation()
        onConfirm()
    }
    return(
        <div className="fixed inset-0 w-full h-full bg-black opacity-90 z-10 flex flex-col gap-1 justify-center items-center" onClick={() => onClose()}>
            <div className="w-fit h-fit bg-white p-4 rounded-lg">
                <div>{children}</div>
                <div>
                    <button className="select-none cursor-pointer pl-3 pr-3 rounded-sm hover:bg-black hover:text-white" onClick={handleConfirmClick}>Применить</button>
                </div>
            </div>
        </div>
    )
}

export default Modal