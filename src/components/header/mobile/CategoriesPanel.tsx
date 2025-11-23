import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Close, ChevronRight } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"

import { MenuCategory } from "../../../util/interfaces"

import { SearchBar } from "./SearchBar"

interface CategoriesPanelProps {
  categories: MenuCategory[],
  toggleMenu: () => void,
  setActiveCategory: (val: number) => void
}

export function CategoriesPanel({categories, toggleMenu, setActiveCategory}: CategoriesPanelProps) {
  const { t, i18n } = useTranslation('header')

  return <Stack>
    <Stack gap={2} direction='row' sx={{bgcolor: 'tertiary.main', width: '100%', p: 2, alignItems: 'center'}}>
      <SearchBar width='80%' />
      <Close onClick={toggleMenu} sx={{color: '#fff'}} fontSize="large" />
    </Stack>
    <Link onClick={toggleMenu} to='/sales'>
      <Stack sx={{width: '100%', p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
        <Typography>{t('sales')}</Typography>
      </Stack>
    </Link>
    {categories.map((category, i) => <Stack
      onClick={() => setActiveCategory(i)}
      key={i}
      direction='row'
      sx={{width: '100%', p: 2, justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
    >
      <Typography>{category.name[i18n.language]}</Typography>
      <ChevronRight sx={{color: 'secondary.main'}} />
    </Stack>)}
    <Link onClick={toggleMenu} to='/shops'>
      <Stack sx={{width: '100%', p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
        <Typography>{t('shops')}</Typography>
      </Stack>
    </Link>
  </Stack>
}