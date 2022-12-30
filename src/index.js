import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBBoTAU-pWmggNxr_0OSYdnbLB5eEBBE0",
  authDomain: "pistonsf1.firebaseapp.com",
  projectId: "pistonsf1",
  storageBucket: "pistonsf1.appspot.com",
  messagingSenderId: "536544385012",
  appId: "1:536544385012:web:62b8cd4afd7c7c78768ba1",
  measurementId: "G-1TT5YN6DDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

