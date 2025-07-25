import React from "react";

const User = React.memo(({ name, age, id }) => {
  console.log("рендер", id);
  return (
    <li className="user">
      <div className="user-name">{name}</div>
      <div className="user-age">{age}</div>
      <div className="id">{id}</div>
    </li>
  );
});

export default User;
