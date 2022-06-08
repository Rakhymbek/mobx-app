import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './models/Store';
import { AppProvider } from './provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider store={store}>
    <App />
  </AppProvider>
);


