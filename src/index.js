import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './app/store';
import { AuthProvider } from './context/AuthProvider';
import './styles/_seetings.scss';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AuthProvider>
            
            <App />
      </AuthProvider>
       
   </>

);
