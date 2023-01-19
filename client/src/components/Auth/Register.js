import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister, history }) => {
    const [ user, setUser ] = useState({ email: '', password: '', passwordConfirmation: '' })

    const handleSubmit = (e) => {
        e.prevent.default()
        if ( user.password === user.passwordConfirmation ) {
            handleRegister( user, history )
        } else {
            alert('Passwords Do Not Match!')
        }
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    autoFocus
                    required
                    name='email'
                    value={user.email}
                    placeholder="Enter Email"
                    onChange={ (e) => setUser({ ...user, email: e.target.value })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    required
                    name='password'
                    value={user.password}
                    placeholder="Password"
                    onChange={ (e) => setUser({ ...user, password: e.target.value })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control 
                    type="passwordConfirmation" 
                    required
                    name='passwordConfirmation'
                    value={user.passwordConfirmation}
                    placeholder="Password Confirmation"
                    onChange={ (e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                />
            </Form.Group>
            <Button variant='successful' type='submit'>
                Login
            </Button>
        </Form>
    )
}

const ConnectedRegister = (props) => (
    <AuthConsumer>
        { auth => <Register {...props} {...auth} /> }
    </AuthConsumer>
)

export default ConnectedRegister;