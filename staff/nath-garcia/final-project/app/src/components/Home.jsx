import { useState, useContext } from 'react'
import Logger from '../vendor/Loggy'
import Context from '../components/Context'
// import { retrieveUser } from '../logic'
import Profile from '../components/Profile'
import './Home.sass'
import { isJwtValid } from '../validators'
import { useNavigate } from 'react-router-dom'

function Home() {
    const logger = new Logger('Home')

    const navigate = useNavigate()

    logger.info('call')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const [view, setView] = useState(null)
    const { handleFeedback } = useContext(Context)

    const handleLogoutClick = () => {
        handleLogout()
    }

    const handleLogout = () => {
        delete sessionStorage.token
        navigate('/login')
    }

    const handleAddClick = () => {

    }

    const handleProfileClick = () => setView('profile')

    const handleHomeClick = () => setView('home')

    logger.info('render')

    return isJwtValid(sessionStorage.token) ?
        <div className="Home Container">
            <header className="Home__header Container Container--row Container--spread-sides">
                <button className="Button Button--no-border Home__home" onClick={handleHomeClick}>📋</button>
                <div>
                    <button className="Button Button--no-border Home__profile" onClick={handleProfileClick}>{name}</button>
                    <button className="Button Button--no-border Home__logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </header>

            <main className="Home__body Container">
                <div className="Box">
                    <button className="Plus">+</button>
                </div>
                {view === 'profile' && <Profile />}
            </main>

            <footer className="Home__footer Container">
                <button className="Home__addMovement" onClick={handleAddClick}>+</button>
            </footer>
        </div> : <></>
}

export default Home