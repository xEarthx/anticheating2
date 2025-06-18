import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import guestRoutes from './components/entrypoint/guest.tsx'
import userRoutes from './components/entrypoint/users.tsx'
//import adminRoutes from './components/entrypoint/admin.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  ...guestRoutes,
  ...userRoutes,
  //...adminRoutes
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
