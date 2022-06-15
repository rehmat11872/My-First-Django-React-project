import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useParams, useLocation,  } from "react-router-dom";

function CartScreen() {
  const param = useParams()
  const productId = param.id
  const loaction = useLocation()
  const qty = loaction.search ? Number(loaction.search.split('=')[1]) : 1


  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log('cartItems', cartItems)

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId,qty])
  
  
  return (
    <div>
      Hello product
    </div>
  )
}

export default CartScreen