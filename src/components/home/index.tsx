import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { useSectionImageDispatchContext, useWindow } from '../../util/hooks';

import { Reviews } from './ReviewsPanel';
import { Circles } from './Circles';
import { Container, SectionVideo } from '../reusables';
import { BannerWrapper } from '../reusables';

export function Home() {
  const isMobile = useWindow()
  const [t, i18n] = useTranslation('home');
  const dispatch = useSectionImageDispatchContext()

  useEffect(() => {
    dispatch({ type: 'default' })
  }, [dispatch])

  return <Stack>
    <Container>
      {/*<Categories />*/}
      <Circles />
      {isMobile && <BannerWrapper />}
      <Container gap={8} sx={{alignItems: 'center'}}>
        <Stack gap={2} sx={{width: isMobile ? '100%' : '60%'}}>
          <Typography variant='h3' sx={{textAlign: 'center'}}>{t('main')}</Typography>
          <Typography sx={{whiteSpace: 'pre-line', textAlign: 'center'}} variant='h6'>{t('desc')}</Typography>
        </Stack>
        <Stack direction={isMobile ? 'column' : 'row'} gap={2} sx={{width: isMobile ? '100%' : '90%'}}>
          {isMobile && <Stack sx={{width: '100%'}}>
            <SectionVideo />
          </Stack>}
          {!isMobile && <iframe style={{aspectRatio: 16/9, width: '72.5%'}} allowFullScreen src={
            i18n.language === 'ru'
            ?
            'https://www.youtube.com/embed/JpgS_TvcamA'
            :
            'https://www.youtube.com/embed/g4r4hbbVV3M'
          } title='VEGAS REKLAMA new' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' />}
          <iframe
            style={{aspectRatio: 9/16, width: isMobile ? '100%' : '27.5%'}}
            allowFullScreen
            src='https://www.youtube.com/embed/oiFlUSzmDlg'
            title='VEGAS REKLAMA new'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        </Stack>
        <Stack sx={{width: isMobile ? '100%' : '90%'}}>
          <Reviews />
        </Stack>
      </Container>
    </Container>
  </Stack>
}