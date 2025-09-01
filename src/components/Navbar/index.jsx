import {NavLink} from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (

        <nav className='navbar'>
            <NavLink to='/' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Об авторе
            </NavLink>

            <NavLink to='posts' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Посты
            </NavLink>


            <NavLink to='feedback' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                Обратная связь
            </NavLink>

        </nav>
    )
}

export default Navbar