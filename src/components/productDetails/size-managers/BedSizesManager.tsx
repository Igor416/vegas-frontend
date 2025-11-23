import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import { Size } from '../../../util/interfaces';

interface BedSizesManagerProps {
  extraWidth: number,
  extraLength: number,
  sizes: Size[],
  active: number,
  setActive: (val: number) => void
}

export function BedSizesManager({extraWidth, extraLength, sizes, active, setActive}: BedSizesManagerProps) {
  const { t } = useTranslation('productDetails');

  const reprSize = useCallback((size: Size) => {
    return `${size.width}x${size.length}`
  }, [])

  const reprBedSize = useCallback((size: Size) => {
    return `${size.width + extraWidth}x${size.length + extraLength}`
  }, [extraLength, extraWidth])

  return <Stack gap={2}>
    {active > -1 && <FormControl fullWidth>
      <InputLabel>{t('place_dims')}</InputLabel>
      <Select
        value={active}
        label={t('place_dims')}
        onChange={(e) => sizes[Number(e.target.value)].price.EUR !== sizes[active].price.EUR && setActive(Number(e.target.value))}
      >
        {sizes.map((size, i) => 
          <MenuItem key={i} value={i}>{reprSize(size)}</MenuItem>
        )}
      </Select>
    </FormControl>}
    <Stack gap={2} direction='row' sx={{flexWrap: 'nowrap', justifyContent: 'space-between'}}>
      <Typography variant='h6'>{t('bed_dims')}:</Typography>
      <Typography variant='h6'>{active > -1 && reprBedSize(sizes[active])}</Typography>
    </Stack>
  </Stack>
}