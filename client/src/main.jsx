import React from 'react'
import ReactDOM from 'react-dom/client'
import UserContextProvider  from './context/UserContextProvider.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
  </React.StrictMode>
);
