import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { ChevronLeft } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"

import { MenuSubCategory } from "../../../util/interfaces"
import { useCurrencyContext } from "../../../util/hooks"

interface FiltersPanelProps {
  subCategory?: MenuSubCategory
  close: () => void,
}

export function FiltersPanel({subCategory, close}: FiltersPanelProps) {
  const { t, i18n } = useTranslation('header')
  const currency = useCurrencyContext()

  return <Stack sx={{
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100vh',
    bgcolor: 'white',
    overflowY: 'scroll',
    transition: '0.5s',
    p: 0,
    width: subCategory ? '100vw' : 0,
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
      <Typography>{subCategory && subCategory.name[i18n.language]}</Typography>
    </Stack>
    {subCategory && subCategory.filters.map((filter, i) => <Stack
      direction='row'
      key={i}
      sx={{width: '100%', p: 2, justifyContent: 'space-between', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
    >
      <Link to={`/catalog/${subCategory.category}/${subCategory.value}/${filter.value}`}>
        <Typography>{filter.name[i18n.language] + (filter.price ? ` ${t('from')} ${filter.price[currency]} (${currency})` : '')}</Typography>
      </Link>
    </Stack>)}
  </Stack>
}