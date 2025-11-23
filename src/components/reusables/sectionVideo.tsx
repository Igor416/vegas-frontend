import { Stack } from '@mui/material';

import { useSectionImageContext, useUrlRoot, useWindow } from '../../util/hooks';

export function SectionVideo() {
  const { category, collection } = useSectionImageContext()
  const root = useUrlRoot()
  const isMobile = useWindow()

  // Only show video on home page (when no category or collection is selected)
  if (category || collection) {
    return null;
  }

  return <Stack sx={{ width: '100%', height: isMobile ? '100%' : '100vh', position: 'relative' }}>
    <video
      autoPlay
      muted
      loop
      playsInline
      style={isMobile ? {} : {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      <source src={root + "/static/images/movie.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Stack>
}
