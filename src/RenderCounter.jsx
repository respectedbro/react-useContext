import { useEffect, useRef } from "react";

const RenderCounter = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <button>Рендеры: {renderCount.current}</button>;
};

export default RenderCounter;
