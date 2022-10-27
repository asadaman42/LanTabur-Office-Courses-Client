import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <ReactTooltip place="top" type="success" effect="float"/>
      
    </div>
  );
}

export default App;
