import { useTranslation } from "react-i18next"

import { Stack, Typography } from "@mui/material"

import { Size } from "../../util/interfaces"
import { useCurrencyContext, useWindow } from "../../util/hooks"

interface PriceProps {
  discount: number,
  size: Size
}

export function PricePanel({discount, size}: PriceProps) {
  const isMobile = useWindow()
  const { t } = useTranslation('productDetails')
  const currency = useCurrencyContext()

  return <Stack sx={{
    alignItems: 'center',
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    mt: isMobile ? 4 : 0,
    p: 2
  }}>
    {(size && (discount !== 0 || size?.discount !== 0)) && 
    <Typography sx={{textDecoration: 'line-through'}}>
      {`${t('old_price')}: ${size?.price[currency]} (${currency})`}
    </Typography>
    }
    <Stack direction='row' sx={{alignItems: 'flex-end'}} gap={0.5}>
      <Typography variant='h6'>{t('current_price')}:</Typography>
      {size && <Typography variant='h6' sx={{color: 'secondary.main'}}>
        {discount === 0
        ?
        (size.discount === 0
        ?
        size.price[currency]
        :
        (size.price[currency] * (100 - size.discount) / 100).toFixed(2)
        )
        :
        (size.discount > discount
        ?
        (size.price[currency] * (100 - size.discount) / 100).toFixed(2)
        :
        (size.price[currency] * (100 - discount) / 100).toFixed(2)
        )
        }
      </Typography>}
      <Typography variant='h6'>{currency}</Typography>
    </Stack>
  </Stack>
}