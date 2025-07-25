import User from "../User/User.jsx";

const UserList = ({ users }) => {
  return (
    <ul className="users">
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} id={user.id} />
      ))}
    </ul>
  );
};

export default UserList;
