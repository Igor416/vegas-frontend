import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import { Button, Divider, Stack, Typography } from "@mui/material"

import { Category, DetailedProduct } from "../../util/interfaces"
import { useCartDispatchContext, useCurrencies, useWindow } from "../../util/hooks"

import { Image } from "../reusables"
import { PricePanel } from "./PricePanel"
import { SizesManager, BedSizesManager } from "./size-managers"

interface SizesPanelProps {
  activeCategory: Category,
  product: DetailedProduct
}

export function SizesPanel({activeCategory, product}: SizesPanelProps) {
  const isMobile = useWindow()
  const { t } = useTranslation('productDetails')
  const [active, setActive] = useState(-1)
  const [quantity, setQuantity] = useState(1)
  const currencies = useCurrencies()
  const dispatch = useCartDispatchContext()
  
  const sizes = useMemo(() => [...product.sizes.filter(s => s.length === 200).map(s => ({...s, length: 190})), ...product.sizes], [product.sizes])

  const extraDimensions = useMemo(() => {
    if (activeCategory.name === 'bed') {
      return {
        width: product.characteristics.find(c => c.type.name === 'extra_width')?.value as number,
        length: product.characteristics.find(c => c.type.name === 'extra_length')?.value as number
      }
    }
  }, [activeCategory.name, product.characteristics])

  useEffect(() => {
    setActive(0)
  }, [product])

  return <Stack gap={4} sx={{flex: 1}}>
    <PricePanel discount={product.discount} size={sizes[active]} />
    {product['markers'] && active > -1 &&
      <Stack direction='row' gap={2} sx={{height: '6vh', flexWrap: 'nowrap', justifyContent: isMobile ? 'center' : 'flex-start'}}>
        {product.markers.map((marker, i) => {
          return <Image alt={marker} key={i} srcList={`/media/markers/${marker}.jpg`} sx={{width: '6vh', height: '6vh'}}/>
        })}
        {sizes[active]?.onSale &&
          <Image alt='sale' sx={{width: '6vh', height: '6vh'}} srcList='/static/images/sale.png'/>
        }
        {/*sizes[active]?.outOfStock &&
          <Image alt='sale' sx={{width: '6vh', height: '6vh'}} srcList='/static/images/out_of_stock.png'/>
        */}
      </Stack>
    }
    <Stack gap={4} sx={{p: 2, boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'}}>
      {activeCategory.name === 'bed'
      ?
        <BedSizesManager
          extraWidth={extraDimensions?.width as number}
          extraLength={extraDimensions?.length as number}
          sizes={sizes}
          active={active}
          setActive={setActive}
        />
      :
        <SizesManager
          sizes={sizes}
          active={active}
          setActive={setActive}
        />
      }
      <Divider />
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'stretch'}}>
        <Button sx={{display: 'flex', gap: 2}} variant='outlined' color='secondary'>
          <Typography onClick={() => setQuantity(quantity === 1 ? quantity : quantity - 1)} variant='h6'>-</Typography>
          <Typography variant='h6'>{quantity}</Typography>
          <Typography onClick={() => setQuantity(quantity === 99 ? quantity : quantity + 1)} variant='h6'>+</Typography>
        </Button>
        <Button variant='contained' onClick={() => dispatch({
          type: 'added',
          category: activeCategory.name,
          product: product,
          size: sizes[active],
          currencies: currencies,
          quantity: quantity
        })}>
          <Typography variant='h6'>{t('buy')}</Typography>
        </Button>
      </Stack>
    </Stack>
  </Stack>
}