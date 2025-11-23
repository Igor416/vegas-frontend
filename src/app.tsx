import { Outlet, Link, useLocation } from 'react-router-dom';
import { Fab, Stack } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import { useWindow } from './util/hooks';

import { Providers } from './providers';
import { MobileHeader, DesktopHeader, Footer } from './components';
import { BannerWrapper, SectionImage } from './components/reusables';

export function App() {
  const isMobile = useWindow()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  return <Providers>
    <Stack>
      {isMobile
      ?
      <MobileHeader />
      :
      <DesktopHeader />
      }
      <Stack>
        {!isMobile && (isHomePage ? <BannerWrapper /> : <SectionImage />)}
        <Outlet />
      </Stack>
      <Footer />
      {!isMobile && <Link to='/cart'>
        <Fab sx={{
          zIndex: 1300,
          bgcolor: 'tertiary.main',
          color: 'tertiary.contrastText',
          position: 'fixed',
          bottom: '5vh',
          right: '3vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} aria-label="shopping-cart">
          <ShoppingCart />
        </Fab>
      </Link>}
    </Stack>
  </Providers>
}