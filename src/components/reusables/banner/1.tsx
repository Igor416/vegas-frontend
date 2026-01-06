import { Stack, Typography, Box, Fade, Zoom, Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';
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
              07.01 - 31.01
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
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            position: 'relative',
            zIndex: 1250
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

            <Grid2 container spacing={isMobile ? 1 : 2} sx={{ mb: isMobile ? 2 : 3 }}>
              {/* Special - 60% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Special
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 60%
                  </Typography>
                </Box>
              </Grid2>

              {/* Comfort - 40% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Comfort
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 40%
                  </Typography>
                </Box>
              </Grid2>

              {/* Exclusive - 40% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Exclusive
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 40%
                  </Typography>
                </Box>
              </Grid2>

              {/* Modern - 30% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Modern
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 30%
                  </Typography>
                </Box>
              </Grid2>

              {/* Ecolatex - 30% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Ecolatex
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 30%
                  </Typography>
                </Box>
              </Grid2>

              {/* Active - 30% */}
              <Grid2 size={{xs: 6, md: 4}}>
                <Box sx={{ 
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  p: isMobile ? 1 : 2, 
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'transform 0.2s',
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 700, 
                      fontSize: isMobile ? '0.9rem' : '1.1rem',
                      mb: 0.5,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    Active
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#ff4444', 
                      fontWeight: 900, 
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '0 2px 8px rgba(255,68,68,0.5)'
                    }}
                  >
                    до 30%
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              width: '100%',
              position: 'relative',
              zIndex: 1250,
              pointerEvents: 'auto'
            }}>
              <Button
                component={Link}
                to="/sales"
                variant="contained"
                color="primary"
                sx={{
                  px: isMobile ? 3 : 6,
                  py: isMobile ? 1.5 : 2,
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 3,
                  boxShadow: (theme) => `0 8px 40px ${theme.palette.primary.main}80`,
                  position: 'relative',
                  overflow: 'hidden',
                  pointerEvents: 'auto',
                  zIndex: 1251,
                  '@keyframes pulse': {
                    '0%': {
                      boxShadow: (theme) => `0 8px 40px ${theme.palette.primary.main}80`,
                    },
                    '50%': {
                      boxShadow: (theme) => `0 8px 50px ${theme.palette.primary.main}CC, 0 0 30px ${theme.palette.primary.main}99`,
                    },
                    '100%': {
                      boxShadow: (theme) => `0 8px 40px ${theme.palette.primary.main}80`,
                    },
                  },
                  '@keyframes shimmer': {
                    '0%': {
                      backgroundPosition: '-200% center',
                    },
                    '100%': {
                      backgroundPosition: '200% center',
                    },
                  },
                  animation: 'pulse 2s ease-in-out infinite',
                  background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.primary.main} 100%)`,
                  backgroundSize: '200% auto',
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: (theme) => `0 12px 60px ${theme.palette.primary.main}CC, 0 0 40px ${theme.palette.primary.main}99`,
                    animation: 'shimmer 1.5s linear infinite, pulse 2s ease-in-out infinite',
                  },
                  '&:active': {
                    transform: 'translateY(-2px) scale(1.02)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Смотреть
              </Button>
            </Box>
          </Box>
        </Fade>
      </Stack>
    </BackgroundImage>
  );
}
