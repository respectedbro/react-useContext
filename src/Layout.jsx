import Index from './components/Navbar/index.jsx';
import {Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Header from './components/Header/index.jsx';

const Layout = () => {

    return (
        <>
            <Header/>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;