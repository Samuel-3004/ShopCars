import { useEffect, useRef } from "react";

const useEscapeKey = (
  keyId: string,
  callback: (event: React.KeyboardEvent<Element>) => void
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === keyId) {
      callbackRef.current(event as unknown as React.KeyboardEvent<Element>);
    }
  };

  useEffect(() => {
    const keyEvent = (event: Event) => handleKeyDown(event as KeyboardEvent);
    window.addEventListener("keydown", keyEvent);
    return () => {
      window.removeEventListener("keydown", keyEvent);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyId]);

  return callbackRef;
};

export default useEscapeKey;
