import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store, persistor } from './store/store.ts'
import { AuthProvider } from './context/AuthContext.tsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate> 
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
