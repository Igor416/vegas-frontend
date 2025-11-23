import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useCategoriesContext, useSectionImageDispatchContext } from '../../util/hooks';

import { Container } from '../reusables';
import { CategoryPanel } from './CategoryPanel';

interface CatalogProps {
  isSales: boolean
}

export function Catalog({isSales}: CatalogProps) {
  const params = useParams()
  const { activeCategory } = useCategoriesContext()
  const dispatch = useSectionImageDispatchContext()

  useEffect(() => {
    if (activeCategory) {
      if (isSales) {
        dispatch({ type: 'setCollection', category: activeCategory, collection: 'special' })
      } else if (activeCategory.name === 'mattress') {
        let collection = 'modern'
        if ((params.subCategory === 'collection' || params.subCategory === 'springless') && params.filter) {
          collection = params.filter
        } else if (params.subCategory === 'children') {
          collection = 'vegas_kids'
        }
        dispatch({ type: 'setCollection', category: activeCategory, collection: collection })
      } else {
        dispatch({ type: 'setCategory', category: activeCategory })
      }
    }
  }, [isSales, activeCategory, params.subCategory, params.filter, dispatch])

  return <Container>
    {activeCategory && <CategoryPanel
      isSales={isSales}
      category={activeCategory}
      subCategory={params.subCategory}
      filter={params.filter}
    />}
  </Container>
}
