import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"

import { MenuCategory } from "../../../util/interfaces"

import { BestProduct } from "./BestProduct"

interface SubCategoriesPanelProps {
  category?: MenuCategory
  close: () => void,
  setSubCategory: (val: number) => void
}

export function SubCategoriesPanel({category, close, setSubCategory}: SubCategoriesPanelProps) {
  const { i18n } = useTranslation('header')
  
  return <Stack sx={{
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100vh',
    bgcolor: 'white',
    overflowY: 'scroll',
    transition: '0.5s',
    p: 0,
    width: category ? '100vw' : 0,
  }}>
    <Stack direction='row' onClick={close} sx={{
      width: '100%',
      p: 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      bgcolor: 'tertiary.main',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      color: 'tertiary.contrastText'
    }}>
      <ChevronLeft />
      <Typography>{category && category.name[i18n.language]}</Typography>
    </Stack>
    {category && category.subCategories.map((subCategory, i) => <Stack
      direction='row'
      onClick={subCategory.filters.length === 0 ? undefined : () => setSubCategory(i)}
      key={i}
      sx={{width: '100%', p: 2, justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
    >
      {subCategory.filters.length === 0 ? <Link style={{flex: 1}} to={`/catalog/${subCategory.category}/${subCategory.value}`}>
        <Typography>{subCategory.name[i18n.language]}</Typography>
      </Link> : <Typography>{subCategory.name[i18n.language]}</Typography>}
      {subCategory.filters.length !== 0 && <ChevronRight sx={{color: 'secondary.main'}} />}
    </Stack>)}
    {category && <Stack direction='row' sx={{py: 2, alignItems: 'flex-end', justifyContent: 'center'}}>
      <Typography sx={{color: 'tertiary.main'}} variant='h5'>Hit Sales</Typography>
    </Stack>}
    {category && category.sizes.map((size, i) => <Stack
      direction='row'
      key={i}
      sx={{borderTop: i > 0 ? '1px solid rgba(0, 0, 0, 0.12)' : '', p: 2}}
    >
      <BestProduct size={size} />
    </Stack>)}
    <Box sx={{height: '20vh', width: '100%'}} />
  </Stack>
}