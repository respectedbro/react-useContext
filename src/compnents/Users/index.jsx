let userData = null;
let promise = null;

function loadUser() {
  if (!promise) {
    promise = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (userData = data));
  }

  return {
    read() {
      if (!userData) throw promise;
      return userData;
    },
  };
}

const userResource = loadUser();

const Users = () => {
  const user = userResource.read(); // Используем Suspense ресурс

  return (
    <div>
      {user.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
