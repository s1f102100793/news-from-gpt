import { useState } from 'react';

export const useNamelist = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const resetSelectedName = () => {
    setSelectedName(null);
  };

  return { selectedName, setSelectedName, resetSelectedName };
};
