import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Star } from "@mui/icons-material"
import { Button, Divider, Stack, Typography } from "@mui/material"

import { ListedProduct } from "../../util/interfaces"
import { useCurrencyContext, useWindow } from "../../util/hooks"

import { Image } from "../reusables"

interface CardProps {
  product: ListedProduct,
  isSales: boolean,
  isGrid: boolean
}

export function Card({product, isSales, isGrid}: CardProps) {
  const isMobile = useWindow()
  const { t, i18n } = useTranslation('catalog')
  const currency = useCurrencyContext()

  return <Link to={`/product/${product.category}/${product.name.en}`}>
    <Stack
      direction={isGrid ? 'column' : 'row'}
      gap={4}
      sx={{position: 'relative', height: '100%', p: 2, boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', transition: '0.5s'}}
    >
      <Stack direction='row' gap={2} sx={{zIndex: 1000, position: 'absolute', top: 0, left: 0, p: 3, alignItems: 'center'}}>
        <Typography variant='h5' sx={{color: (product.best ? 'gold' : 'var(--milk)')}}>
          <Star />
        </Typography>
        {product.discount !== 0 &&
        <Typography variant='h5' sx={{ms: isMobile ? 4 : 2, color: 'primary.main'}}>-{product.discount}%</Typography>
        }
      </Stack>
      <Stack direction='row' sx={{width: isGrid ? '100%': '55%'}}>
        <Stack sx={{position: 'relative', flex: 1}}>
          <Image alt={product.shortcut} srcList={product.shortcut} sx={{width: '100%'}} />
          {isSales && <Stack sx={{position: 'absolute', left: 0, bottom: 0}}>
            <Typography variant='h6'>{`${product.cheapestSize.length} x ${product.cheapestSize.width}`}</Typography>
          </Stack>}
        </Stack>
        {isGrid && product.markers.length > 0 &&
        <Stack gap={2} sx={{
          width: `${isMobile ? 7.75 : 2.25}vw`,
          height: `${isMobile ? 7.75 : 2.25}vw`,
          mt: 2,
          justifyContent: 'flex-start'
        }}>
          {product.markers.map((marker, i) => 
            <Image alt={marker} key={i} sx={{width: '100%'}} srcList={`/media/markers/${marker}.jpg`} loading='lazy' />
          )}
        </Stack>
        }
      </Stack>
      <Stack gap={isGrid ? 2 : 8} sx={{flex: 1, mt: 2, justifyContent: 'space-between'}}>
        <Stack direction='row' sx={{height: isGrid ? '5vh' : 'auto', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <Typography variant={isGrid ? 'h6' : 'h5'}>{product.name[i18n.language]}</Typography>
          <Stack>
            {product.discount !== 0
            ?
            <Stack>
              <Typography sx={{textAlign: 'end', textDecoration: 'line-through'}}>
                {product.cheapestSize.price[currency] }({currency})
              </Typography>
              <Stack direction='row' sx={{alignItems: 'center'}} gap={1}>
                {!isSales && <Typography>{t('from')}</Typography>}
                <Typography sx={{color: 'secondary.main'}} variant='h6'>
                  {(product.cheapestSize.price[currency] * (100 - product.discount) / 100).toFixed(2)}
                </Typography>
                <Typography>({currency})</Typography>
              </Stack>
            </Stack>
            :
            <Stack>
              {!isSales && <Typography>{t('from')} {product.cheapestSize.price[currency]} ({currency})</Typography>}
            </Stack>
            }
          </Stack>
        </Stack>
        <Stack sx={{flex: 1}}>
          <Typography variant={isGrid ? 'body1' : 'h6'}>{product.desc[i18n.language]}</Typography>
        </Stack>
        {isGrid && <Divider />}
        {!isGrid && product.markers &&
        <Stack direction='row' gap={2} sx={{justifyContent: 'space-between'}}>
          {product.markers.map((marker, i) => <Image alt={marker} key={i} srcList={`/media/markers/${marker}.jpg`} />)}
        </Stack>
        }
        {!isGrid && <Divider />}
        <Stack direction='row' sx={{flexWrap: 'wrap', justifyContent: 'flex-end'}}>
          <Button size={isGrid ? 'medium' : 'large'} variant='contained' sx={{bgcolor: 'secondary.main'}}>
            <Typography>{t('details')}</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Link>
}