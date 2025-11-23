import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { Box, Stack, Tab, Tabs as MuiTabs } from "@mui/material"

import { Category } from "../../../util/interfaces"
import { useWindow } from "../../../util/hooks"

import { TabProps } from "./props"
import { Description } from "./description"
import { Characteristics } from "./characteristic"
import { Structure } from "./structure"
import { Technologies } from "./technologies"

interface TabsProps extends TabProps {
  category: Category
}

export function Tabs({category, product}: TabsProps) {
  const isMobile = useWindow()
  const { t } = useTranslation('productDetails')
  const [tabs, setTabs] = useState<string[]>([])
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const tabs = ['description', 'characteristic'];
    if (product.structure.length > 0) {
      tabs.push('structure')
      if (product.technologies.length > 0 && !isMobile) {
        tabs.push('technologies')
      }
    }
    setTabs(tabs)
  }, [isMobile, product])

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0'
      ref.current.animate([
        { opacity: '0' },
        { opacity: '1' },
      ], 500)
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1'
        }
      }, 480)
    } 
  }, [active])

  const components = useMemo(() => [
    <Description product={product} />,
    <Characteristics category={category} product={product} />,
  ].concat(
    tabs.includes('structure') ? [<Structure product={product} />] : []
  ).concat(
    tabs.includes('technologies') ? [<Technologies product={product} />] : []
  ), [category, product, tabs])

  return <Stack sx={{width: '100%'}}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <MuiTabs value={active} onChange={(_, i) => setActive(i)}>
        {tabs.map((tab, i) => 
          <Tab key={i} label={t(tab)} />
        )}
      </MuiTabs>
    </Box>
    <Stack ref={ref}>
      {components.map((component, i) => <div key={i} hidden={i != active}>
        {component}
      </div>)}
    </Stack>
  </Stack>
}