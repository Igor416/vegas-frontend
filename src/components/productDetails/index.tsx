import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@mui/material';

import { useCategoriesContext, useProduct, useSectionImageDispatchContext, useWindow } from '../../util/hooks';
import { Translatable } from '../../util/interfaces';

import { Container } from '../reusables';
import { Carousel } from './Carousel';
import { SizesPanel } from './SizesPanel';
import { Tabs } from './tabs';

export function ProductDetails() {
  const isMobile = useWindow()
  const params = useParams()
  const { activeCategory } = useCategoriesContext()
  const product = useProduct(activeCategory?.name, params.name)
  const { i18n } = useTranslation('productDetails');
  const dispatch = useSectionImageDispatchContext()

  const collection = useMemo(() => {
    if (product && activeCategory?.name === 'mattress') {
      const characteristic = product.characteristics.find(c => c.type.name === 'collection')
      if (characteristic) {
        const collection = (characteristic.value as Translatable)[i18n.language]
        if (collection === 'Vegas Kids') {
          return 'vegas_kids'
        }
        return collection.toLowerCase()
      }
    }
  }, [activeCategory?.name, i18n.language, product])

  useEffect(() => {
    if (activeCategory) {
      if (collection) {
        dispatch({ type: 'setCollection', category: activeCategory, collection: collection })
      } else {
        dispatch({ type: 'setCategory', category: activeCategory })
      }
    }
  }, [activeCategory, collection, dispatch])

  return <Stack>
    <Container sx={{mt: 4, mb: isMobile ? 0 : 4}}>
      {activeCategory && product && <Stack>
        <Stack sx={{mb: 5}}>
          <Typography variant='h4'>{activeCategory.nameS[i18n.language]} {product.name[i18n.language]}</Typography>
          <Stack gap={isMobile ? 4 : 8} direction={isMobile ? 'column' : 'row'} sx={{mt: 2, justifyContent: 'space-between'}}>
            <Carousel product={product} />
            <SizesPanel activeCategory={activeCategory} product={product} />
          </Stack>
        </Stack>
        <Tabs category={activeCategory} product={product} />
      </Stack>}
    </Container>
  </Stack>
}