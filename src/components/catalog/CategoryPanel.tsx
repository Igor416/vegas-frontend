import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Box, Grid2, Stack, Typography } from "@mui/material"

import { Category } from "../../util/interfaces"
import { useProducts, useWindow } from "../../util/hooks"

import { Card } from "./Card"

interface CategoryPanelProps {
  isSales: boolean
  category: Category
  subCategory?: string
  filter?: string
}

export function CategoryPanel({isSales, category, subCategory, filter}: CategoryPanelProps) {
  const isMobile = useWindow()
  const { i18n } = useTranslation('catalog')
  const [isGrid, toggleGrid] = useState(true)
  const products = useProducts(category.name, subCategory, filter)

  return <Stack gap={4}>
    <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography variant='h4'>{category.namePl[i18n.language]}</Typography>
      {!isMobile && <Stack onClick={() => toggleGrid(!isGrid)} gap={isGrid ? '0.5vw' : '0.55vw'} sx={{
        flexFlow: 'row wrap',
        padding: '0.5vw',
        width: '3vw',
        height: '3vw',
        bgcolor: 'tertiary.main'
      }}>
        {[0, 1, 2].map((value) => <Box
        key={value}
        sx={{transition: '0.5s', bgcolor: '#fff', height: `${isGrid ? 0.75 : 0.3}vw`, width: `${isGrid ? 0.75 : 2}vw`}}
      />)}
      </Stack>}
    </Stack>
    <Grid2 container columns={isMobile ? 1 : 3} spacing={6}>
      {products.map((product, j) => <Grid2 key={j} size={isGrid ? 1 : 3} sx={{transition: '0.5s'}}>
        <Card product={product} isSales={isSales} isGrid={isGrid} />
      </Grid2>)}
    </Grid2>
  </Stack>
}