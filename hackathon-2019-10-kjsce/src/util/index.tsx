import { useState, ChangeEvent } from 'react';

export function useInput(def?: string) {
  const [state, setState] = useState(def);

  return {
    value: state,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value as any),
  };
};
