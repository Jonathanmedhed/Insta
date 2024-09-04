import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import store from './store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/** <Route index={true} path='/' element={<HomeScreen />} /> */}
      <Route index={true} path='/' element={<LoginScreen />} />
      <Route path='/main' element={<MainScreen />} />
      {/* Registered users */}
      <Route path='' element={<PrivateRoute />}></Route>
      {/* Admin users */}
      <Route path='' element={<AdminRoute />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
