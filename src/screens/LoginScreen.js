import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form }  from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useParams, useLocation, useNavigate } from "react-router-dom";

function LoginScreen() {
  
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')  

  const dispatch = useDispatch()


  const loaction = useLocation()
  const redirect = loaction.search ? loaction.search.split('=')[1]: '/'


  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  const navigate = useNavigate()
  useEffect(() => {
    if (userInfo){
        navigate(redirect)
    }
  }, [navigate, userInfo, redirect])


  const submitHandler = (e) => {
    e.preventDefault()
    console.log('hhhh')
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
       <h1>Sign In </h1>
       {error && <Message variant='danger'>{error}</Message>}
       {loading && <Loader />}

       <Form onSubmit={submitHandler}>

          <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
          </Form.Group>


          <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
          </Form.Group>


          <Button className='mt-3' type='submit' variant='primary'>
          Sign In
          </Button>

         
       </Form>

       <Row className='py-3'>
          <Col>
             New Customer? <Link 
             to={redirect ?  `/register?redirect=${redirect}`: '/register'}>
             Register</Link>
          </Col>
       </Row>
      

    
    </FormContainer>
  )
}

export default LoginScreen