import { useTranslation } from "react-i18next";

import { Divider, Stack, Typography } from "@mui/material";

import { useWindow } from "../../../util/hooks";

import { Image } from "../../reusables"
import { TabProps } from "./props";

export function Structure({product}: TabProps) {
  const isMobile = useWindow()
  const { i18n } = useTranslation('productDetails')
  
  return <Stack sx={{p: 4, width: '100%'}}>
    {product.structure && product.structure.map((layer, i) => <Stack key={i}>
      {i > 0 && <Divider />}
      <Stack direction={isMobile ? 'column' : 'row'} sx={{py: 4, alignItems: 'center'}}>
        <Typography sx={{width: isMobile ? '100%' : '25%', color: 'primary.main'}} variant='h5'>{layer.name[i18n.language]}</Typography>
        <Stack direction='row' sx={{width: isMobile ? '100%' : '16.67%', alignItems: 'center', position: 'relative'}}>
          <Stack sx={{
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            color: 'white',
            bgcolor: 'primary.main',
            ...(isMobile ? {
              width: '6vw',
              height: '6vw',
              ml: '-3vw',
            } : {
              width: '1.5vw',
              height: '1.5vw',
              ml: '-0.75vw'
            })
          }}>
            <Typography>{i + 1}</Typography>
          </Stack>
          <Image alt={layer.image} srcList={layer.image} />
        </Stack>
        <Typography sx={{flex: 1}}>{layer.desc[i18n.language]}</Typography>
      </Stack>
    </Stack>)}
  </Stack>
}