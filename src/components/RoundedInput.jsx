function RoundedInput({label, value, onChange}){
    return(
        <div className='flex flex-col justify-between'>
            <h2 className='text-2xl text-center'>{label}</h2>
            <input className='w-full text-2xl text-center p-1 border-2 rounded-br-sm rounded-tl-sm' 
                value={value} 
                onChange={e => { e.target.value = e.target.value.replace(/\D/g, '') 
                onChange(e.target.value) }}/>
        </div>
    )
}

export default RoundedInput