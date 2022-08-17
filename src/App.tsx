import { Provider } from 'react-redux';

import store from './store';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Teste</h1>
      </Provider>
    </div>
  )
}
