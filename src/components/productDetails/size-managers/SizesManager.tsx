import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import { Size } from '../../../util/interfaces';

interface Dimensions {
  width: number[],
  length: number[]
}

interface SizesManagerProps {
  sizes: Size[],
  active: number,
  setActive: (val: number) => void
}

export function SizesManager({sizes, active, setActive}: SizesManagerProps) {
  const { t } = useTranslation('productDetails');
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: [],
    length: []
  })

  useEffect(() => {
    const widths = sizes.map(size => size.width)
    const lengths = sizes.map(size => size.length)

    setDimensions({
      width: widths.filter((width, i) => widths.indexOf(width) === i),
      length: lengths.filter((length, i) => lengths.indexOf(length) === i)
    }) //remove duplicates
  }, [sizes])

  const changeSize = useCallback((value: number, dimension: keyof Dimensions) => {
    if (active === -1) {
      return
    }
    const other = dimension === 'width' ? 'length' : 'width'
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i][dimension] === value && sizes[i][other] === sizes[active][other]) {
        setActive(i)
        return
      }
    }
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i][dimension] === value) {
        setActive(i)
        return
      }
    }
  }, [active, setActive, sizes])

  return <Stack>
    {active > -1 && ['width', 'length'].map((dimension, i) => <Stack gap={2} key={i} sx={{mt: 2}}>
      <Stack direction='row' sx={{justifyContent: 'space-between'}}>
        <Typography variant='h6'>{t(dimension)}:</Typography>
        {i === 0 && sizes[active].discount !== 0 &&
        <Typography variant='h6' sx={{color: 'primary.main'}}>-{sizes[active].discount}%</Typography>
        }
      </Stack>
      <FormControl fullWidth>
        <InputLabel>{t(dimension)}</InputLabel>
        <Select
          value={sizes[active][dimension as keyof Size].toString()}
          label={t(dimension)}
          onChange={(e) => sizes[active][dimension as keyof Size] !== Number(e.target.value) && changeSize(Number(e.target.value), dimension as keyof Dimensions)}
        >
          {dimensions[dimension as keyof Dimensions].map((dim, i) => 
            <MenuItem key={i} value={dim}>{dim}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Stack>)}
  </Stack>
}