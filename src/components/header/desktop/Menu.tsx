import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Stack, Typography } from "@mui/material";

import { MenuSubCategory } from "../../../util/interfaces";
import { useCurrencyContext } from "../../../util/hooks";

import { Container } from "../../reusables";

interface MenuProps {
  subCategories?: MenuSubCategory[]
}

export function Menu({subCategories}: MenuProps) {
  const { t, i18n } = useTranslation('header')
  const currency = useCurrencyContext()

  const withFilters = useMemo(() => subCategories?.filter(s => s.filters.length > 0), [subCategories])
  const withoutFilters = useMemo(() => subCategories?.filter(s => s.filters.length === 0), [subCategories])

  return <Container direction='row' gap={subCategories ? 2 : 0} sx={{
    mt: subCategories ? 2 : 0,
    py: subCategories ? 2 : 0,
    justifyContent: 'center'
  }}>
    {withFilters && withFilters.map((subCategory, i) => <Stack key={i} gap={subCategories ? 2 : 0} sx={{width: '20%'}}>
      <Typography textAlign='center' variant='h6'>{subCategory.name[i18n.language]}</Typography>
      <Stack gap={2}>
        {subCategory.filters.map((filter, j) => <Link key={j} to={`/catalog/${subCategory.category}/${subCategory.value}/${filter.value}`}>
          <Typography textAlign='center'>
            {filter.name[i18n.language] + (filter.price ? ` ${t('from')} ${filter.price[currency]} (${currency})` : '')}
          </Typography>
        </Link>)}
      </Stack>
    </Stack>)}
    {withoutFilters && withoutFilters.length > 0 && <Stack gap={subCategories ? 2 : 0} sx={{width: '20%'}}>
      <Typography textAlign='center' variant='h6'>{t('other')}</Typography>
      {withoutFilters.map((subCategory, i) => <Link key={i} to={`/catalog/${subCategory.category}/${subCategory.value}`}>
        <Typography textAlign='center'>{subCategory.name[i18n.language]}</Typography>
      </Link>)}
    </Stack>}
  </Container>
}