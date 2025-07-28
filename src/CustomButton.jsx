import { forwardRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      console.log("фокус");
    }
  }, [ref]);

  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default CustomButton;
