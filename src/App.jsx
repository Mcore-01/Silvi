import './App.css'
import HeaderLayout from './layouts/HeaderLayout'
import WeaponLayout from './layouts/WeaponLayout'

function App() {

    return (
        <div className='flex flex-col h-lvh gap-20 p-2 bg-background text-fg-primary'>
            <HeaderLayout />
            <WeaponLayout />
        </div>
    )
}

export default App