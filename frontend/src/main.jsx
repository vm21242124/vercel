import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './ui/LandingPage.jsx';
import LoginPage from './ui/LoginPage/LoginPage.jsx';
import Dashboard from './ui/UserDashboard/Dashboard.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/dashboard",
    element:<LandingPage/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
