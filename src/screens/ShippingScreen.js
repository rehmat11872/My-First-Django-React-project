import React, { useState, useEffect } from 'react'
import {  Button, Form }  from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' 
import FormContainer from '../components/FormContainer'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { saveShippingAddress }  from '../actions/cartActions'

function ShippingScreen() {

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postelCode, setPostelCode] = useState(shippingAddress.postelCode)
  const [country, setCountry] = useState(shippingAddress.country)
  

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postelCode, country}))
    navigate('/payment')
  }



  return (
    <FormContainer>
        <h1>Shipping</h1>
       <Form onSubmit={submitHandler}>

          <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
              required
              type='text'
              placeholder='Enter Address'
              value={address ? address : ''}
              onChange={(e) => setAddress(e.target.value)}
              >
              </Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
              required
              type='text'
              placeholder='Enter City'
              value={city ? city : ''}
              onChange={(e) => setCity(e.target.value)}
              >
              </Form.Control>
          </Form.Group>


          <Form.Group controlId='postalcode'>
              <Form.Label>Postel Code</Form.Label>
              <Form.Control
              required
              type='text'
              placeholder='Enter Postel Code'
              value={postelCode ? postelCode : ''}
              onChange={(e) => setPostelCode(e.target.value)}
              >
              </Form.Control>
          </Form.Group>


          <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
              required
              type='text'
              placeholder='Enter Country'
              value={country ? country : ''}
              onChange={(e) => setCountry(e.target.value)}
              >
              </Form.Control>
          </Form.Group>


          <Button className='mt-4' type='submit' variant='primary'>
             Continue
          </Button>
       
       </Form>
    
    </FormContainer>
  )
}

export default ShippingScreen