import { useEffect, useState } from 'react';

type DispatchFunction<T> = (val: T) => void;

export default function usePersistentState<T>(
  defaultValue: T,
  key: string,
  storage: Storage = localStorage,
): [T, DispatchFunction<T>] {
  const [value, dispatcher] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error('Error getting item from storage', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    const _value = storage.getItem(key);
    if (_value) {
      const parsedValue: T = JSON.parse(_value) as T;
      dispatcher(parsedValue);
    }
  }, [key, dispatcher, storage]);

  const setValue = (val: T) => {
    dispatcher(val);
    storage.setItem(key, JSON.stringify(val ?? ''));
  };

  return [value, setValue];
}
