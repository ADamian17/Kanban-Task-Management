import { useRef } from "react";

export const useFocus = <T>() => {
  const htmlElRef = useRef<T>(null);

  const setFocus = () => {
    if (
      htmlElRef.current &&
      typeof htmlElRef.current === "object" &&
      "focus" in htmlElRef.current
    ) {
      if (typeof htmlElRef.current.focus === "function") {
        htmlElRef.current.focus();
      }
    }
  };

  const setBlur = () => {
    if (
      htmlElRef.current &&
      typeof htmlElRef.current === "object" &&
      "blur" in htmlElRef.current
    ) {
      if (typeof htmlElRef.current.blur === "function") {
        htmlElRef.current.blur();
      }
    }
  };

  return [htmlElRef, setFocus, setBlur] as const;
};
