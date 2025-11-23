import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import { CheckCircle } from "@mui/icons-material"
import { Stack, Typography } from "@mui/material"

import { useWindow } from "../../util/hooks"

export function Circles() {
  const isMobile = useWindow()
  const { t } = useTranslation('home')
  const colors = useMemo(() => ['secondary', 'tertiary', 'primary'], [])

  return <Stack direction={isMobile ? 'column' : 'row'} gap={4} sx={{
    py: isMobile ? 2 : 4,
    px: isMobile ? 2 : 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    mt: 4
  }}>
    {/*<Image alt='logo' srcList='/static/images/logo.png'/>
    {!isMobile && <Typography variant='h3'>{t('is')}</Typography>}*/}
    {[1, 2, 3].map((num, i) => isMobile ? <Stack key={i} sx={{bgcolor: `${colors[i]}.main`, color: '#fff', p: 2, width: '100%'}}>
      <Typography variant='h6'>
        <CheckCircle />&nbsp; {t('char' + num)}
      </Typography>
    </Stack> : <Stack key={i} sx={{
      width: '12.5vw',
      height: '12.5vw',
      bgcolor: `${colors[i]}.main`,
      p: 2,
      ms: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: '#fff'
    }}>
      <Typography variant='h5' sx={{textAlign: 'center'}}>{t('char' + num)}</Typography>
    </Stack>
    )}
  </Stack>
}