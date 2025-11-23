import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Close } from "@mui/icons-material"
import { Button, ButtonGroup, Stack, TableCell, TableRow, Typography } from "@mui/material"

import { OrderedProduct } from "../../util/interfaces"
import { useCartDispatchContext, useCategory, useCurrencies, useCurrencyContext } from "../../util/hooks"

import { Image } from "../reusables"

interface ProductProps {
  pr: OrderedProduct
}

export function Product({pr}: ProductProps) {
  const { t, i18n } = useTranslation('cart')
  const category = useCategory(pr)
  const currencies = useCurrencies()
  const currency = useCurrencyContext()
  const dispatch = useCartDispatchContext()
  
  const deleteProduct = useCallback(() => {
    dispatch({type: 'deleted', category: category.name, name: pr.name, size: pr.size})
  }, [category.name, dispatch, pr.name, pr.size])

  const changeQuantity = useCallback((quantity: number) => {
    dispatch({
      type: 'updated',
      category: category.name,
      name: pr.name,
      size: pr.size,
      currencies: currencies,
      quantity: quantity
    })
  }, [category.name, currencies, dispatch, pr.name, pr.size])

  const decrementQuantity = useCallback(() => {
    if (pr.quantity === 1) {
      deleteProduct()
      return
    }
    changeQuantity(pr.quantity - 1)
  }, [changeQuantity, deleteProduct, pr.quantity])

  const incrementQuantity = useCallback(() => {
    if (pr.quantity === 99) {
      return
    }
    changeQuantity(pr.quantity + 1)
  }, [changeQuantity, pr.quantity])

  return <TableRow>
    <TableCell component="th" scope="row">
      <Stack direction='row' gap={1} sx={{alignItems: 'center'}}>
        <Link to={`/product/${category.name}/${pr.name.en}`}>
          <Typography variant='h6'>{category?.nameS[i18n.language]} {pr.name[i18n.language]}</Typography>
        </Link>
        <Close sx={{color: 'secondary.main'}} onClick={deleteProduct} />
      </Stack>
    </TableCell>
    <TableCell>
      <Link to={`/product/${category.name}/${pr.name.en}`}>
        <Image sx={{width: '100%'}} alt={pr.shortcut} srcList={pr.shortcut} />
      </Link>
    </TableCell>
    <TableCell align='right'>
      <Typography variant='h6'>{t('size')} {pr.size.width} x {pr.size.length}</Typography>
    </TableCell>
    <TableCell align='right'>
      <Typography variant='h6'>{pr.size.price[currency]}</Typography>
    </TableCell>
    <TableCell align='right'>
      <Typography variant='h6' sx={{color: 'primary.main'}}>{pr.discount} %</Typography>
    </TableCell>
    <TableCell align='right'>
      <ButtonGroup variant='outlined' color='secondary' sx={{
        alignItems: 'center',
        border: '1px solid #fff',
        borderColor: 'secondary.main',
      }}>
        <Button onClick={decrementQuantity} sx={{border: 0}}>
          <Typography variant='h6'>-</Typography>
        </Button>
        <Typography variant='h6' color='secondary.main'>{pr.quantity}</Typography>
        <Button onClick={incrementQuantity} sx={{border: 0}}>
          <Typography variant='h6'>+</Typography>
        </Button>
      </ButtonGroup>
    </TableCell>
    <TableCell align='right'>
      <Typography variant='h6'>{pr.sum[currency]}</Typography>
    </TableCell>
  </TableRow>
}