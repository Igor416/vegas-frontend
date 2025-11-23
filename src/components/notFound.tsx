import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ArrowBack } from '@mui/icons-material';
import { Divider, Stack, Typography } from '@mui/material';

import { useWindow } from '../util/hooks';

import { Container } from './reusables';

export function NotFound() {
  const isMobile = useWindow()
  const { t } = useTranslation('home');

  return <Container direction={isMobile ? 'column' : 'row'} sx={{
    mx: isMobile ? '0vw' : '20vw',
    bgcolor: isMobile ? 'white' : 'milk.main',
    justifyContent: 'space-between',
    alignItems: 'center',
    my: 5,
    p: 4
  }}>
    <Stack sx={{me: 4}}>
      <Link to='/'>
        <ArrowBack sx={{color: 'primary.main', width: '25vh', height: '25vh'}} />
      </Link>
    </Stack>
    <Stack gap={1} sx={{justifyContent: 'center', alignItems: 'flex-start', height: '25vh'}}>
      <Typography variant='h5'>{t('page')}</Typography>
      <Link to='/'>
        <Typography variant='h5'>{t('home')}</Typography>
        <Divider />
      </Link>
    </Stack>
  </Container>
}