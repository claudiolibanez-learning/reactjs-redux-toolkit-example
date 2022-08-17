import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}
