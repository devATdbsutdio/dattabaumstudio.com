import { useState } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void] => {
  // Get the initial value from localStorage or use the provided initialValue
  const initialStoredValue = (): T | undefined => {
    try {
      const storedItem = window.localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage key '${key}':`, error);
      return initialValue;
    }
  };

  // State to hold the current value
  const [storedValue, setStoredValue] = useState<T | undefined>(
    initialStoredValue,
  );

  // Function to update the value in both state and localStorage
  const setValue = (value: T): void => {
    try {
      // Update state
      setStoredValue(value);
      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error(`Error writing to localStorage key '${key}':`, error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
