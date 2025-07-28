import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [passErr, setPassErr] = useState("");

  const validate = () => {
    let isValid = true;

    if (name === "") {
      setNameErr("Имя не должно быть пустым");
      isValid = false;
    } else {
      setNameErr("");
    }

    if (password.length < 6) {
      setPassErr("Пароль должен содержать не менее 6 символов");
      isValid = false;
    } else {
      setPassErr("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({ name, password });

      setName("");
      setPassword("");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            {nameErr && <div>{nameErr}</div>}
          </div>
          <div>
            <label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            {passErr && <div>{passErr}</div>}
          </div>
        </div>
        <button style={{ marginTop: "10px" }} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
