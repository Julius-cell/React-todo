
import { useState } from "react";

// React Hook
const useStorageListener = () => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (el) => {
    if (el.key === 'TODOS_V1') {
      console.log('Hubo cambios en TODOS_V1');
      setStorageChange(true);
    }
  })

  return {
    show: storageChange,
    toggleShow: setStorageChange
  }
}

export { useStorageListener }