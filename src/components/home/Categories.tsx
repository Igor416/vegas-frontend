import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Slider from "react-slick"

import { Button, Stack, Typography } from "@mui/material"

import { useCategoriesContext } from "../../util/hooks"

import { Image } from "../reusables"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Categories() {
  const { t, i18n } = useTranslation('home')
  const { categories } = useCategoriesContext()
  const [active, setActive] = useState(-1)

  useEffect(() => {
    if (categories.length > 0) {
      setActive(0)
    }
  }, [categories])

  return <Stack sx={{width: '100%'}}>
    <Slider {...{
      speed: 1000,
      slidesToShow: 2.5,
      slidesToScroll: 1,
      draggable: true,
    }}>
      {categories.map((category, i) => <Stack key={i} onClick={() => setActive(i)}>
        <Stack sx={{alignItems: 'center'}}>
          <Image alt='icon' srcList={`/static/images/mobile_icons/${category.name.toLowerCase()}.png`} />
          <Typography variant='h6'>{category.nameS[i18n.language]}</Typography>
        </Stack>
      </Stack>)}
    </Slider>
    {active > -1 && <Stack gap={2} sx={{alignItems: 'center', width: '100%', p: 2}}>
      <Typography variant='h4' sx={{textAlign: 'center'}}>{categories[active].nameS[i18n.language]}</Typography>
      <Typography variant='h6' sx={{textAlign: 'center'}}>{categories[active].desc[i18n.language]}</Typography>
      <Link to={'/catalog/' + categories[active].name + '/all'}>
        <Button variant='contained'>
          <Typography>{t('category')}</Typography>
        </Button>
      </Link>
    </Stack>}
  </Stack>
}