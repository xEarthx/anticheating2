// src/components/entrypoint/guest.tsx
import Login from '../login.tsx';
import Register from '../register.tsx';
import Home from '../home.tsx';
import Homeid from '../homeid.tsx';
import Notfoundpage from '../../notfoundpage.tsx';

const guestRoutes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/home/:id/:title",
    element: <Homeid />
  },
  {
    path: "*",
    element: <Notfoundpage />
  }
];

export default guestRoutes;
