import { useTranslation } from "react-i18next";

import { Stack, Typography } from "@mui/material";

import { useWindow } from "../../../util/hooks";

import { TabProps } from "./props"
import { Image } from "../../reusables"
import { Line } from "./line";

export function Description({product}: TabProps) {
  const isMobile = useWindow()
  const { i18n } = useTranslation('productDetails')

  return <Stack gap={2} sx={{p: isMobile ? 0 : 4, pt: 4, width: '100%'}}>
    <Typography variant='h5'>{product.name[i18n.language]}</Typography>
    <Typography variant='h6'>{product.desc[i18n.language]}</Typography>
    <Stack gap={2} direction={isMobile ? 'column' : 'row'} sx={{mt: 2, justifyContent: 'space-between'}}>
      <Stack gap={4} sx={{width: isMobile ? '100%' : '45%'}}>
        {product.characteristics.filter(c => c.type.inDescription).map((characteristic, i) => 
          <Line key={i} label={characteristic.type.label} value={characteristic.value} />
        )}
      </Stack>
      <Image sx={{width: isMobile ? '100%' : '45%'}} alt={product.shortcut} srcList={product.shortcut} />
    </Stack>
  </Stack>
}