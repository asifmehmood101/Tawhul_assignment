import { useState } from "react";

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue(prev => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
};
