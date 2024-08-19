import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BooksContext from "./context/books.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksContext.Provider value={10}>
      <App />
    </BooksContext.Provider>
  </StrictMode>,
)
