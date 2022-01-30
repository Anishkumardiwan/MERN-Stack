
import './LoginForm.css';
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { React, Component } from 'react';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    onEmailChange(event) {
        const inputValue = event.target.value;
        // console.log(inputValue);

        // Chage the State
        this.setState({
            email: inputValue
        });
    }

    onPassChange(event) {
        const passValue = event.target.value;
        // console.log(passValue);

        this.setState({
            password: passValue
        })
    }

    onLogin() {
        // console.log("User trying to log in");

        console.log(this.state);
    }

    render() {
        return (
            <div className='loginForm'>
                <h1>Welcome To Login Page</h1>
                <div className='loginFormComponent'>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" onChange={(e) => this.onEmailChange(e)} value={this.state.email} placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" onChange={(e) => this.onPassChange(e)} value={this.state.password} placeholder="Password" />
                        </FloatingLabel>
                        <Button onClick={() => this.onLogin()} className='loginButton' variant="primary" type="button">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

// <Button onClick={this.onLogin.bind(this)} className='loginButton' variant="primary" type="button">
//                             Login
//                         </Button>

export default LoginForm;