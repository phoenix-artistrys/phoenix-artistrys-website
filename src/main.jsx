import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// css
import './styles/normalize_v2.css'
import './styles/index.css'
import './styles/home.css'
import './styles/music_icons.css'
import './styles/artists.css'
import './styles/sample_packs.css'
import './styles/about.css'
import './styles/submit.css'
import './styles/header.css';

// components
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
