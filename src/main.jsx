import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ApiProvider } from './context/apiContext.jsx'
import { PlansProvider } from './hooks/fetchPlans.jsx'
import { ApiServiceProvider } from './hooks/ApiService.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { Analytics } from "@vercel/analytics/react"
import { PostHogProvider } from 'posthog-js/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ThemeProvider>
        <AuthProvider>
          <ApiProvider>
            <PlansProvider>
              <ApiServiceProvider>
                <PostHogProvider
                  apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
                  options={{
                    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
                    defaults: '2025-05-24',
                    capture_exceptions: true,
                    debug: import.meta.env.MODE === 'development',
                  }}
                >
                  <App />
                </PostHogProvider>
              </ApiServiceProvider>
            </PlansProvider>
          </ApiProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)