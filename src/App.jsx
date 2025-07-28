import "./App.css";
import Form from "./Form.jsx";
import RenderCounter from "./RenderCounter.jsx";
import { useRef, useState } from "react";
import CustomButton from "./CustomButton.jsx";

function App() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Клик</button>

      <Form />
      <RenderCounter />
      <CustomButton ref={buttonRef}> КНопка</CustomButton>
    </>
  );
}

export default App;
