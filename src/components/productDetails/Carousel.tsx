import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";

import { DetailedProduct } from "../../util/interfaces";
import { useWindow } from "../../util/hooks";

import { Image } from "../reusables";

interface CarouselProps {
  product: DetailedProduct
}

export function Carousel({product}: CarouselProps) {
  const isMobile = useWindow()
  const [media, setMedia] = useState<string[]>([])
  const [active, setActive] = useState(-1)
  
  const getVideoUrl = useCallback((photoUrl: string) => {
    const id = photoUrl.split('/').slice(-1)[0].split('.')[0] // /media/videos/<id>.[jpg|png] -> <id>
    return 'https://www.youtube.com/watch?v=' + id
  }, [])

  const activeUrl = useMemo(() => {
    return media[active]
  }, [media, active])

  useEffect(() => {
    setMedia([...product.images, ...product.videos])
    setActive(0)
  }, [product])
  
  return <Stack sx={{mr: isMobile ? 4 : 0, p: 2, position: 'relative', width: isMobile ? '100%' : '65%', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'}}>
    <Stack direction='row' gap={isMobile ? 1 : 2} sx={{zIndex: 1000, position: 'absolute', p: 2, alignItems: 'center'}}>
      <Star sx={{color: product.best ? 'gold' : 'milk.main'}} fontSize='large' />
      {product.discount !== 0 &&
      <Stack>
        <Stack sx={{color: 'primary.main'}}>
          <Typography variant='h6'>-{product.discount}%</Typography>
        </Stack>
        <Divider sx={{bgcolor: 'primary.main'}} />
      </Stack>
      }
    </Stack>
    {active > -1 && <Stack gap={2}>
      <Stack sx={{position: 'relative'}}>
        {
        activeUrl.includes('videos')
        ?
        <Link to={getVideoUrl(activeUrl)} target='_blank' rel="noreferrer">
          <Image sx={{width: '100%', aspectRatio: 1.512 / 1}} alt={activeUrl} srcList={activeUrl}/>
        </Link>
        :
          <Image sx={{width: '100%', aspectRatio: 1.512 / 1}} alt={activeUrl} srcList={activeUrl}/>
        }
        <ChevronLeft
          sx={{position: 'absolute', color: 'primary.main', top: '50%', left: '0%'}}
          onClick={() => setActive(active == 0 ? media.length - 1 : active - 1)}
        />
        <ChevronRight
          sx={{position: 'absolute', color: 'primary.main', top: '50%', right: '0%'}}
          onClick={() => setActive(active == media.length - 1 ? 0 : active + 1)}
        />
      </Stack>
      <Stack direction='row' sx={{flexWrap: 'nowrap', justifyContent: 'space-between'}}>
        {media.map((url, i) => <Stack
          sx={{
            width: 100 / (media.length == 1 ? 5 : media.length + 1) + '%',
            height: 'auto',
            borderWidth: `1px`,
            borderStyle: 'solid',
            borderColor: i === active ? 'secondary.main' : 'tertiary.main',
            transition: '0.5s'
          }}
          key={i}
          onClick={() => setActive(i)}
        >
          <Image sx={{width: '100%', aspectRatio: 1.512 / 1}} alt='url' srcList={url} />
        </Stack>)}
      </Stack>
    </Stack>}
  </Stack>
}