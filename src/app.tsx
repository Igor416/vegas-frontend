import { Outlet, Link, useLocation } from 'react-router-dom';
import { Fab, Stack } from '@mui/material';

import { useWindow } from './util/hooks';

import { Providers } from './providers';
import { MobileHeader, DesktopHeader, Footer } from './components';
import { BannerWrapper, Image, SectionImage } from './components/reusables';

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
      {!isMobile && <Link to='/sales'>
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
          <Image 
            srcList='/static/images/sale.png'
            alt='shopping-cart'
            sx={{ width: '100%', height: '100%' }}
          />
        </Fab>
      </Link>}
    </Stack>
  </Providers>
}