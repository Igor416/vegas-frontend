import { Stack, Typography, Box, Fade, Slide, Zoom } from '@mui/material';
import { useWindow } from '../../util/hooks';
import { BackgroundImage } from './image';

export function Banner1() {
  const isMobile = useWindow()
  
  return <BackgroundImage brightness={70} sx={{width: '100%', height: isMobile ? '80vh' : '100vh'}} srcList={`/static/images/bg.jpg`}>
    <Stack sx={{
      width: '100%', 
      height: '100%', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: isMobile ? 2 : 8,
      gap: isMobile ? 2 : 3
    }}>
      {/* Главный заголовок */}
      <Zoom in timeout={1200} style={{ transitionDelay: '300ms' }}>
        <Typography 
          variant="h1" 
          sx={{ 
            color: 'white',
            textAlign: 'center',
            fontSize: isMobile ? '2.5rem' : '5rem',
            fontWeight: 700,
            letterSpacing: 4,
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.2
          }}
        >
          PATURI SALE
        </Typography>
      </Zoom>

      {/* Процент скидки */}
      <Zoom in timeout={1400} style={{ transitionDelay: '600ms' }}>
        <Box sx={{
          bgcolor: 'primary.main',
          px: isMobile ? 3 : 4,
          py: isMobile ? 1.5 : 2,
          borderRadius: 2,
          transform: 'rotate(-2deg)',
          boxShadow: (theme) => `0 8px 30px ${theme.palette.primary.main}66`
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontSize: isMobile ? '2rem' : '3.5rem',
              fontWeight: 900,
              letterSpacing: 3
            }}
          >
            -20%
          </Typography>
        </Box>
      </Zoom>

      {/* Описание */}
      <Slide direction="up" in timeout={1000} style={{ transitionDelay: '900ms' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'white',
            textAlign: 'center',
            fontSize: isMobile ? '1rem' : '1.5rem',
            fontWeight: 400,
            maxWidth: isMobile ? '90%' : '700px',
            lineHeight: 1.6,
            mt: 2
          }}
        >
          Распродажа кроватей из зала в связи с обновлением ассортимента
        </Typography>
      </Slide>

      {/* Условия акции */}
      <Fade in timeout={1200} style={{ transitionDelay: '1200ms' }}>
        <Stack 
          spacing={isMobile ? 1 : 1.5} 
          sx={{ 
            mt: isMobile ? 2 : 3,
            bgcolor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            px: isMobile ? 3 : 5,
            py: isMobile ? 2 : 3,
            borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white',
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: 500,
              textAlign: 'center'
            }}
          >
            -20% - кровать при покупке с матрасом
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white',
              fontSize: isMobile ? '1rem' : '1.25rem',
              fontWeight: 500,
              textAlign: 'center'
            }}
          >
            -15% - кровать при покупке без матраса
          </Typography>
        </Stack>
      </Fade>

      {/* Период акции */}
      <Fade in timeout={1000} style={{ transitionDelay: '1500ms' }}>
        <Box sx={{
          bgcolor: 'tertiary.main',
          px: isMobile ? 2 : 4,
          py: isMobile ? 1 : 1.5,
          borderRadius: 2,
          boxShadow: (theme) => `0 4px 20px ${theme.palette.tertiary.main}80`,
          mt: 1
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'white',
              textAlign: 'center',
              fontSize: isMobile ? '0.875rem' : '1rem',
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
            Акция действует в период с 21.10.2025 - 31.11.2025
          </Typography>
        </Box>
      </Fade>
    </Stack>
  </BackgroundImage>
}