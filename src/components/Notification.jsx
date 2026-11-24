function Notification({ title, description }){
    return(
        <div className="fixed bottom-0 right-5 bg-blue-50 p-4">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Notification