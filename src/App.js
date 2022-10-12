import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      children: [
        {
          path: '/',
          // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),(No need as I used context api)
          element: <Home></Home>
        },
        {
          path: '/home',
          // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),(No need as I used context api)
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/quiz/:coursename/:courseid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseid}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    { path: '*', element: <div className='not-found container'>Sorry ,This page is not found</div> }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
