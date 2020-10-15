import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ApplyLone extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loginvalidation:false
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
			
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log("email and assword"+this.state.email+this.state.password);
		if(this.state.email===this.state.password){
			this.setState({
				loginvalidation:true
			})
		} 
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" onClick={this.validateLogin} value="Login" />
				</form>
               
				
				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default ApplyLone;
