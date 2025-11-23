import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material';

import { sendSearch } from '../../../util/api'
import { SearchResults } from '../../../util/interfaces';
import { useCurrencyContext } from '../../../util/hooks';

interface SearchBarProps {
  width: string
}

export function SearchBar({width}: SearchBarProps) {
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)
  const location = useLocation()
  const [res, setRes] = useState<SearchResults>({categories: [], products: []})
  const currency = useCurrencyContext()
  const { t } = useTranslation('search');

  const submitForm = useCallback(() => {
    setShow(search.length > 1)
    if (search.length > 1) {
      sendSearch(search).then(setRes)
    } else {
      setRes({categories: [], products: []})
    }
  }, [search])

  useEffect(() => {
    setSearch('')
    setRes({categories: [], products: []})
    setShow(false)
  }, [location])

  useEffect(submitForm, [submitForm])

  return <Stack sx={{flex: 1, justifyContent: 'center', position: 'relative'}} onMouseEnter={() => setShow(search.length > 1)}>
    <Stack direction='row' sx={{flexWrap: 'nowrap', alignItems: 'stretch', height: '100%'}}>
      <input style={{
        border: 'none',
        outline: 'none',
        width: '100%',
        backgroundColor: 'var(--milk)',
        borderTopRightRadius: '.25rem',
        borderBottomRightRadius: '.25rem',
        borderTopLeftRadius: '50rem',
        borderBottomLeftRadius: '50rem',
        padding: '1rem',
        margin: 0,
        fontSize: '1rem'
      }} value={search ?? ''} onChange={e => setSearch(e.target.value)}/>
      <Button sx={{
        px: 2,
        borderTopRightRadius: '50rem',
        borderBottomRightRadius: '50rem',
        borderTopLeftRadius: '.25rem',
        borderBottomLeftRadius: '.25rem',
        bgcolor: 'milk.main',
        border: 0
      }} type='submit'>
        <svg style={{ width: 24 }} viewBox='0 0 24 24'>
          <path fill='#666666' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'/>
        </svg>
      </Button>
    </Stack>
    <Stack sx={{
      zIndex: 1200,
      width: width,
      top: '100%',
      bgcolor: 'white',
      position: 'absolute',
      py: 2,
      px: 3,
      mt: 3,
      transition: '0.5s',
      ...(show ? {opacity: 1, height: 'auto', display: 'flex'} : {opacity: 0, height: '0%', display: 'none'})
    }} onMouseLeave={() => setShow(false)}>
      <Typography sx={{mb: 3}}>{t('help')}</Typography>
      {res.categories.length > 0 && <Stack gap={1} sx={{width: '100%', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', mt: 2}}>
        <Typography variant='h6' sx={{pb: 1}}>{t('categories')}: </Typography>
        {res.categories.map((item, i) => <Stack direction='row' key={i} sx={{flexWrap: 'nowrap', justifyContent: 'space-between'}}>
          <Link to={item.link}>
            <Typography>{item.text}</Typography>
          </Link>
          <Typography>({item.count})</Typography>
        </Stack>)}
      </Stack>}
      {res.products.length > 0 && <Stack gap={1} sx={{width: '100%', borderBottom: '1px solid rgba(0, 0, 0, 0.12)', mt: 2}}>
        <Typography variant='h6' sx={{pb: 1}}>{t('products')}: </Typography>
        {res.products.map((item, i) => <Stack direction='row' key={i} sx={{flexWrap: 'nowrap', justifyContent: 'space-between'}}>
          <Link to={item.link}>
            <Typography>{item.text}</Typography>
          </Link>
          {item.discount !== 0 && 
          <Typography sx={{fontSize: '0.75em', textDecoration: 'line-through'}}>
            {`${t('from')} ${item.price[currency]} (${currency})`}
          </Typography>
          }
          <Stack direction='row' gap={0.5} sx={{justifyContent: 'flex-end'}}>
            <Typography>{`${t('from')}`}</Typography>
            <Typography sx={{color: 'secondary.main'}}>{(Number(item.price[currency]) * (100 - item.discount) / 100).toFixed(2)}</Typography>
            <Typography>{`(${currency})`}</Typography>
          </Stack>
        </Stack>)}
      </Stack>}
    </Stack>
  </Stack>
}
