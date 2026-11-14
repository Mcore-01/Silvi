function AbilityScore({title, score}){
    return(
        <div className='flex flex-col justify-between border-2 border-blue-900 rounded-br-lg rounded-bl-lg text-center text-lg p-0.5'>
            <h3 className="overflow-hidden">{title}</h3>
            <div>{score}</div>
        </div>
    )
}

export default AbilityScore