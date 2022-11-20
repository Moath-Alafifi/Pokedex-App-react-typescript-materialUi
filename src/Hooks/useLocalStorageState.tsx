import { useEffect, useState } from "react";

export const useLocalStorageState = (key: string, defaultValue = "[]") => {
  const [localStorageState, setLocalStorageState] = useState(
    () => window.localStorage.getItem(key) || defaultValue
  );
  useEffect(() => {
    window.localStorage.setItem(key, localStorageState);
  }, [key, localStorageState]);

  return { localStorageState, setLocalStorageState };
};
