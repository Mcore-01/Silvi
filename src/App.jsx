import './App.css'
import HeaderLayout from './layouts/HeaderLayout'
import WeaponLayout from './layouts/WeaponLayout'

function App() {

    return (
        <div className='flex flex-col gap-20 p-2'>
            <HeaderLayout />
            <WeaponLayout />
        </div>
    )
}

export default App