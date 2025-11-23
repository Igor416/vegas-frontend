import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Stack, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import { useSectionImageContext } from '../../util/hooks';

import { BackgroundImage } from './image';

export function SectionImage() {
  const { category, collection } = useSectionImageContext()
  const { i18n } = useTranslation('header')

  const scroll = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }, [])

  const link = useMemo(() => {
    if (collection) {
      return `collections/${collection}.jpg`
    } else if (category) {
      return `categories/${category?.name}.png`
    } else {
      scroll()
      return `bg.jpg`
    }
  }, [category, collection, scroll])

  return <BackgroundImage brightness={70} sx={{width: '100%', height: '100vh'}} srcList={`/static/images/${link}`}>
    {category && <Stack sx={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <Stack gap={2} sx={{zIndex: 1250, alignItems: 'center'}} onClick={() => scroll()}>
        <Button variant='text' sx={{
          borderRadius: 0,
          py: 2,
          px: 8,
          border: '1px solid white',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)'
          }
        }}>
          <Typography variant='h2' sx={{color: 'white'}}>{category.namePl[i18n.language]}</Typography>
        </Button>
        <ExpandMore sx={{color: 'white', fontSize: '3rem'}} />
      </Stack>
    </Stack>}
  </BackgroundImage>
}