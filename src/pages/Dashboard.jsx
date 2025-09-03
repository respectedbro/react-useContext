const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <h2>👤 Личный кабинет</h2>
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};

export default Dashboard;
