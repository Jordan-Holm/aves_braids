import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { AuthConsumer } from '../../providers/AuthProvider';

const Login = ({ handleLogin, history }) => {
    const [ user, setUser ] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user, history);
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
                    type="password" 
                    required
                    name='password'
                    value={user.password}
                    placeholder="Password"
                    onChange={ (e) => setUser({ ...user, password: e.target.value })}
                />
            </Form.Group>
            <Button variant='successful' type='submit'>
                Login
            </Button>
        </Form>
    )
}

const ConnectedLogin = (props) => (
    <AuthConsumer>
        { auth => <Login {...props} {...auth} /> }
    </AuthConsumer>
)

export default ConnectedLogin;