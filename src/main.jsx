import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ApiProvider } from './context/apiContext.jsx'
import { PlansProvider } from './hooks/fetchPlans.jsx'
import { ApiServiceProvider } from './hooks/ApiService.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApiProvider>
          <PlansProvider>
            <ApiServiceProvider>
              <App />
            </ApiServiceProvider>
          </PlansProvider>
        </ApiProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
