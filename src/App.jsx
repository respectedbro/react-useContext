import "./App.css";
import UserList from "./components/UserList/UserList.jsx";
import { useEffect, useMemo, useState } from "react";
import { Sum } from "./components/Sum/Sum.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = useMemo(() => {
    return Sum(4 * count + count2);
  }, [count, count2]);

  useEffect(() => {
    console.log("count", count);
  }, [count, count2]);

  const [users, setUsers] = useState([
    { id: 1, name: "Nik", age: 22 },
    { id: 2, name: "Anna", age: 23 },
    { id: 3, name: "Alex", age: 24 },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      age: 30,
    };
    setUsers([...users, newUser]);
  };

  return (
    <>
      {/*1*/}
      <UserList users={users} />
      <button onClick={addUser}>Add user</button>

      <br />
      <br />
      <br />

      {/*2*/}
      <div className="main" value={count}>
        <h2>кол-во: {count}</h2>
        <h2>+100: {count2}</h2>
        <button onClick={() => setCount((prev) => prev - 1)}>уменьшить</button>
        <button onClick={() => setCount((prev) => prev + 1)}>увеличить</button>
        <button onClick={() => setCount2((prev) => prev + 100)}>+100</button>
      </div>
    </>
  );
}

export default App;
