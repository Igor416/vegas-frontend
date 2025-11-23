import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Phone } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import { useMenu } from '../../../util/hooks';

import { TopBar } from './TopBar';
import { FiltersPanel } from './FiltersPanel';
import { SubCategoriesPanel } from './SubCategoriesPanel';
import { CategoriesPanel } from './CategoriesPanel';

export function MobileHeader() {
  const [menuOpened, setMenuOpened] = useState(false)
  const [activeCategory, setActiveCategory] = useState(-1)
  const [activeSubCategory, setActiveSubCategory] = useState(-1)
  const menu = useMenu()
  const location = useLocation()
  const { t } = useTranslation('header');

  const toggleMenu = useCallback(() => {
    setMenuOpened(!menuOpened)
    if (!menuOpened) {
      setActiveCategory(-1)
      setActiveSubCategory(-1)
    }
  }, [menuOpened])

  useEffect(() => {
    if (menuOpened) {
      toggleMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location])

  return <Stack sx={{position: 'relative', bgcolor: 'white'}}>
    <TopBar menuOpened={menuOpened} toggleMenu={toggleMenu} />
    <Stack sx={{
      zIndex: 1200,
      position: 'fixed',
      right: 0,
      top: 0,
      height: '100vh',
      bgcolor: 'white',
      overflowY: 'scroll',
      transition: '0.5s',
      p: 0,
      width: menuOpened ? '100%' : 0
    }}>
     <CategoriesPanel
        categories={menu}
        toggleMenu={toggleMenu}
        setActiveCategory={setActiveCategory}
      />
      <Stack sx={{bgcolor: 'milk.main', flex: 1, width: '100%', alignItems: 'center', p: 4}}>
        <Phone />
        <Typography sx={{whiteSpace: 'pre-line', textAlign: 'center', fontWeight: 500}}>{t('order')}<br />079 40-70-32</Typography>
      </Stack>
      <SubCategoriesPanel
        category={menu[activeCategory]}
        close={() => setActiveCategory(-1)}
        setSubCategory={setActiveSubCategory}
      />
      <FiltersPanel
        subCategory={menu[activeCategory]?.subCategories[activeSubCategory]}
        close={() => setActiveSubCategory(-1)}
      />
    </Stack>
  </Stack>
}