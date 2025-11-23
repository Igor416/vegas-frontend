import { useEffect, useMemo } from 'react';

import { useSectionImageDispatchContext, useWindow } from '../../util/hooks';

import { List } from './list';
import { Container } from '../reusables';

export function Shops() {
  const isMobile = useWindow()
  const dispatch = useSectionImageDispatchContext()

  useEffect(() => {
    dispatch({ type: 'default' })
  }, [dispatch])
  
  const shops = useMemo(() => [
    {
      name: 'CC Jumbo Showroom',
      address: 'Mun. Chișinău, bd. Decebal 23/1',
      phone: '0 (78) 50-55-20'
    },
    {
      name: 'Vegas Rîșcani',
      address: 'Mun. Chișinău, str. Kiev 16/1',
      phone: '0 (79) 44-00-57'
    },
    {
      name: 'Showroom Ciocana',
      address: 'Mun Chișinău, bd. Mircea cel Bătrîn 14',
      phone: '0 (79) 84-04-44'
    },
    {
      name: 'Ternopan Confort',
      address: 'Mun Orhei, str. Chișinău 5',
      phone: '0 (69) 47-29-56'
    },
  ], [])

  return <Container direction={isMobile ? 'column' : 'row'} gap={8} sx={{position: 'relative'}}>
    {!isMobile && <List shops={shops.slice(0, 2)} />}
    <iframe
      title='Map'
      src='https://www.google.com/maps/d/u/0/embed?mid=1GchRIsF2ZGYvS6rskNj_6UTPwg1UB6w&ehbc=2E312F'
      style={isMobile ? {height: '50vh'} : {flex: 1}}
    />
    <List shops={isMobile ? shops : shops.slice(2)} />
  </Container>
}