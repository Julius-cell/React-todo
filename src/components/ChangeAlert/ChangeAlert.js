import React from 'react'
import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return <p>Hubo cambios, recarga la página!</p>
  }
  return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }