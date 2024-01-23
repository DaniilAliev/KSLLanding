import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import { Main } from './components/Main';
import { Projects } from './components/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
