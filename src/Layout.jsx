import {NavLink, Outlet} from 'react-router-dom';

const Layout = ({isAuth, logout}) => {
    return (
        <>
            <nav style={{padding: 10, borderBottom: '1px solid #ddd'}}>
                <NavLink to="/" style={{marginRight: 10}}>
                    Главная
                </NavLink>

                {isAuth.auth &&
                    <>
                        {isAuth.role === 'user' && (
                            <NavLink to="/profile" style={{marginRight: 10}}>
                                Profile
                            </NavLink>
                        )}

                        {isAuth.role === 'admin' && (
                            <NavLink to="/admin" style={{marginRight: 10}}>
                                Admin
                            </NavLink>
                        )}
                        <button onClick={logout}>Выйти</button>
                    </>
                }
                {!isAuth.auth && (
                    <NavLink to="/login">Вход</NavLink>
                )}

            </nav>

            <main style={{padding: 20}}>
                <Outlet/>
            </main>
        </>
    )

};

export default Layout;
