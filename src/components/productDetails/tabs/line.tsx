import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import { Divider, Stack, Typography } from "@mui/material"

import { useWindow } from "../../../util/hooks"
import { Characteristic, Translatable } from "../../../util/interfaces"

interface LineProps {
  label: Translatable | string
  value: Characteristic | string
  little?: boolean
}

export function Line({label, value, little = false}: LineProps) {
  const isMobile = useWindow()
  const { t, i18n } = useTranslation('productDetails')

  const representedValue = useMemo(() => {
    if (Array.isArray(value)) {
      return value.map(v => v[i18n.language]).join(' / ')
    } else if (typeof value === 'boolean') {
      return value ? t('yes') : t('no')
    } else if (typeof value === 'number') {
      return value.toString()
    } else if (typeof value === 'string') {
      return value
    }
  
    return value[i18n.language]
  }, [i18n.language, t, value])

  return <Stack>
    <Stack direction={isMobile ? 'column' : 'row'} sx={{mb: isMobile ? 0 : 2, justifyContent: 'space-between'}}>
      <Typography style={{backgroundColor: isMobile ? 'milk.main' : ''}} sx={{p: isMobile ? 2 : 0}}>
        {typeof label === 'string' ? label : label[i18n.language]}
      </Typography>
      <Typography sx={{p: isMobile ? 2 : 0, fontWeight: 600, ...(little ? {fontSize: '0.75em', whiteSpace: 'pre-line'} : {})}}>
        {representedValue}
      </Typography>
    </Stack>
    <Divider />
  </Stack>
}