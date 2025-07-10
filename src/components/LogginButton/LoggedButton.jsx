import {useContext} from 'react';
import AuthContext from '../AuthContext/AuthContext.jsx';

const LoggedButton = () => {
    const {loggedIn, setLoggedIn} = useContext(AuthContext)
    const login = () => {
        setLoggedIn(true)
    }

    if (loggedIn) {
        return <p>Вы авторизованы</p>
    }

return (
    <button onClick={login}>Войти</button>
)
}



export default LoggedButton