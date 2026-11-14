function Panel({title, children}){
    return(
        <div className='border-2 rounded-lg border-blue-900 h-fit'>
            <h2 className='text-2xl text-center bg-blue-900 text-white p-1 select-none'>{title}</h2>
            {children}
        </div>
    )
}

export default Panel