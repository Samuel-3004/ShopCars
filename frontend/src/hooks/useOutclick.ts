import { useEffect, useRef } from "react";

const useOutClick = (callback: () => void) => {
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const handleOutEvent = (event: Event) => {
      if (
        !(event.target instanceof Node) ||
        !ref.current?.contains(event.target)
      ) {
        if (callback) callback();
      }
    };

    window.addEventListener("mousedown", handleOutEvent);

    return () => {
      window.removeEventListener("mousedown", handleOutEvent);
    };
  }, [callback]);

  return ref;
};
export default useOutClick;
