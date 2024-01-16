import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import { Main } from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main></Main>
      }
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
