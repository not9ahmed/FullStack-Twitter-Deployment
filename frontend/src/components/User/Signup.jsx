import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function Signup(props) {

    const registerHandler = () => {
        
        props.register(newUser)

    }

    const [newUser, setNewUSer] = useState({})


    const changeHandler = (e) => {

        // make copy of the newUser state 
        const user = {...newUser}

        // assign new values to that state
        user[e.target.name] = e.target.value


        console.log('new user object', user)

        // Assign the new user from data form to the user state
        setNewUSer(user)
    }


  return (
    <div>
        <h1>Signup</h1>

        <Container>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" onChange={changeHandler}></Form.Control>
            </Form.Group>



            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" onChange={changeHandler}></Form.Control>
            </Form.Group>


            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" onChange={changeHandler}></Form.Control>
            </Form.Group>


            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={changeHandler}></Form.Control>
            </Form.Group>
        </Container>

        <br />

        <Button variant="primary" onClick={registerHandler}>Register</Button>
    </div>
  )
}

export default Signup