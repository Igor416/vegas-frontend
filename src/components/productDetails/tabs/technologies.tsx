import { useTranslation } from "react-i18next";

import { Divider, Stack, Typography } from "@mui/material";

import { TabProps } from "./props";
import { Image } from "../../reusables"

export function Technologies({product}: TabProps) {
  const { i18n } = useTranslation('productDetails')
  
  return <Stack sx={{p: 4, width: '100%'}}>
    {product.technologies.map((technology, i) => <Stack key={i}>
      {i > 0 && <Divider />}
      <Stack direction='row' sx={{py: 4}}>
        <Stack sx={{alignItems: 'center', justifyContent: 'center', width: '16.67%'}}>
          <Image alt={technology.image} sx={{width: '75%'}} srcList={technology.image} />
        </Stack>
        <Stack sx={{width: '83.33%'}}>
          <Typography variant='h5' sx={{color: 'primary.main'}}>{technology.name[i18n.language]}</Typography>
          <Typography>{technology.desc[i18n.language]}</Typography>
        </Stack>
      </Stack>
    </Stack>)}
  </Stack>
}