import "./style.css";

import { useState, useTransition } from "react";

const names = ["Mk", "John", "Bob", "Vasya", "Петя", "Елена", "ASD", "Dm"];

function Users() {
  const [search, setSearch] = useState("");
  const [filteredNames, setFilteredNames] = useState(names);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    startTransition(() => {
      const result = names.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNames(result);
    });
  };

  return (
    <div style={{ padding: "20px", minHeight: "300px" }}>
      <h2>Поиск имен</h2>
      <input
        value={search}
        onChange={handleSearch}
        placeholder="Введите имя..."
        style={{ padding: "10px" }}
      />

      {isPending && <p>Загрузка...</p>}

      <ul style={{ marginTop: "20px", minHeight: "300px" }}>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
