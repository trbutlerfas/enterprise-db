import React, { Component } from 'react';
import axios from 'axios';
import logo from '../enterprise-e-logo.svg'

const APIEndPoint = process.env.REACT_APP_REQUEST_ENDPOINT;

export default class UserLogin extends Component {
    constructor(props) {
        super(props);

        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeIsLoggedIn = this.onChangeIsLoggedIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    onChangeemail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeIsLoggedIn(e) {
        this.setState({
            isLoggedIn: true
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
            isLoggedIn: true
        }

        axios.post(APIEndPoint + '/users/login', user).then((res) => {

            // window.location = '/';
            console.log(res.data);
            console.log(this.state.isLoggedIn);
            
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return (
            <div id="content" className="container">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-lg-6 login-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                            <img src={logo} alt="enterprise logo" className="logo" />
                            </div>
                        </div>
                        <h2>Account Login</h2>
                        <form onSubmit={this.onSubmit} className="user-login">
                            <div className="form-group first">
                                <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="email address"
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                />
                            </div>
                            <div className="form-group second">
                                <input
                                type="password"
                                required
                                className="form-control"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                            </div>
                            <div className="form-group">
								<input type="submit" value="Sign In" className="btn btn-primary btn-block btn-lg btn-enterprise" />
							</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}