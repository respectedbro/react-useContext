import "./App.css";
import { Suspense } from "react";
import Users from "./compnents/Users/index.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<div>Загружаем...</div>}>
        <Users />
      </Suspense>
    </>
  );
}

export default App;
