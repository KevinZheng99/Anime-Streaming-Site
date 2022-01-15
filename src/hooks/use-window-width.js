import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function setNewWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", setNewWidth);
    setNewWidth();
  }, []);

  return width;
}
