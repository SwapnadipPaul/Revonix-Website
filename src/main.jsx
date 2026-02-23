/**
 * ENTRY POINT
 * ===========
 * This is where the React app starts.
 * We wrap the app in BrowserRouter to enable
 * page navigation (React Router).
 *
 * You generally won't need to edit this file.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
