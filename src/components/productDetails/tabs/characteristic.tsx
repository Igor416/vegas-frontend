import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Divider, Stack } from "@mui/material";

import { useWindow } from "../../../util/hooks";
import { Category } from "../../../util/interfaces";

import { Line } from "./line";
import { TabProps } from "./props";

interface CharacteristicsProps extends TabProps {
  category: Category
}

export function Characteristics({category, product}: CharacteristicsProps) {
  const isMobile = useWindow()
  const { t } = useTranslation('productDetails')

  const madeInMD = useMemo(() => ['bed', 'basis', 'stand'].includes(category.name), [category.name])
  
  return <Stack direction={isMobile ? 'column' : 'row'} sx={{width: '100%', p: isMobile ? 0 : 4}}>
    <Stack gap={4} sx={{flex: 1, p: isMobile ? 0 : 4}}>
      <Line label={t('brand')} value='Vegas' />
      {product.characteristics.slice(0, 8).map((characteristic, i) => 
        <Line key={i} label={characteristic.type.label} value={characteristic.value} />
      )}
    </Stack>
    {!isMobile && <Divider orientation='vertical' flexItem />}
    <Stack gap={4} sx={{flex: 1, p: isMobile ? 0 : 4}}>
      {product.characteristics.slice(8).map((characteristic, i) =>
        <Line key={i} label={characteristic.type.label} value={characteristic.value} />
      )}
      {['country', 'manufacturer'].map((key, i) => 
        <Line key={i} label={t(key)} value={madeInMD ? t(key + 'text1') : t(key + 'text')} />
      )}
      <Line label={t('note')} value={t('notetext')} little={true} />
    </Stack>
  </Stack>
}