import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { LocationOn, Phone } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

import { useWindow } from '../../util/hooks';

interface ListProps {
  shops: Array<{ name: string, address: string, phone: string }>
}

export function List({shops}: ListProps) {
  const isMobile = useWindow()
  const { t } = useTranslation('shops');

  const formatPhone = useCallback((phone: string) => {
    const changes = ['(', ')', '-', ' '];
    for (const change of changes) {
      const escaped = change.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); // экранирование спецсимволов
      phone = phone.replace(new RegExp(escaped, 'g'), '');
    }
    return phone.slice(1);
  }, [])

  const isOpen = useMemo(() => {
    const today = new Date()
    const hours = today.getHours()
    if ((today.getDay() % 6)) {
      return (9 < hours) && (hours < 19)
    }
    else {
      if (hours === 19) {
        return today.getMinutes() < 31
      }
      return (9 < hours) && (hours < 19)
    }
  }, [])

  return <Stack direction='column' gap={8}>
    {shops.map((shop, i) => <Stack key={i} gap={2} sx={{
      boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
      bgcolor: 'white',
      p: isMobile ? 2 : 4,
      transition: '0.5s'
    }}>
      <Stack direction='row' gap={1} sx={{alignItems: 'flex-end'}}>
        <Typography sx={{color: 'tertiary.main'}} variant='h5'>{shop.name}</Typography>
        <Typography>({isOpen ? t('opened') : t('closed')})</Typography>
      </Stack>
      <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
        <LocationOn />
        <Typography>{shop.address}</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <Typography>{t('workday')}</Typography>
        <Typography sx={{color: 'tertiary.main'}}>10.00 - 19.30</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <Typography>{t('weekend')}</Typography>
        <Typography sx={{color: 'tertiary.main'}}>10.00 - 18.00</Typography>
      </Stack>
      <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
        <Phone />
        <Typography>
          <Link to={`tel:+373${formatPhone(shop.phone)}`}>{shop.phone}</Link>
        </Typography>
      </Stack>
    </Stack>)}
  </Stack>
}