import { ReactNode, useEffect } from "react"
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from './util/mui/theme';
import { CurrencyProvider, CategoriesProvider, CartProvider, SectionImageProvider } from "./util/providers";

export function Providers({ children }: { children: ReactNode }) {
  const [cookies, setCookie] = useCookies(['lang', 'country'])
  const { i18n } = useTranslation();

  useEffect(() => {
    let lang = cookies.lang
    if (!lang) {
      lang = navigator.language
      
      if (lang.includes('-')) {
        lang = lang.split('-')[0]
      }
      setCookie('lang', lang, {path: '/'})
      if (i18n.language !== cookies.lang) {
        i18n.changeLanguage(lang)
      }
    }
  }, [cookies.lang, i18n, setCookie])

  useEffect(() => {
    if (i18n.language != cookies.lang) {
      setCookie('lang', i18n.language, {path: '/'})
    }
  }, [i18n.language, cookies.lang, setCookie])

  useEffect(() => {
    const country = cookies.country
    if (!country) {
      fetch('https://api.country.is/').then(response => response.json()).then(data => 
        setCookie('country', data.country, {path: '/'})
      )
    }
  }, [cookies.country, setCookie])
  
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <CurrencyProvider value='MDL'>
      <CategoriesProvider value={null}>
        <CartProvider value={[]}>
          <SectionImageProvider value={{ category: undefined, collection: undefined }}>
            {children}
          </SectionImageProvider>
        </CartProvider>
      </CategoriesProvider>
    </CurrencyProvider>
  </ThemeProvider>
}