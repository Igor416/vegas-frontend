import { Suspense } from 'react';
import { Skeleton } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

import { useImage } from '../../util/hooks';

interface ImageProps extends BoxProps {
  srcList: string | string[],
  alt: string,
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function Image({srcList, alt, ...props}: ImageProps) {
  const { src, isLoading } = useImage(srcList)

  return !src ? <Skeleton variant='rectangular' style={props.style} >
  </Skeleton> : <Suspense>
    <Box
      component='img'
      src={src}
      alt={alt}
      {...props}
      sx={{...props.sx, transition: '1s', opacity: isLoading ? 0 : 1}}
    />
  </Suspense>
}

interface BackgroundImageProps extends BoxProps {
  srcList: string | string[],
  brightness?: number
}

export function BackgroundImage({srcList, brightness=100, ...props}: BackgroundImageProps) {
  const { src, isLoading } = useImage(srcList)

  return <Suspense>
    <Box sx={{
      position: 'relative',
      backgroundImage: `url('${src}')`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'black',
      ...props.sx
    }}>
      <Box sx={{
        position: 'absolute',
        opacity: isLoading ? 0 : (100 - brightness) / 100,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        transition: '1s'
      }}></Box>
      <Box {...props} sx={{position: 'relative', width: '100%', height: '100%'}}>
        {props.children}
      </Box>
    </Box>
  </Suspense>
}
