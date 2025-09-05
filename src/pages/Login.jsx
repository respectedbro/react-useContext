import {useNavigate} from 'react-router-dom';

const Login = ({login}) => {
    const navigate = useNavigate();

    const handleLogin = (role) => {
        login(role);
        navigate(role === 'admin' ? '/admin' : '/profile');
    };
    return (
        <div>
            <h2>Вход</h2>
            <div style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => handleLogin('admin')}>Войти (admin)</button>
                <button onClick={() => handleLogin('user')}>Войти (user)</button>
            </div>
        </div>
    );
};

export default Login;
