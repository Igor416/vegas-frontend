import { Stack, Typography, Box, Fade, Zoom } from '@mui/material';
import { useWindow } from '../../../util/hooks';
import { BackgroundImage } from '../image';

export function Banner1() {
  const isMobile = useWindow();
  
  return (
    <BackgroundImage brightness={70} sx={{width: '100%', height: isMobile ? '80vh' : '100vh'}} srcList={`/static/images/bg.jpg`}>
      <Stack sx={{
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center',
        p: isMobile ? 1.5 : 4,
        pt: isMobile ? 4 : 16,
        gap: isMobile ? 1 : 3,
        overflow: 'hidden'
      }}>
        {/* Date - Bigger and more prominent */}
        <Zoom in timeout={1000} style={{ transitionDelay: '300ms' }}>
          <Box sx={{
            bgcolor: 'primary.main',
            px: isMobile ? 2.5 : 6,
            py: isMobile ? 1 : 2,
            borderRadius: 3,
            boxShadow: (theme) => `0 8px 40px ${theme.palette.primary.main}80`,
            transform: 'scale(1.05)'
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white',
                textAlign: 'center',
                fontSize: isMobile ? '1.1rem' : '2.5rem',
                fontWeight: 800,
                letterSpacing: 2,
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              15.12 - 26.12
            </Typography>
          </Box>
        </Zoom>

        {/* Discounts Regulation - Bigger and more beautiful */}
        <Fade in timeout={1200} style={{ transitionDelay: '600ms' }}>
          <Box sx={{ 
            bgcolor: 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(5px)',
            px: isMobile ? 2 : 5,
            py: isMobile ? 2 : 4,
            borderRadius: 4,
            border: '2px solid rgba(255,255,255,0.3)',
            maxWidth: isMobile ? '95%' : '1000px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'white',
                fontSize: isMobile ? '1.1rem' : '2.25rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: isMobile ? 1.5 : 3,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                letterSpacing: 1
              }}
            >
              Merry Christmas Discount
            </Typography>

            <Box sx={{ 
              bgcolor: 'rgba(255,255,255,0.15)', 
              p: isMobile ? 1.5 : 2.5, 
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
              }
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 900, 
                  fontSize: isMobile ? '1.2rem' : '2rem',
                  mb: isMobile ? 0.5 : 1,
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  textAlign: 'center'
                }}
              >
                До -30%!
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Stack>
    </BackgroundImage>
  );
}

