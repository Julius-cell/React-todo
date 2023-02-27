import React from 'react'
import { withStorageListener } from './withStorageListener';
import { useStorageListener } from './useStorageListener';

// Using HOC
// const ChangeAlert = ({ show, toggleShow }) => {
//   if (show) {
//     return <p>Hubo cambios, recarga la página!</p>
//   }
//   return null
// }

// const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

// export { ChangeAlertWithStorageListener }


// Using React Hook
const ChangeAlert = () => {
  const { show, toggleShow } = useStorageListener();
  if (show) {
    return <p>Hubo cambios, recarga la página!</p>
  }
  return null
}

export { ChangeAlert }