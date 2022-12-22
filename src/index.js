import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Store/Store';



//On fait appel à la class ReactDOM, en lui demandant de générer le rendu
// d'un compsosant qui s'appelle App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  //React strict mode est usité pr détecter les bugs en mode dévpmt
  //nous permet d'ecrire du code de meilleure qualité

  //on import le store Redux que nous venons de créer , on place un provider
  // auimport Store from './Store/Store';
  //tour de notre application et transmettons le store en tant que 'props'
  // ===> <Provider store={store}
  // desormais, le store est dispo pr ts les composants du provider
  <React.StrictMode> 
    <Provider store={Store} >
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
