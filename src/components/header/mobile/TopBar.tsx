import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Menu, Phone } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

import { Container, Image } from "../../reusables";

interface TopBarProps {
  menuOpened: boolean,
  toggleMenu: () => void
}

export function TopBar({toggleMenu}: TopBarProps) {
  const { i18n } = useTranslation('header')

  return <Container direction='row' sx={{alignItems: 'center', boxShadow: '0 1rem 1.5rem -.5rem rgba(0, 0, 0, .25)'}}>
    <Stack sx={{width: '50%'}}>
      <Link to='/'>
        <Image alt='logo' sx={{width: '12.5vh'}} srcList='/static/images/logo.png'/>
      </Link>
    </Stack>
    <Stack sx={{width: '20%'}}>
      {['en', 'ru', 'ro'].filter(lang => lang !== i18n.language).map((lang, i) => <Button
        key={i}
        onClick={() => i18n.changeLanguage(lang)}
        sx={{p: 0, color: 'milk.contrastText'}}
      >
        <Typography variant='h5'>{lang}</Typography>
      </Button>)}
    </Stack>
    <Stack sx={{width: '15%', alignItems: 'center'}}>
      <Link to='tel:+37379407032'>
        <Stack sx={{height: '9vw', width: '9vw', bgcolor: 'tertiary.main', borderRadius: '50%', p: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Phone sx={{color: 'white'}} />
        </Stack>
      </Link>
    </Stack>
    <Stack sx={{width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Menu onClick={toggleMenu} fontSize="large" />
    </Stack>
  </Container>
}