import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Fab, Stack, Slide, Box } from '@mui/material';

import { useWindow } from './util/hooks';

import { Providers } from './providers';
import { MobileHeader, DesktopHeader, Footer } from './components';
import { BannerWrapper, Image, SectionImage } from './components/reusables';

const SALE_FAB_SCROLL_THRESHOLD = 300;

export function App() {
  const isMobile = useWindow()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [showSaleFab, setShowSaleFab] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowSaleFab(window.scrollY > SALE_FAB_SCROLL_THRESHOLD)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      {!isMobile && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '5vh',
            right: '3vw',
            zIndex: 1300,
          }}
        >
          <Slide in={showSaleFab} direction="up" mountOnEnter unmountOnExit timeout={400}>
            <Box>
              <Link to='/sales' style={{ textDecoration: 'none' }}>
                <Fab sx={{
                  bgcolor: 'tertiary.main',
                  color: 'tertiary.contrastText',
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
              </Link>
            </Box>
          </Slide>
        </Box>
      )}
    </Stack>
  </Providers>
}
