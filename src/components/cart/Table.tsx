import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Button, Table as MuiTable, Stack, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from "@mui/material"

import { OrderedProduct } from "../../util/interfaces"
import { useTotal } from "../../util/hooks"

import { Product } from "./Product"

interface TableProps {
  products: OrderedProduct[]
}

export function Table({products}: TableProps) {
  const { t } = useTranslation('cart')
  const { total, currency } = useTotal(products)
  
  return <Stack>
    <Typography variant='h5' textAlign='center'>{t('cart')}</Typography>
    <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant='h6'>{t('name')}</Typography>
          </TableCell>
          <TableCell sx={{width: '20%'}}>
            <Typography variant='h6'>{t('shortcut')}</Typography>
          </TableCell>
          <TableCell align='right'>
            <Typography variant='h6'>{t('size')}</Typography>
          </TableCell>
          <TableCell align='right'>
            <Typography variant='h6'>{t('price')}: ({currency})</Typography>
          </TableCell>
          <TableCell align='right'>
            <Typography variant='h6'>{t('discount')}</Typography>
          </TableCell>
          <TableCell align='right'>
            <Typography variant='h6'>{t('quantity')}</Typography>
          </TableCell>
          <TableCell align='right'>
            <Typography variant='h6'>{t('total')} ({currency})</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((pr, i) => <Product key={i} pr={pr} />)}
      </TableBody>
      <TableFooter>
        <TableRow sx={{border: 0}}>
          <TableCell>
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                <Typography variant='h6'>{t('add')}</Typography>
              </Button>
            </Link>
          </TableCell>
          <TableCell colSpan={5} />
          <TableCell align='right'>
            <Typography variant='h5' sx={{color: 'primary.main'}}>{total.toFixed(2)}</Typography>
          </TableCell>
        </TableRow>
      </TableFooter>
    </MuiTable>
  </Stack>
}