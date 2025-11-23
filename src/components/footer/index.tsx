import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Email, Facebook, Phone } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import { useWindow } from '../../util/hooks';

import { Container } from '../reusables';

export function Footer() {
  const isMobile = useWindow()
  const { t } = useTranslation('footer');
  const links = useMemo(() => ({
    'company': ['about', 'story', 'certificates', 'materials', 'jobs'],
    'store': ['shipping', 'contacts', 'reviews', 'guarantee', 'gifts']
  }), [])

  return <Stack component='footer' sx={{bgcolor: 'milk.main'}}>
    <Container direction={isMobile ? 'column' : 'row'} gap={isMobile ? 4 : 16} sx={{justifyContent: 'center'}}>
      <Stack gap={1}>
        <Typography variant='h5' sx={{mb: 2}}>{t('company')}</Typography>
        {links.company.map((link, i) => <Link to={`/${'company'}/${link}`} key={i}>
          <Typography>{t(link)}</Typography>
        </Link>)}
      </Stack>
      <Stack gap={1} sx={{alignItems: isMobile ? 'flex-end' : 'flex-start'}}>
        <Typography variant='h5' sx={{mb: 2}}>{t('store')}</Typography>
        {links.store.map((link, i) => <Link to={`/${'store'}/${link}`} key={i}>
          <Typography>{t(link)}</Typography>
        </Link>)}
      </Stack>
      <Stack gap={1}>
        <Typography variant='h5' sx={{mb: 1}}>{t('phone')}</Typography>
        <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
          <Phone />
          <Typography>079 40-70-32</Typography>
        </Stack>
        <Typography variant='h5' sx={{my: 1}}>{t('mail')}</Typography>
        <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
          <Email />
          <Typography>vegasmd.info@gmail.com</Typography>
        </Stack>
        <Typography variant='h5' sx={{my: 1}}>{t('follow')}</Typography>
        <Link target='_blank' to='https://www.facebook.com/MatrasyVegasMoldova/' rel="noreferrer">
          <Facebook sx={{color: 'tertiary.main'}} />
        </Link>
      </Stack>
    </Container>
    <Stack sx={{bgcolor: '#444', color: '#fff', p: 3, alignItems: 'center'}}>
      <Typography>{t('llc')}</Typography>
      <Typography>{t('rights')}, 2024</Typography>
    </Stack>
  </Stack>
}