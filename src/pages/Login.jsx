import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/dashboard");
  };
  return (
    <div>
      <h2>Вход</h2>
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;
