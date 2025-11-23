import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface ButtonProps {
  currentSlide: number
  slideCount: number
}

export function PrevButton({ currentSlide, slideCount, ...props }: ButtonProps) {
  return <ChevronLeft
    className={'slick-prev slick-arrow'}
    aria-hidden='true'
    type='button'
    fontSize='large'
    sx={{left: 0, color: 'tertiary.main'}}
    {...props}
  />
}

export function NextButton({ currentSlide, slideCount, ...props }: ButtonProps) {
  return <ChevronRight
    className={'slick-next slick-arrow'}
    aria-hidden='true'
    type='button'
    fontSize='large'
    sx={{right: 0, color: 'tertiary.main'}}
    {...props}
  />
}