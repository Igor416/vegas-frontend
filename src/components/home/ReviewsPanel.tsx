import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Slider from "react-slick"

import { Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { CalendarToday, LocationOn } from "@mui/icons-material"

import { Review } from "../../util/interfaces"
import { getReviews, sendReview } from "../../util/api"
import { useForm, useWindow } from "../../util/hooks"

import { NextButton, PrevButton } from "./buttons"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Reviews() {
  const isMobile = useWindow()
  const { t } = useTranslation('home')
  const {data, setData, submitForm} = useForm(sendReview)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    getReviews().then(setReviews)
    const today = new Date()
    setData({
      title: '',
      date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      city: '',
      text: ''
    })
  }, [setData])
  
  return <Stack gap={8}>
    <Stack gap={2}>
      <Typography variant='h4' sx={{textAlign: 'center'}}>{t('reviews')}:</Typography>
      <Divider />
      <Slider {...{
        prevArrow: isMobile ? undefined : <PrevButton currentSlide={0} slideCount={reviews.length} />,
        nextArrow: isMobile ? undefined : <NextButton currentSlide={0} slideCount={reviews.length} />,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: isMobile
      }}>
        {reviews.map((review, i) => <Stack key={i} sx={{position: 'relative'}}>
          <Stack gap={2}>
            <Stack direction='row' sx={{justifyContent: 'space-between'}}>
              <Typography>
                <CalendarToday />&nbsp;{review.date}
              </Typography>
              <Typography>
                <LocationOn />&nbsp;{review.city}
              </Typography>
            </Stack>
            <Stack gap={2} sx={{px: isMobile ? 0 : 8}}>
              <Typography variant='h5' sx={{textAlign: 'center'}}>{review.title}</Typography>
              <Typography variant='h6' sx={{textAlign: 'center'}}>{review.text}</Typography>
            </Stack>
          </Stack>
        </Stack>)}
      </Slider>
    </Stack>
    <Divider />
    <Stack gap={2}>
      {Object.keys(data).filter(key => key !== 'date').map((key, i) => <TextField
        key={i}
        label={t(key)}
        variant='outlined'
        value={data[key as keyof Review] ?? ''}
        onChange={e => setData(d => {
          const copy = {...d}
          copy[key as keyof Review] = e.target.value
          return copy
        })}
      />)}
      <Button
        variant='contained'
        disabled={data.city === '' || data.text === '' || data.title === ''}
        sx={{alignSelf: 'flex-end', bgcolor: 'tertiary.main'}}
        onClick={() => submitForm()}
      >
        <Typography>{t('leave')}</Typography>
      </Button>
    </Stack>
  </Stack>
}