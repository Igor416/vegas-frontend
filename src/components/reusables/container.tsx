import { Stack, StackProps, useTheme } from "@mui/material";

import { useWindow } from "../../util/hooks";

export function Container(props: StackProps) {
  const isMobile = useWindow()
  const theme = useTheme()

  return <Stack {...props} sx={{
    px: isMobile ? 2 : 8,
    py: isMobile ? 2 : 4,
    transition: '1s',
    ...props.sx,
    [theme.breakpoints.up('xl')]: {
      px: 16,
    },
  }}>
    {props.children}
  </Stack>
}