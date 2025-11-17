import "./App.css";
import { useState } from "react";
import { Modal } from "./compnents/Modal/index.jsx";

function App() {
  const [text, setText] = useState("Some TExt");
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSave = (value) => {
    setText(value);
    setOpenModal(false);
  };

  return (
    <div style={{ padding: 20, position: "relative", height: "200vh" }}>
      <h1> text: {text}</h1>
      <button onClick={() => setOpenModal(true)}>Edit</button>
      {openModal && (
        <Modal handleClose={handleClose} handleSave={handleSave} text={text} />
      )}
    </div>
  );
}

export default App;
