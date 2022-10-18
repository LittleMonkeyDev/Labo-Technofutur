import { Link } from 'react-router-dom'
import style from './navbar.module.css'

const NavBar = () => {

    return (
        <>
            <nav>
                <ul className={style.navBar}>
                    <li className={style.home}><Link to="/">Manga</Link></li>
                    <li className={style.home}><Link to="/anime">Anime</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar