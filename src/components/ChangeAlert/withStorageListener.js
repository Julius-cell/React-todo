import { useState } from "react";

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(params) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (el) => {
      if (el.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    })

    return (
      <WrappedComponent 
        show={storageChange} 
        toggleShow={setStorageChange} 
      />
    )
  }
}

export { withStorageListener }