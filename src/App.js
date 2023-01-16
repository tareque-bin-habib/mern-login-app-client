import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register';
import UserName from './components/UserName';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserName></UserName>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
])


function App() {

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
