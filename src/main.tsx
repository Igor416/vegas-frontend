import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

import { TranslationProvider } from './util/i18n/translation';

import { App } from './app';
import { Cart, Catalog, Home, ProductDetails, Shops, NotFound } from './components';

import './index.css'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <CookiesProvider>
      <TranslationProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='cart' element={<Cart />} />
              <Route path='catalog/:category/:subCategory/' element={<Catalog isSales={false} />}>
                <Route path=':filter' element={<Catalog isSales={false} />} />
              </Route>
              <Route path='sales' element={<Catalog isSales={true} />} />
              <Route path='' element={<Home />} />
              <Route path='product/:category/:name' element={<ProductDetails />} />
              <Route path='shops' element={<Shops />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </TranslationProvider>
    </CookiesProvider>
  </StrictMode>
)