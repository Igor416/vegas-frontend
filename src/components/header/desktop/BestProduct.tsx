import { useTranslation } from "react-i18next"

import { Star } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"

import { useCategory, useCurrencyContext } from "../../../util/hooks"
import { SizeWithProduct } from "../../../util/interfaces"

import { Image } from "../../reusables";

interface BestProductProps {
  size: SizeWithProduct
}

export function BestProduct({size}: BestProductProps) {
  const { t, i18n } = useTranslation('header')
  const category = useCategory(size.product)
  const currency = useCurrencyContext()
  
  return <Stack sx={{height: '100%'}}>
    <Typography variant='h6'>{category.nameS[i18n.language]} {size.product.name[i18n.language]}</Typography>
    <Stack gap={2} direction='row' sx={{alignItems: 'center'}}>
      <Typography sx={{color: 'gold'}}>
        <Star />
      </Typography>
      {size.product.discount !== 0 && <Typography variant='h6' component='span' sx={{color: 'primary.main'}}>
        -{size.product.discount}%
      </Typography>}
    </Stack>
    <Image alt={size.product.shortcut} sx={{width: '100%', flex: 1}} srcList={size.product.shortcut} />
    {size.product.discount !== 0
    ?
    <Stack sx={{textAlign: 'end'}}>
      <Typography sx={{textDecoration: 'line-through'}}>{`${t('from')} ${size.price[currency]} (${currency})`}</Typography>
      <Stack direction='row' gap={0.5} sx={{justifyContent: 'flex-end'}}>
        <Typography>{`${t('from')}`}</Typography>
        <Typography sx={{color: 'secondary.main'}}>{(size.price[currency] * (100 - size.product.discount) / 100).toFixed(2)}</Typography>
        <Typography>{`(${currency})`}</Typography>
      </Stack>
    </Stack>
    :
    <Typography sx={{textAlign: 'end'}}>{`${t('from')} ${size.price[currency]} (${currency})`}</Typography>
    }
  </Stack>
}