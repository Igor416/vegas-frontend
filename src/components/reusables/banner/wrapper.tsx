import { Stack, Fade, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Banner1 } from './1';
import { Banner2 } from './2';
import { SectionVideo } from '../sectionVideo';
import { useWindow } from '../../../util/hooks';

// Configuration constants
const FLAG = true; // Set to false to always show video
const BANNER_SHOWTIME1 = 60_000; // 60 seconds in milliseconds
const BANNER_SHOWTIME2 = 60_000; // 60 seconds in milliseconds
const VIDEO_SHOWTIME = 20_000; // 20 seconds in milliseconds

export function BannerWrapper() {
  const [bannerIndex, setBannerIndex] = useState(0);
  const isMobile = useWindow();

  useEffect(() => {
    // If FLAG is false, always show video
    if (!FLAG) {
      setBannerIndex(-1);
      return;
    }

    // Alternate between Banner and Video based on timing
    
    let interval
    if (isMobile) {
      interval = setInterval(() => {
        setBannerIndex((prev) => prev === 0 ? 1 : 0);
      }, BANNER_SHOWTIME1);
    } else {
      interval = setInterval(() => {
        setBannerIndex((prev) => prev === 0 ? 1 : prev === 1 ? -1 : 0);
      }, bannerIndex === 0 ? BANNER_SHOWTIME1 : bannerIndex === 1 ? BANNER_SHOWTIME2 : VIDEO_SHOWTIME);
    }
    return () => clearInterval(interval);
    /*
    if (!isMobile) {
      const interval = setInterval(() => {
        setBannerIndex((prev) => prev === 1 ? -1 : 1);
      }, bannerIndex === 1 ? BANNER_SHOWTIME2 : VIDEO_SHOWTIME);
      return () => clearInterval(interval);
    }
    */
  }, [bannerIndex, isMobile]);

  return <Stack sx={{ position: 'relative' }}>
    <Fade in={bannerIndex === 0} timeout={1000} unmountOnExit>
      <Box>
        <Banner1 />
      </Box>
    </Fade>
    <Fade in={bannerIndex === 1} timeout={1000} unmountOnExit>
      <Box>
        <Banner2 />
      </Box>
    </Fade>
    <Fade in={bannerIndex === -1} timeout={1000} unmountOnExit>
      <Box>
        <SectionVideo />
      </Box>
    </Fade>
  </Stack>
}