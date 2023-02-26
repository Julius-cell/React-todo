import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


// function CubeComponent(params) {
//   return (
//     <div className='w-32 h-32 bg-orange-400 flex justify-center items-center mx-auto flex-col'>
//       <p>{params.saludo}</p>
//       <p>{params.text}</p>
//     </div>
//   )
// }

// function WrapperHoc(saludo) {
//   return function WrappedComponentWithSaludo(WrappedComponent) {
//     return function ReturnedComponent(params) {
//       return (
//         <WrappedComponent saludo={saludo} text="texto randoom"/>
//       )
//     }
//   }
// }

// const CubeWithCaracteristics = WrapperHoc('Alojaa')(CubeComponent)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <CubeWithCaracteristics />
);

