import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>HOME</h2>
      <button onClick={() => navigate("/posts")}>К постам</button>
    </>
  );
};

export default Home;
