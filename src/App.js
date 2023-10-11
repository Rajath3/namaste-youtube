import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';

function App() {

  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainComponent/>
      },
      {
        path: 'watch',
        element: <WatchPage/>
      },
      {
        path: 'demo',
        element: <><Demo/><Demo2/></>
      }
    ]
  }])
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
