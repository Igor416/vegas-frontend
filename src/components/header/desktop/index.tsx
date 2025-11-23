import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Stack, Typography, Box, Button } from '@mui/material';
import { Close, ExpandMore, LocationOn, ShoppingCart } from '@mui/icons-material';

import { useCartContext, useMenu, useTotal } from '../../../util/hooks';

import { Container, Image } from "../../reusables";
import { Menu } from './Menu';
import { BestProduct } from './BestProduct';

export function DesktopHeader() {
  const [active, setActive] = useState(-1)
  const [t, i18n] = useTranslation('header');
  const products = useCartContext()
  const menu = useMenu()
  const { total, currency} = useTotal(products)
  const location = useLocation()

  useEffect(() => {
    setActive(-1)
  }, [i18n.language, location])
  
  return <Stack sx={{zIndex: active > -1 ? 1300 : 1200, top: '0%', position: 'absolute', width: '100%', height: '100%'}}>
    <Container direction='row' gap={4} sx={{
      bgcolor: `rgba(255, 255, 255, 0.${active > -1 ? 7 : 4})`,
      boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
      transition: '0.5s',
    }}>
      <Link to='/' style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}} onMouseEnter={() => setActive(-1)}>
        <Image alt='logo' sx={{width: '7.5vw'}} srcList='/static/images/logo.png'/>
      </Link>
      <Stack direction='row' gap={4} sx={{flex: 1, justifyContent: 'center'}}>
        <Link
          to='/sales'
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}
          onMouseEnter={() => setActive(-1)}
        >
          <Image alt='sale' sx={{width: '6vh', height: '6vh'}} srcList='/static/images/sale.png'/>
          <Typography variant='h6'>{t('sales').toLowerCase()}</Typography>
        </Link>
        {menu.map((category, i) => <Stack key={i} onMouseEnter={() => setActive(i)} sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          <Image alt={category.name[i18n.language]} sx={{height: '6vh'}} srcList={category.image}/>
          <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
            <Typography variant='h6'>{category.name[i18n.language].toLowerCase()}</Typography>
            <ExpandMore sx={{transform: `rotate(${i === active ? 180 : 0}deg)`, transition: '0.5s'}} />
          </Stack>
        </Stack>)}
      </Stack>
      <Stack gap={2} direction='row'>
        <Stack gap={2} sx={{alignItems: 'center'}} onMouseEnter={() => setActive(-1)}>
          {['en', 'ru', 'ro'].filter((lang) => lang !== i18n.language).map((lang, i) => <Stack key={i} sx={{justifyContent: 'center', flex: 1}}>
            <Button onClick={() => i18n.changeLanguage(lang)} sx={{p: 0}}>
              <Image alt={'flag ' + lang} sx={{ width: '2.5vw' }} srcList={'/static/images/flags/' + lang + '.png'}/>
            </Button>
          </Stack>)}
        </Stack>
        <Stack sx={{justifyContent: 'space-between'}} onMouseEnter={() => setActive(-1)}>
          <Link to='/shops'>
            <Stack direction='row' gap={1}>
              <LocationOn fontSize='large' sx={{color: 'tertiary.main'}} />
              <Typography variant='h6'>{t('shops').toLowerCase()}</Typography>
            </Stack>
          </Link>
          <Link to='/cart'>
            <Stack direction='row' gap={1}>
              <ShoppingCart fontSize='large' sx={{color: 'primary.main'}} />
              <Typography variant='h6'>{total.toFixed(2)} ({currency})</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Container>
    <Container sx={{
      ...(active > -1 ? {opacity: 1, height: '100%'} : {opacity: 0, height: '0%'}),
      position: 'relative',
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      py: 0,
      transition: '0.5s'
    }}>
      <Menu subCategories={menu[active]?.subCategories} />
      <Box sx={{flex: 1}} />
      <Stack>
        <Typography sx={{textAlign: 'center', color: 'tertiary.main'}} variant='h4'>{active > -1 ? 'Hit Sales' : ''}</Typography>
        <Container sx={{justifyContent: 'center', ...(active > -1 ? {} : {p: 0})}} direction='row'>
          {active > -1 && menu[active].sizes.map((size, i) => <Stack key={i} sx={{width: '20%', p: 2}}>
            <Link to={`/product/${size.product.category}/${size.product.name.en}`} style={{height: '100%'}}>
              <BestProduct size={size} />
            </Link>
          </Stack>)}
        </Container>
      </Stack>
      <Close onClick={() => setActive(-1)} fontSize='large' sx={{
        position: 'absolute',
        top: '1vw',
        right: '2vw'
      }} />
    </Container>
  </Stack>
}
