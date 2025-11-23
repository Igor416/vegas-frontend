import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ShoppingCart } from '@mui/icons-material';
import { Stack, Typography, Divider, Box } from '@mui/material';

import { useOrderedProducts, useSectionImageDispatchContext } from '../../util/hooks';

import { Container } from '../reusables';
import { Table } from './Table';

export function Cart() {
  const products = useOrderedProducts()
  const dispatch = useSectionImageDispatchContext()
  const { t } = useTranslation('cart');
  
  useEffect(() => {
    dispatch({ type: 'default' })
  }, [dispatch])

  return <Box>
    {products.length === 0 ? <Container direction='row' sx={{
      mx: '20vw',
      bgcolor: 'milk.main',
      justifyContent: 'space-between',
      alignItems: 'center',
      my: 5,
      p: 4
    }}>
      <Stack sx={{me: 4}}>
        <Link to='/'>
          <ShoppingCart sx={{color: 'primary.main', width: '25vh', height: '25vh'}} />
        </Link>
      </Stack>
      <Stack gap={1} sx={{justifyContent: 'center', alignItems: 'flex-start', height: '25vh'}}>
        <Typography variant='h5'>{t('empty')}</Typography>
        <Link to='/'>
          <Typography variant='h5'>{t('return')}</Typography>
          <Divider />
        </Link>
      </Stack>
    </Container> : <Container sx={{mt: 5}}>
      <Table products={products} />
    </Container>}
  </Box>
}

