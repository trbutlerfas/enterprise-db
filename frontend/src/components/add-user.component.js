import React, { Component } from 'react';
import axios from 'axios';
import logo from '../enterprise-e-logo.svg'

const APIEndPoint = process.env.REACT_APP_REQUEST_ENDPOINT;

export default class UserCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
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

    onSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            isLoggedIn: true
        }

        axios.post(APIEndPoint + '/users/add', user).then((res) => console.log(res.data));

        window.location = '/login';
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
                        <h2>Create an Account</h2>
                        <form onSubmit={this.onSubmit} className="user-create">
                        <div className="form-group">
                                <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="first name"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="last name"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="email address"
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                />
                            </div>
                            <div className="form-group">
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
								<input type="submit" value="Create Account" className="btn btn-primary btn-block btn-lg btn-enterprise" />
							</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}