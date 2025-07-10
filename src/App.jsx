import './App.css';
import {useState} from 'react';
import LoggedButton from './components/LogginButton/LoggedButton.jsx';
import AuthContext from './components/AuthContext/AuthContext.jsx';


function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <>
            <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
                <h1>APP</h1>
                <LoggedButton />
            </AuthContext.Provider>

        </>
    );
}

export default App;
