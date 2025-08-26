import { useSyncExternalStore } from "react";

function dispatchStorageEvent(key: string, newValue: string | null) {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
}

function getLocalStorageItem(key: string) {
  return localStorage.getItem(key);
}

function setLocalStorageItem(key: string, value: unknown) {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
}

function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
}

function useLocalStorageSubscribe(callback: () => void) {
  window.addEventListener("storage", callback);

  return () => window.removeEventListener("storage", callback);
}

export default function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T, (value: T) => void] {
  const getSnapshot = () => getLocalStorageItem(key);

  const store = useSyncExternalStore(useLocalStorageSubscribe, getSnapshot);

  const updateState = (value: T) => {
    try {
      if (value === undefined || value === null) {
        removeLocalStorageItem(key);

        return;
      }

      setLocalStorageItem(key, value);
    } catch (error) {
      console.warn(error);
    }
  };

  return [store ? JSON.parse(store) : initialValue, updateState];
}
