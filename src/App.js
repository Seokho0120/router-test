import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <p>Home</p>, errorElement: <p>Not Found</p> },
  { path: '/videos', element: <p>Videos</p> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
